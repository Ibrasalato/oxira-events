// Parametric 3D exhibition stand, driven by the planner on the home page.
// Loaded on demand (dynamic import) so three.js never weighs on the first paint.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';

export type StandType = 'row' | 'corner' | 'peninsula' | 'island';
export type StandConfig = {
  size: number;
  type: StandType;
  build: 'custom' | 'modular' | 'double';
  extras: string[];
  wall: 'white' | 'navy' | 'black' | 'wood';
  carpet: 'grey' | 'blue' | 'red' | 'wood';
  accent: string;
  logo: HTMLCanvasElement | null;
};

// Same footprint rule as the 2D plan, so both views agree.
export const dims = (a: number): [number, number] => {
  const d = a <= 12 ? 3 : a <= 30 ? Math.min(5, Math.round(Math.sqrt(a))) : a <= 64 ? 6 : a <= 120 ? 8 : 10;
  const w = Math.max(d, Math.round((a / d) * 2) / 2);
  return [w, d];
};

const WALL = { white: 0xf3f4f6, navy: 0x0f2d4a, black: 0x1c1f24, wood: 0xb98a5e } as const;
const FLOOR = { grey: 0x8b949f, blue: 0x24508f, red: 0xa8232c, wood: 0xa57a4f } as const;

type Mat = THREE.MeshStandardMaterial;

