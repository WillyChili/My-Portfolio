/**
 * Static thumbnail/cover generator.
 *
 * Renders a Dribbble/Behance-style project cover as a real WebP file
 * (mockup + organic blurred blobs + title/subtitle overlay), instead of
 * a live React component. Built with @napi-rs/canvas (Skia) so the
 * output is pixel-identical every run, then compressed with sharp.
 *
 * Usage: node scripts/generate-thumbnail.mjs <projectKey>
 *
 * This is a build-time asset script, not part of the app bundle.
 * Add a new entry to PROJECTS below to reuse the template for the
 * next case study.
 */
import { createCanvas, loadImage, GlobalFonts } from "@napi-rs/canvas";
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

GlobalFonts.registerFromPath(
  path.join(ROOT, "node_modules/geist/dist/fonts/geist-sans/Geist-Black.ttf"),
  "Geist Black"
);
GlobalFonts.registerFromPath(
  path.join(ROOT, "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf"),
  "Geist Medium"
);

const PROJECTS = {
  echo: {
    screen: path.join(ROOT, "public/echo/home-notes.jpeg"),
    out: path.join(ROOT, "public/echo/cover-thumbnail.webp"),
    accent: "#2CD59C",
    title: "Echo",
    subtitle: "AI Journaling App",
    rotationDeg: -4,
  },
};

