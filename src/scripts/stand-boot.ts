// Wires the planner form to the 3D viewer: view tabs, logo upload, lazy loading of three.js,
// and the exporter the quote form calls to attach the design files.
import type { StandConfig } from './stand3d';

type Viewer = ReturnType<typeof import('./stand3d').createViewer>;
type Txt = { loading: string; noWebgl: string };

declare global {
  interface Window {
    __standExport?: () => Promise<{ files: { role?: string; name: string; mime: string; b64: string }[]; config: Record<string, unknown> } | null>;
    __standApplied?: boolean;
  }
}

const blobToB64 = (b: Blob) => new Promise<string>((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(',')[1] ?? '');
  r.onerror = () => rej(r.error);
  r.readAsDataURL(b);
});

export function boot() {
  const form = document.querySelector<HTMLFormElement>('[data-planner]');
  const host = document.querySelector<HTMLElement>('[data-stand3d]');
  const out = document.querySelector<HTMLElement>('.pl-out');
  if (!form || !host || !out) return;
  const txt: Txt = JSON.parse(out.dataset.txt || '{}');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const status = out.querySelector<HTMLElement>('[data-stand-status]')!;
  const tabs = [...out.querySelectorAll<HTMLButtonElement>('[data-view]')];
  const panes = { '3d': out.querySelector<HTMLElement>('[data-pane="3d"]')!, '2d': out.querySelector<HTMLElement>('[data-pane="2d"]')! };

  let logo: HTMLCanvasElement | null = null;
  let viewer: Viewer | null = null;
  let loading: Promise<Viewer | null> | null = null;
  let failed = false;

  const showView = (v: '3d' | '2d') => {
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.view === v)));
    panes['3d'].hidden = v !== '3d';
    panes['2d'].hidden = v !== '2d';
  };
  tabs.forEach((t) => t.addEventListener('click', () => showView(t.dataset.view as '3d' | '2d')));

  const config = (): StandConfig => {
    const f = new FormData(form);
    const custom = Number(f.get('sizeCustom')) || 0;
    return {
      size: custom >= 4 ? custom : Number(f.get('size')),
      type: f.get('type') as StandConfig['type'],
      build: f.get('build') as StandConfig['build'],
      extras: f.getAll('extras') as string[],
      wall: (f.get('wall') || 'white') as StandConfig['wall'],
      carpet: (f.get('carpet') || 'grey') as StandConfig['carpet'],
      accent: String(f.get('accent') || '#F5A800'),
      logo,
    };
  };

  const webglOK = () => {
    try {
      const c = document.createElement('canvas');
      return !!(c.getContext('webgl2') || c.getContext('webgl'));
    } catch { return false; }
  };

  const ensure = () => {
    if (viewer) return Promise.resolve(viewer);
    if (failed) return Promise.resolve(null);
    if (!loading) {
      if (!webglOK()) {
        failed = true;
        status.textContent = txt.noWebgl;
        tabs.find((t) => t.dataset.view === '3d')!.hidden = true;
        showView('2d');
        return Promise.resolve(null);
      }
      status.textContent = txt.loading;
      loading = import('./stand3d').then(({ createViewer }) => {
        viewer = createViewer(host, { reducedMotion: reduced });
        viewer.update(config());
        status.textContent = '';
        out.classList.add('is-3d-ready');
        return viewer;
      }).catch(() => {
        failed = true;
        status.textContent = txt.noWebgl;
        showView('2d');
        return null;
      });
    }
    return loading;
  };

  // Load three.js only when the planner comes near the viewport.
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); ensure(); }
  }, { rootMargin: '400px' });
  io.observe(host);

  let t = 0;
  form.addEventListener('input', () => {
    clearTimeout(t);
    t = window.setTimeout(() => viewer?.update(config()), 60);
  });

  // Logo upload: read locally, downscale, never sent anywhere except inside the design files.
  const file = form.querySelector<HTMLInputElement>('input[name="logo"]');
  const thumb = form.querySelector<HTMLElement>('[data-logo-thumb]');
  const clear = form.querySelector<HTMLButtonElement>('[data-logo-clear]');
  const setLogo = (c: HTMLCanvasElement | null) => {
    logo = c;
    if (thumb) {
      thumb.innerHTML = '';
      if (c) { const i = new Image(); i.src = c.toDataURL('image/png'); i.alt = ''; thumb.append(i); }
      thumb.hidden = !c;
    }
    if (clear) clear.hidden = !c;
    viewer?.update(config());
  };
  file?.addEventListener('change', async () => {
    const f = file.files?.[0];
    if (!f || !f.type.startsWith('image/') || f.size > 8 * 1024 * 1024) { file.value = ''; return; }
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, 1024 / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * k));
      c.height = Math.max(1, Math.round(img.naturalHeight * k));
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      setLogo(c);
    };
    img.onerror = () => { URL.revokeObjectURL(url); file.value = ''; };
    img.src = url;
  });
  clear?.addEventListener('click', () => { if (file) file.value = ''; setLogo(null); });

  out.querySelector('[data-stand-reset]')?.addEventListener('click', () => viewer?.resetView());
  out.querySelector('[data-stand-save]')?.addEventListener('click', async () => {
    const v = await ensure();
    if (!v) return;
    const a = document.createElement('a');
    a.href = v.snapshot(1600, 1000);
    a.download = 'oxira-events-stand.jpg';
    a.click();
  });


  // AR: show the current stand at real size in the visitor's space (Quick Look on iPhone, WebXR / Scene Viewer on Android).
  const dlg = document.querySelector<HTMLDialogElement>('[data-ar-dialog]');
  const arTxt = dlg ? JSON.parse(dlg.dataset.txt || '{}') : {};
  let arUrl = '';
  document.querySelector('[data-stand-ar]')?.addEventListener('click', async () => {
    if (!dlg) return;
    const stage = dlg.querySelector<HTMLElement>('[data-ar-stage]')!;
    const hint = dlg.querySelector<HTMLElement>('[data-ar-hint]')!;
    stage.querySelectorAll('model-viewer').forEach((m) => m.remove());
    stage.querySelector<HTMLElement>('[data-ar-status]')!.hidden = false;
    hint.textContent = '';
    dlg.showModal();
    const v = await ensure();
    if (!v) { hint.textContent = arTxt.unsupported; return; }
    v.update(config());
    const [glb] = await Promise.all([v.exportGLB(), import('@google/model-viewer')]);
    if (arUrl) URL.revokeObjectURL(arUrl);
    arUrl = URL.createObjectURL(new Blob([glb], { type: 'model/gltf-binary' }));
    const mv = document.createElement('model-viewer') as HTMLElement & { canActivateAR?: boolean };
    mv.setAttribute('src', arUrl);
    mv.setAttribute('alt', arTxt.title);
    mv.setAttribute('ar', '');
    mv.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
    mv.setAttribute('ar-scale', 'fixed');
    mv.setAttribute('ar-placement', 'floor');
    mv.setAttribute('camera-controls', '');
    mv.setAttribute('touch-action', 'pan-y');
    mv.setAttribute('shadow-intensity', '1');
    mv.setAttribute('environment-image', 'neutral');
    mv.setAttribute('camera-orbit', '35deg 65deg auto');
    const btn = document.createElement('button');
    btn.slot = 'ar-button';
    btn.className = 'ar-place';
    btn.type = 'button';
    btn.textContent = arTxt.place;
    mv.append(btn);
    mv.addEventListener('load', () => {
      stage.querySelector<HTMLElement>('[data-ar-status]')!.hidden = true;
      const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      hint.textContent = mv.canActivateAR ? arTxt.hint : mobile ? arTxt.unsupported : arTxt.desktop;
    }, { once: true });
    stage.append(mv);
  });
  dlg?.querySelector('[data-ar-close]')?.addEventListener('click', () => dlg.close());
  dlg?.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

  // Called by the quote form on submit (only when the visitor applied the planner outline).
  window.__standExport = async () => {
    const v = await ensure();
    if (!v) return null;
    const cfg = config();
    v.update(cfg);
    const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const jpg = v.snapshot(1600, 1000, true).split(',')[1];
    const glb = await v.exportGLB();
    const obj = v.exportOBJ();
    const files = [
      { role: 'preview', name: `oxira-stand-${stamp}.jpg`, mime: 'image/jpeg', b64: jpg },
      { name: `oxira-stand-${stamp}.glb`, mime: 'model/gltf-binary', b64: await blobToB64(new Blob([glb], { type: 'model/gltf-binary' })) },
      { name: `oxira-stand-${stamp}.obj`, mime: 'text/plain', b64: await blobToB64(new Blob([obj], { type: 'text/plain' })) },
    ];
    // keep the request comfortably under the webhook limit
    let total = files.reduce((n, f) => n + f.b64.length, 0);
    if (total > 7_000_000) { files.pop(); total = files.reduce((n, f) => n + f.b64.length, 0); }
    if (total > 7_000_000) files.splice(1);
    const [w, d] = v.dims();
    return {
      files,
      config: { size: cfg.size, width_m: w, depth_m: d, type: cfg.type, build: cfg.build, extras: cfg.extras, wall: cfg.wall, floor: cfg.carpet, accent: cfg.accent, logo: !!cfg.logo },
    };
  };
}