export function createViewer(host: HTMLElement, opts: { reducedMotion: boolean }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.append(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe9eef5);
  scene.fog = new THREE.Fog(0xe9eef5, 28, 70);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  const camera = new THREE.PerspectiveCamera(38, 4 / 3, 0.1, 200);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minDistance = 3;
  controls.maxDistance = 40;
  controls.autoRotate = !opts.reducedMotion;
  controls.autoRotateSpeed = 0.6;
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  // Hall lighting
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb9c3cf, 0.35));
  const sun = new THREE.DirectionalLight(0xffffff, 1.9);
  sun.position.set(8, 16, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);

  // Hall floor and aisle markings (not exported)
  const hall = new THREE.Group();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), new THREE.MeshStandardMaterial({ color: 0xd5dbe3, roughness: 0.95 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  hall.add(floor);
  const grid = new THREE.GridHelper(140, 70, 0xc3cbd6, 0xc3cbd6);
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.35;
  grid.position.y = 0.002;
  hall.add(grid);
  scene.add(hall);
  const aisles = new THREE.Group();
  scene.add(aisles);

  let stand = new THREE.Group();
  stand.name = 'oxira_stand';
  scene.add(stand);

  const textures: THREE.Texture[] = [];
  let lastCfg: StandConfig | null = null;
  let dimsNow: [number, number] = [6, 6];

  // ---------- helpers ----------
  const mat = (color: number | string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): Mat =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0, ...extra });
  const box = (g: THREE.Group, name: string, w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };
  const cyl = (g: THREE.Group, name: string, rt: number, rb: number, h: number, m: THREE.Material, x: number, y: number, z: number, seg = 24) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };
  const canvasTex = (c: HTMLCanvasElement) => {
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    textures.push(t);
    return t;
  };
  const isLight = (hex: string) => {
    const c = new THREE.Color(hex);
    return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b > 0.55;
  };
  const placeholderLogo = (ink: string) => {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 160;
    const x = c.getContext('2d')!;
    x.fillStyle = ink;
    x.font = '700 92px "IBM Plex Sans", Arial, sans-serif';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    x.fillText('LOGO', 256, 84);
    return c;
  };
  // Logo plane fitted inside maxW × maxH, facing +z (or rotated by caller)
  const logoPlane = (g: THREE.Group, name: string, cfg: StandConfig, maxW: number, maxH: number, onDark: boolean, plate = false) => {
    const src = cfg.logo ?? placeholderLogo(onDark ? '#ffffff' : '#0a253e');
    const aspect = src.width / src.height;
    let w = maxW, h = maxW / aspect;
    if (h > maxH) { h = maxH; w = maxH * aspect; }
    const m = new THREE.MeshStandardMaterial({ map: canvasTex(src), transparent: true, roughness: 0.4, alphaTest: 0.02 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
    mesh.name = name;
    if (plate && cfg.logo) {
      // light-box style plate so any logo colour reads on any brand colour
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(w + h * 0.5, h * 1.35), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.15, roughness: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
      pl.name = `${name}_plate`;
      pl.position.z = -0.012;
      mesh.add(pl);
    }
    g.add(mesh);
    return mesh;
  };
  const ledTexture = (accent: string) => {
    const c = document.createElement('canvas');
    c.width = 640; c.height = 360;
    const x = c.getContext('2d')!;
    const gr = x.createLinearGradient(0, 0, 640, 360);
    gr.addColorStop(0, '#0a253e');
    gr.addColorStop(0.55, '#007db4');
    gr.addColorStop(1, '#0a253e');
    x.fillStyle = gr;
    x.fillRect(0, 0, 640, 360);
    x.fillStyle = accent;
    x.beginPath(); x.moveTo(380, 0); x.lineTo(640, 0); x.lineTo(640, 260); x.closePath(); x.fill();
    x.globalAlpha = 0.18; x.fillStyle = '#ffffff';
    for (let i = 0; i < 9; i++) x.fillRect(40 + i * 64, 250 - (i % 4) * 30, 34, 70 + (i % 4) * 30);
    return canvasTex(c);
  };
  const graphicTexture = (accent: string, base: string) => {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const x = c.getContext('2d')!;
    x.fillStyle = base; x.fillRect(0, 0, 512, 512);
    x.fillStyle = accent;
    x.beginPath(); x.moveTo(0, 512); x.lineTo(512, 140); x.lineTo(512, 512); x.closePath(); x.fill();
    x.globalAlpha = 0.85; x.fillStyle = '#007db4';
    x.beginPath(); x.moveTo(0, 512); x.lineTo(300, 300); x.lineTo(300, 512); x.closePath(); x.fill();
    return canvasTex(c);
  };

  const clearGroup = (g: THREE.Object3D) => {
    g.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mm = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mm)) mm.forEach((x) => x.dispose()); else mm?.dispose();
    });
    g.clear();
  };

  // ---------- the stand ----------
  const build = (cfg: StandConfig) => {
    clearGroup(stand);
    clearGroup(aisles);
    textures.splice(0).forEach((t) => t.dispose());
    scene.remove(stand);
    stand = new THREE.Group();
    stand.name = 'oxira_stand';
    scene.add(stand);

    const [W, D] = dims(cfg.size);
    dimsNow = [W, D];
    const has = (id: string) => cfg.extras.includes(id);
    const double = cfg.build === 'double';
    const modular = cfg.build === 'modular';
    const H = double ? 4.2 : modular ? 2.5 : 3;
    const T = modular ? 0.06 : 0.12;
    const P = 0.08; // platform height
    const wallHex = WALL[cfg.wall];
    const darkWall = cfg.wall === 'navy' || cfg.wall === 'black';
    const wallM = mat(wallHex, { roughness: cfg.wall === 'wood' ? 0.7 : 0.6 });
    const accentM = mat(cfg.accent, { roughness: 0.45 });
    const metalM = mat(0xc9ced6, { metalness: 0.85, roughness: 0.3 });
    const darkM = mat(0x1a1f26, { roughness: 0.5 });
    const whiteM = mat(0xffffff, { roughness: 0.35 });
    const glassM = new THREE.MeshStandardMaterial({ color: 0xdcecf8, transparent: true, opacity: 0.28, roughness: 0.05, metalness: 0.1, depthWrite: false });
    const lightM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3d6, emissiveIntensity: 2.2 });

    // platform
    box(stand, 'platform_floor', W, P, D, mat(FLOOR[cfg.carpet], { roughness: cfg.carpet === 'wood' ? 0.6 : 0.95 }), 0, P / 2, 0);
    // edge trim
    const trimM = mat(0xb7bec8, { metalness: 0.6, roughness: 0.35 });
    box(stand, 'platform_trim_front', W, 0.02, 0.02, trimM, 0, P, D / 2);

    const back = -D / 2, front = D / 2, left = -W / 2, right = W / 2;
    const closed = {
      back: cfg.type !== 'island',
      left: cfg.type === 'row' || cfg.type === 'corner',
      right: cfg.type === 'row',
    };
    const deckD = double ? Math.max(2.2, D * 0.45) : 0;
    const mw = Math.min(3.2, W * 0.36), md = double ? Math.min(deckD - 0.4, 2.6) : Math.min(2.6, D * 0.42), mh = 2.4;
    const mx = (cfg.type === 'corner' || cfg.type === 'row') && !double ? left + T + mw / 2 + 0.02 : right - (double ? 0.2 : T) - mw / 2 - (closed.right ? 0.02 : 0.15);
    const mz = back + T + md / 2 + 0.02 + (cfg.type === 'island' ? 1.8 : 0);
    const meetingOnBackWall = has('meeting') && !double && cfg.type !== 'island';

    // walls
    const wallY = P + H / 2;
    if (closed.back) box(stand, 'wall_back', W, H, T, wallM, 0, wallY, back + T / 2);
    if (closed.left) box(stand, 'wall_left', T, H, D - (closed.back ? T : 0), wallM, left + T / 2, wallY, closed.back ? T / 2 : 0);
    if (closed.right) box(stand, 'wall_right', T, H, D - (closed.back ? T : 0), wallM, right - T / 2, wallY, closed.back ? T / 2 : 0);

    // modular system: visible aluminium posts and top rail
    if (modular) {
      const post = (x: number, z: number) => box(stand, 'system_post', 0.05, H, 0.05, metalM, x, wallY, z);
      if (closed.back) {
        for (let x = left; x <= right + 0.001; x += 1) post(Math.min(Math.max(x, left + 0.03), right - 0.03), back + 0.08);
        box(stand, 'system_rail_back', W, 0.05, 0.05, metalM, 0, P + H, back + 0.08);
      }
      const sidePosts = (xx: number, name: string) => {
        for (let z = back + 1; z <= front + 0.001; z += 1) post(xx, Math.min(z, front - 0.03));
        box(stand, name, 0.05, 0.05, D, metalM, xx, P + H, 0);
      };
      if (closed.left) sidePosts(left + 0.08, 'system_rail_left');
      if (closed.right) sidePosts(right - 0.08, 'system_rail_right');
    }

    // fascia + logo on the back wall
    const fasciaH = modular ? 0.45 : 0.6;
    const bwFace = back + T + 0.001;
    if (closed.back) {
      box(stand, 'fascia_back', W, fasciaH, 0.06, accentM, 0, P + H - fasciaH / 2, back + T + 0.03);
      const lg = logoPlane(stand, 'logo_fascia', cfg, Math.min(W * 0.5, 3.2), fasciaH * (cfg.logo ? 0.6 : 0.72), !isLight(cfg.accent), true);
      lg.position.set(0, P + H - fasciaH / 2, back + T + 0.09);
    }

    // island: central core with logo, plus a hanging sign
    let coreFrontZ = back;
    if (cfg.type === 'island') {
      const cw = Math.min(W * 0.5, 4), cd = 1.1, ch = Math.min(H, 3);
      const cz = back + 0.6 + cd / 2;
      box(stand, 'island_core_storage', cw, ch, cd, wallM, 0, P + ch / 2, cz);
      box(stand, 'island_core_fascia', cw, 0.5, cd + 0.02, accentM, 0, P + ch - 0.25, cz);
      const lg = logoPlane(stand, 'logo_core', cfg, cw * 0.6, 0.32, !isLight(cfg.accent), true);
      lg.position.set(0, P + ch - 0.25, cz + cd / 2 + 0.035);
      coreFrontZ = cz + cd / 2;
      // hanging sign
      const sy = P + Math.max(H, 3) + 1.6, sw = Math.min(W * 0.6, 5), sd = Math.min(D * 0.6, 5);
      const ring = new THREE.Group(); ring.name = 'hanging_sign';
      box(ring, 'sign_front', sw, 0.9, 0.08, accentM, 0, 0, sd / 2);
      box(ring, 'sign_back', sw, 0.9, 0.08, accentM, 0, 0, -sd / 2);
      box(ring, 'sign_left', 0.08, 0.9, sd, accentM, -sw / 2, 0, 0);
      box(ring, 'sign_right', 0.08, 0.9, sd, accentM, sw / 2, 0, 0);
      const f = logoPlane(ring, 'logo_sign_front', cfg, sw * 0.6, 0.5, !isLight(cfg.accent), true);
      f.position.set(0, 0, sd / 2 + 0.07);
      const b = logoPlane(ring, 'logo_sign_back', cfg, sw * 0.6, 0.5, !isLight(cfg.accent), true);
      b.position.set(0, 0, -sd / 2 - 0.07); b.rotation.y = Math.PI;
      ring.position.y = sy;
      for (const [x, z] of [[-sw / 2, -sd / 2], [sw / 2, -sd / 2], [-sw / 2, sd / 2], [sw / 2, sd / 2]]) {
        const c = cyl(stand, 'sign_cable', 0.008, 0.008, 3, darkM, x, sy + 1.95, z, 6);
        c.castShadow = false;
      }
      stand.add(ring);
    }

    // LED screen (or a big logo if there is no screen)
    const centerFaceZ = cfg.type === 'island' ? coreFrontZ + 0.02 : bwFace + 0.01;
    // the screen sits below the logo band (or below the deck on a double-deck stand)
    const topLimit = double ? P + 2.55 : cfg.type === 'island' ? P + Math.min(H, 3) - 0.65 : P + H - fasciaH - 0.15;
    const maxW = cfg.type === 'island' ? Math.min(W * 0.5, 4) * 0.8 : Math.min(3.2, W * 0.45);
    const ledH = Math.min(maxW * 9 / 16, topLimit - P - 0.5);
    const ledW = ledH * 16 / 9;
    const midY = topLimit - ledH / 2;
    // centre of the back wall span not taken by the meeting room
    const freeL = meetingOnBackWall && mx < 0 ? mx + mw / 2 : left + T;
    const freeR = meetingOnBackWall && mx > 0 ? mx - mw / 2 : right - T;
    const cx0 = cfg.type === 'island' ? 0 : (freeL + freeR) / 2;
    const ledScale = cfg.type === 'island' ? 1 : Math.min(1, (freeR - freeL - 0.4) / ledW);
    if (closed.back || cfg.type === 'island') {
      if (has('led')) {
        box(stand, 'led_frame', ledW * ledScale + 0.08, ledH * ledScale + 0.08, 0.06, darkM, cx0, midY, centerFaceZ + 0.03);
        const scr = new THREE.Mesh(new THREE.PlaneGeometry(ledW * ledScale, ledH * ledScale), new THREE.MeshStandardMaterial({ map: ledTexture(cfg.accent), emissive: 0xffffff, emissiveMap: textures[textures.length - 1], emissiveIntensity: 0.9, roughness: 0.2 }));
        scr.name = 'led_screen';
        scr.position.set(cx0, midY, centerFaceZ + 0.065);
        stand.add(scr);
      } else if (closed.back && !double) {
        const lg = logoPlane(stand, 'logo_wall', cfg, Math.min((freeR - freeL) * 0.6, 3), 1.1, darkWall);
        lg.position.set(cx0, midY, bwFace + 0.01);
      }
    }

    // side wall graphics or accent stripe
    const sideDecor = (side: 'left' | 'right') => {
      const sx = side === 'left' ? left + T + 0.005 : right - T - 0.005;
      const rot = side === 'left' ? Math.PI / 2 : -Math.PI / 2;
      if (has('print')) {
        const gw = Math.min(D * 0.55, 3.2), gh = Math.min(H - 0.6, 2.2);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(gw, gh), new THREE.MeshStandardMaterial({ map: graphicTexture(cfg.accent, darkWall ? '#0a253e' : '#ffffff'), roughness: 0.6 }));
        m.name = `graphic_${side}`;
        m.rotation.y = rot;
        m.position.set(sx, P + 0.3 + gh / 2, front - gw / 2 - 0.4);
        stand.add(m);
      } else {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(0.35, H), new THREE.MeshStandardMaterial({ color: cfg.accent, roughness: 0.45 }));
        m.name = `accent_stripe_${side}`;
        m.rotation.y = rot;
        m.position.set(sx, P + H / 2, front - 0.45);
        stand.add(m);
      }
    };
    if (closed.left) sideDecor('left');
    if (closed.right) sideDecor('right');

    // custom build: a branded totem at the front corner
    if (cfg.build === 'custom' && cfg.type !== 'island') {
      const tx = left + (closed.left ? T : 0) + 0.3;
      const th = H + 0.4;
      box(stand, 'totem', 0.5, th, 0.5, wallM, tx, P + th / 2, front - 0.45);
      box(stand, 'totem_accent', 0.52, 0.9, 0.52, accentM, tx, P + th - 0.45, front - 0.45);
      const lg = logoPlane(stand, 'logo_totem', cfg, 0.38, 0.6, !isLight(cfg.accent), true);
      lg.position.set(tx, P + th - 0.45, front - 0.45 + 0.29);
    }

    // double deck
    if (double) {
      const dz = back + deckD / 2;
      const dy = P + 2.8;
      box(stand, 'deck_floor', W, 0.2, deckD, mat(FLOOR[cfg.carpet], { roughness: 0.9 }), 0, dy + 0.1, dz);
      box(stand, 'deck_edge', W, 0.22, 0.04, accentM, 0, dy + 0.1, back + deckD + 0.02);
      for (const x of [left + 0.12, right - 0.12, 0]) cyl(stand, 'deck_column', 0.07, 0.07, 2.8, metalM, x, P + 1.4, back + deckD - 0.1, 16);
      box(stand, 'deck_railing_glass', W, 1, 0.02, glassM, 0, dy + 0.7, back + deckD - 0.02);
      box(stand, 'deck_railing_top', W, 0.04, 0.05, metalM, 0, dy + 1.2, back + deckD - 0.02);
      if (!closed.left) box(stand, 'deck_railing_left', 0.02, 1, deckD, glassM, left + 0.01, dy + 0.7, dz);
      if (!closed.right) box(stand, 'deck_railing_right', 0.02, 1, deckD, glassM, right - 0.01, dy + 0.7, dz);
      // stairs along the right side, rising toward the deck
      const steps = 14, rise = 2.8 / steps, run = Math.min(3.9, D - deckD - 0.6), tread = run / steps, sx = right - 0.65;
      for (let i = 0; i < steps; i++) {
        const z = back + deckD + run - (i + 0.5) * tread;
        box(stand, 'stair_step', 1, 0.05, tread * 0.98, darkM, sx, P + (i + 1) * rise, z);
      }
      box(stand, 'stair_stringer', 0.04, 0.1, Math.hypot(run, 2.8), metalM, sx - 0.52, P + 1.45, back + deckD + run / 2).rotation.x = Math.atan2(2.8, run);
    }

    // meeting room (glass box). On a double deck it sits upstairs.
    const fy = double ? P + 3 : P;
    if (has('meeting')) {
      const g = new THREE.Group(); g.name = 'meeting_room';
      box(g, 'meeting_glass_front', mw, mh, 0.02, glassM, mx, fy + mh / 2, mz + md / 2);
      box(g, 'meeting_glass_side', 0.02, mh, md, glassM, mx + (mx < 0 ? mw / 2 : -mw / 2), fy + mh / 2, mz);
      box(g, 'meeting_roof_frame', mw, 0.08, 0.06, darkM, mx, fy + mh, mz + md / 2);
      box(g, 'meeting_frost_band', mw, 0.35, 0.025, whiteM, mx, fy + 1.1, mz + md / 2 + 0.005);
      cyl(g, 'meeting_table', 0.55, 0.55, 0.04, whiteM, mx, fy + 0.74, mz, 32);
      cyl(g, 'meeting_table_leg', 0.04, 0.04, 0.72, metalM, mx, fy + 0.37, mz, 12);
      for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
        box(g, 'meeting_chair', 0.42, 0.45, 0.42, darkM, mx + Math.cos(a) * 0.85, fy + 0.225, mz + Math.sin(a) * 0.85);
      }
      stand.add(g);
    }

    // storage room
    if (has('storage')) {
      const sw = 1.2, sd = 1.1, sh = Math.min(H, 2.5);
      const meetingOnLeft = has('meeting') && !double && (cfg.type === 'corner' || cfg.type === 'row');
      const sxPos = meetingOnLeft || cfg.type === 'peninsula' || cfg.type === 'island' ? right - (closed.right ? T : 0) - sw / 2 - 0.02 : left + (closed.left ? T : 0) + sw / 2 + 0.02;
      if (cfg.type !== 'island') {
        const g = new THREE.Group(); g.name = 'storage';
        box(g, 'storage_box', sw, sh, sd, wallM, double ? left + sw / 2 + 0.2 : sxPos, P + sh / 2, back + T + sd / 2 + 0.01);
        box(g, 'storage_door', 0.8, 2, 0.01, darkWall ? whiteM : darkM, double ? left + sw / 2 + 0.2 : sxPos, P + 1, back + T + sd + 0.016);
        stand.add(g);
      }
    }

    // reception counter
    if (has('counter')) {
      const cx = W >= 5 ? -W * 0.18 : 0, cz = front - 0.85;
      const g = new THREE.Group(); g.name = 'reception_counter';
      box(g, 'counter_body', 1.6, 1.02, 0.6, whiteM, cx, P + 0.51, cz);
      box(g, 'counter_top', 1.7, 0.04, 0.66, darkM, cx, P + 1.04, cz);
      box(g, 'counter_front_panel', 1.5, 0.75, 0.01, accentM, cx, P + 0.55, cz + 0.306);
      const lg = logoPlane(g, 'logo_counter', cfg, 1.0, cfg.logo ? 0.34 : 0.4, !isLight(cfg.accent), true);
      lg.position.set(cx, P + 0.58, cz + 0.33);
      box(g, 'counter_stool', 0.38, 0.75, 0.38, darkM, cx + 0.4, P + 0.375, cz - 0.6);
      stand.add(g);
    }

    // lounge: high table and stools on stands of 18 m² and more
    if (W * D >= 18) {
      const lx = W * 0.22, lz = D * 0.12;
      const g = new THREE.Group(); g.name = 'lounge';
      cyl(g, 'high_table_top', 0.4, 0.4, 0.04, whiteM, lx, P + 1.08, lz, 32);
      cyl(g, 'high_table_leg', 0.04, 0.04, 1.06, metalM, lx, P + 0.53, lz, 12);
      cyl(g, 'high_table_base', 0.25, 0.25, 0.02, metalM, lx, P + 0.01, lz, 24);
      for (const a of [0.4, Math.PI + 0.4]) {
        cyl(g, 'stool_seat', 0.19, 0.19, 0.06, accentM, lx + Math.cos(a) * 0.65, P + 0.78, lz + Math.sin(a) * 0.65, 24);
        cyl(g, 'stool_leg', 0.025, 0.025, 0.75, metalM, lx + Math.cos(a) * 0.65, P + 0.38, lz + Math.sin(a) * 0.65, 8);
      }
      stand.add(g);
    }

    // giveaways display
    if (has('giveaways')) {
      const gx = W >= 5 ? -W * 0.38 : -W * 0.3, gz = D * 0.05;
      const g = new THREE.Group(); g.name = 'giveaways_display';
      box(g, 'display_tower', 0.6, 1.5, 0.45, whiteM, gx, P + 0.75, gz);
      const cols = [cfg.accent, '#007db4', '#0a253e'];
      for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) box(g, 'giveaway_box', 0.18, 0.14, 0.18, mat(cols[(i + j) % 3]), gx - 0.15 + j * 0.3, P + 0.6 + i * 0.35, gz + 0.1);
      stand.add(g);
    }

    // speakers
    if (has('sound')) {
      for (const sx of [left + 0.35, right - 0.35]) {
        cyl(stand, 'speaker_pole', 0.025, 0.025, 1.7, darkM, sx, P + 0.85, front - 0.3, 10);
        box(stand, 'speaker', 0.3, 0.5, 0.28, darkM, sx, P + 1.95, front - 0.3);
      }
    }

    // lighting: truss frame with spots, or simple arm spots on the fascia
    if (has('lighting')) {
      const ty = P + H + (double ? 0.5 : 0.6), inset = 0.25;
      const trussM = mat(0x2b3138, { metalness: 0.7, roughness: 0.35 });
      const g = new THREE.Group(); g.name = 'lighting_truss';
      box(g, 'truss_front', W - inset * 2, 0.25, 0.25, trussM, 0, ty, front - inset);
      box(g, 'truss_back', W - inset * 2, 0.25, 0.25, trussM, 0, ty, back + inset);
      box(g, 'truss_left', 0.25, 0.25, D - inset * 2, trussM, left + inset, ty, 0);
      box(g, 'truss_right', 0.25, 0.25, D - inset * 2, trussM, right - inset, ty, 0);
      for (let x = left + 1; x < right - 0.5; x += 1.5) {
        cyl(g, 'spot', 0.07, 0.09, 0.2, darkM, x, ty - 0.22, front - inset, 12);
        cyl(g, 'spot_lens', 0.065, 0.065, 0.01, lightM, x, ty - 0.33, front - inset, 12);
      }
      stand.add(g);
    } else if (closed.back) {
      for (let x = left + 0.8; x < right - 0.4; x += 1.6) {
        box(stand, 'arm_spot', 0.03, 0.03, 0.5, darkM, x, P + H + 0.02, back + T + 0.25);
        cyl(stand, 'arm_spot_head', 0.05, 0.06, 0.12, darkM, x, P + H - 0.04, back + T + 0.5, 10);
      }
    }

    // plant at a free front corner
    if (W * D >= 16) {
      const px = has('sound') ? (cfg.type === 'row' ? right - 0.9 : right - 0.9) : right - 0.35;
      const pz = front - 0.35 - (has('sound') ? 0.5 : 0);
      cyl(stand, 'planter', 0.2, 0.16, 0.45, mat(0x2b3138, { roughness: 0.6 }), px, P + 0.225, pz, 20);
      const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.33, 1), mat(0x3f7d4a, { roughness: 0.8, flatShading: true }));
      leaves.name = 'plant_foliage';
      leaves.position.set(px, P + 0.75, pz);
      leaves.castShadow = true;
      stand.add(leaves);
    }

    // aisle markings on open sides (hall only)
    const dashM = new THREE.MeshBasicMaterial({ color: 0xf5a800 });
    const dash = (x1: number, z1: number, x2: number, z2: number) => {
      const len = Math.hypot(x2 - x1, z2 - z1), n = Math.floor(len / 0.5);
      for (let i = 0; i < n; i += 2) {
        const t = (i + 0.5) / n;
        const m = new THREE.Mesh(new THREE.BoxGeometry(x1 === x2 ? 0.05 : 0.45, 0.004, x1 === x2 ? 0.45 : 0.05), dashM);
        m.position.set(x1 + (x2 - x1) * t, 0.003, z1 + (z2 - z1) * t);
        aisles.add(m);
      }
    };
    const off = 0.35;
    dash(left, front + off, right, front + off);
    if (!closed.right) dash(right + off, back, right + off, front);
    if (!closed.left) dash(left - off, back, left - off, front);
    if (!closed.back) dash(left, back - off, right, back - off);

    // shadow camera fits the stand
    const s = Math.max(W, D) * 0.9 + 3;
    Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 60 });
    sun.shadow.camera.updateProjectionMatrix();
  };

  // ---------- camera, render loop ----------
  // Standard front-corner view used on load, on "reset view" and for the image sent to the team.
  const homeView = () => {
    const [W, D] = dimsNow;
    const tall = lastCfg?.build === 'double' || lastCfg?.type === 'island';
    const r = Math.max(W, D) + (tall ? 2 : 0);
    return {
      pos: new THREE.Vector3(r * 0.85 + 1.2, r * 0.42 + (tall ? 2.6 : 1.9), r * 1.15 + 2.6),
      target: new THREE.Vector3(0, tall ? 2.1 : 1.25, 0),
    };
  };
  const frame = (keepAngle: boolean) => {
    const v = homeView();
    if (!keepAngle) camera.position.copy(v.pos);
    controls.target.copy(v.target);
    controls.update();
  };

  let running = false, visible = true;
  const loop = () => {
    if (!running) return;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };
  const start = () => { if (!running && visible) { running = true; requestAnimationFrame(loop); } };
  const stop = () => { running = false; };
  const resize = () => {
    const w = host.clientWidth || 640, h = host.clientHeight || 480;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); }).observe(host);

  let first = true;
  return {
    update(cfg: StandConfig) {
      const prev = lastCfg;
      lastCfg = cfg;
      build(cfg);
      // reframe when the footprint changes, keep the visitor's angle otherwise
      const changed = !prev || dims(prev.size).join() !== dims(cfg.size).join();
      frame(!first && !changed);
      first = false;
      resize();
      start();
    },
    resetView() { frame(false); controls.autoRotate = false; start(); },
    snapshot(w = 1600, h = 1000, home = false): string {
      const size = new THREE.Vector2();
      renderer.getSize(size);
      const pr = renderer.getPixelRatio();
      const cam = home ? camera.clone() : camera;
      if (home) { const v = homeView(); cam.position.copy(v.pos); cam.lookAt(v.target); }
      renderer.setPixelRatio(1);
      renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      renderer.render(scene, cam);
      const url = renderer.domElement.toDataURL('image/jpeg', 0.86);
      renderer.setPixelRatio(pr);
      renderer.setSize(size.x, size.y, false);
      camera.aspect = size.x / size.y; camera.updateProjectionMatrix();
      renderer.render(scene, camera);
      return url;
    },
    async exportGLB(): Promise<ArrayBuffer> {
      const ex = new GLTFExporter();
      return (await ex.parseAsync(stand, { binary: true, onlyVisible: true })) as ArrayBuffer;
    },
    exportOBJ(): string {
      stand.updateMatrixWorld(true);
      return new OBJExporter().parse(stand);
    },
    dims: () => dimsNow,
  };
}