const W = 1920;
const H = 1200; // 16:10, matches the case-study cover slot

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function drawBlob(ctx, cx, cy, scale, rgbaFill) {
  // A hand-picked organic blob path (unit space ~300x300), scaled + translated.
  const pts = [
    [150, 10], [230, 40], [280, 110], [270, 190],
    [230, 260], [150, 290], [70, 260], [20, 190],
    [15, 110], [60, 40],
  ];
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    const [px, py] = pts[i - 1];
    const cx1 = (px + x) / 2 + (i % 2 === 0 ? 20 : -20);
    const cy1 = (py + y) / 2 + (i % 2 === 0 ? -15 : 15);
    ctx.quadraticCurveTo(cx1, cy1, x, y);
  }
  ctx.closePath();
  ctx.fillStyle = rgbaFill;
  ctx.fill();
  ctx.restore();
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function generate(key) {
  const cfg = PROJECTS[key];
  if (!cfg) throw new Error(`No thumbnail config for "${key}"`);

  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  const { r, g, b } = hexToRgb(cfg.accent);

  // Background: near-black to accent-tinted-black diagonal, same family as EchoCover.
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#0A0A0A");
  bg.addColorStop(0.5, "#0D1512");
  bg.addColorStop(1, "#0A0A0A");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Fine dot grid, very subtle, same vocabulary as the rest of the site.
  ctx.strokeStyle = "rgba(232,229,224,0.035)";
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // Two organic, blurred blobs in the project's accent color, purpose-built
  // (not stock imagery), placed asymmetrically behind the mockup.
  ctx.filter = "blur(70px)";
  drawBlob(ctx, W * 0.32, H * 0.42, 2.7, `rgba(${r},${g},${b},0.30)`);
  ctx.filter = "blur(90px)";
  drawBlob(ctx, W * 0.82, H * 0.18, 2.1, `rgba(${r},${g},${b},0.16)`);
  ctx.filter = "none";

  // --- Phone mockup, single focal point, slight 3/4 rotation ---
  const phoneH = H * 0.92;
  const phoneW = phoneH * (9.35 / 20.24);
  const phoneCx = W * 0.665;
  const phoneCy = H * 0.53;

  ctx.save();
  ctx.translate(phoneCx, phoneCy);
  ctx.rotate((cfg.rotationDeg * Math.PI) / 180);
  ctx.translate(-phoneW / 2, -phoneH / 2);

  // Soft, deliberate drop shadow (not Figma's unadjusted default).
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.55)";
  ctx.shadowBlur = 90;
  ctx.shadowOffsetY = 55;
  const bezelR = phoneW * 0.14;
  const bezelGrad = ctx.createLinearGradient(0, 0, phoneW, phoneH);
  bezelGrad.addColorStop(0, "#2a2a2c");
  bezelGrad.addColorStop(0.4, "#1a1a1c");
  bezelGrad.addColorStop(1, "#0a0a0c");
  ctx.fillStyle = bezelGrad;
  roundRectPath(ctx, 0, 0, phoneW, phoneH, bezelR);
  ctx.fill();
  ctx.restore();

  // Bezel again on top (no shadow this time) so the shadow doesn't double up
  // under the screen inset.
  ctx.fillStyle = bezelGrad;
  roundRectPath(ctx, 0, 0, phoneW, phoneH, bezelR);
  ctx.fill();

  // Screen inset
  const pad = phoneW * 0.035;
  const screenR = bezelR * 0.86;
  roundRectPath(ctx, pad, pad, phoneW - pad * 2, phoneH - pad * 2, screenR);
  ctx.save();
  ctx.clip();
  ctx.fillStyle = "#000";
  ctx.fillRect(pad, pad, phoneW - pad * 2, phoneH - pad * 2);

  const img = await loadImage(cfg.screen);
  const sw = phoneW - pad * 2;
  const sh = phoneH - pad * 2;
  const imgAspect = img.width / img.height;
  const boxAspect = sw / sh;
  let dw, dh, dx, dy;
  if (imgAspect > boxAspect) {
    dh = sh;
    dw = sh * imgAspect;
    dx = pad - (dw - sw) / 2;
    dy = pad;
  } else {
    dw = sw;
    dh = sw / imgAspect;
    dx = pad;
    dy = pad - (dh - sh) / 2;
  }
  ctx.drawImage(img, dx, dy, dw, dh);

  // Screen glare, subtle diagonal highlight.
  const glare = ctx.createLinearGradient(pad, pad, phoneW - pad, phoneH - pad);
  glare.addColorStop(0, "rgba(255,255,255,0.07)");
  glare.addColorStop(0.35, "rgba(255,255,255,0)");
  glare.addColorStop(0.7, "rgba(255,255,255,0)");
  glare.addColorStop(1, "rgba(255,255,255,0.035)");
  ctx.fillStyle = glare;
  ctx.fillRect(pad, pad, sw, sh);
  ctx.restore(); // undo clip
  // Note: no dynamic-island pill here. This screenshot is a real Android
  // capture with its own status bar baked in, adding an iPhone notch on
  // top would cover the battery/signal icons.

  ctx.restore(); // undo phone rotation/translate

  // --- Text overlay: title + one subtitle line, max 2 levels ---
  // Soft scrim behind the text so it stays legible over any blob color.
  const scrim = ctx.createRadialGradient(
    W * 0.06,
    H * 0.92,
    0,
    W * 0.06,
    H * 0.92,
    W * 0.55
  );
  scrim.addColorStop(0, "rgba(0,0,0,0.55)");
  scrim.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = scrim;
  ctx.fillRect(0, 0, W, H);

  const marginX = W * 0.065;
  ctx.textBaseline = "alphabetic";

  ctx.font = "700 128px 'Geist Black'";
  ctx.fillStyle = "#F3F1EC";
  ctx.fillText(cfg.title, marginX, H * 0.83);

  ctx.font = "500 40px 'Geist Medium'";
  ctx.fillStyle = cfg.accent;
  ctx.fillText(cfg.subtitle.toUpperCase(), marginX, H * 0.895);

  const pngBuffer = canvas.toBuffer("image/png");

  let quality = 82;
  let out = await sharp(pngBuffer).webp({ quality }).toBuffer();
  while (out.length > 300 * 1024 && quality > 40) {
    quality -= 8;
    out = await sharp(pngBuffer).webp({ quality }).toBuffer();
  }

  await sharp(out).toFile(cfg.out);
  console.log(
    `${key}: wrote ${path.relative(ROOT, cfg.out)} (${(out.length / 1024).toFixed(1)}kb, quality ${quality}, ${W}x${H})`
  );
}

const key = process.argv[2];
if (!key) {
  console.error("Usage: node scripts/generate-thumbnail.mjs <projectKey>");
  process.exit(1);
}
generate(key).catch((err) => {
  console.error(err);
  process.exit(1);
});
