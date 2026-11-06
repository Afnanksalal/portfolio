import { useEffect, useRef } from "react";

export default function FlowerGarden() {
  const ref = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current,
      lines = linesRef.current;
    const ctx = canvas?.getContext("2d"),
      pencil = lines?.getContext("2d");
    if (!canvas || !lines || !ctx || !pencil) return;
    const mask = document.createElement("canvas"),
      ink = mask.getContext("2d");
    if (!ink) return;
    const image = new Image(),
      drawing = new Image();
    let frame = 0,
      disposed = false,
      last = 0,
      width = 0,
      height = 0;
    const points: { x: number; y: number; time: number }[] = [];
    let pointer: { x: number; y: number } | null = null;
    const mobile = window.matchMedia("(max-width: 700px)");

    // Recompose the four original flowers on phones, rather than enlarging
    // the landscape sheet until most of its artwork is outside the viewport.
    const paint = (
      context: CanvasRenderingContext2D,
      source: HTMLImageElement,
    ) => {
      if (mobile.matches) {
        const size = width * 0.49;
        const flowers = [
          { crop: [185, 30, 550, 430], x: 0, y: 112 },
          { crop: [1140, 12, 520, 430], x: width - size, y: 118 },
          { crop: [395, 560, 575, 510], x: 0, y: height - 240 },
          { crop: [1265, 490, 520, 435], x: width - size, y: height - 225 },
        ];
        for (const {
          crop: [sx, sy, sw, sh],
          x,
          y,
        } of flowers) {
          context.drawImage(
            source,
            sx,
            sy,
            sw,
            sh,
            x,
            y,
            size,
            (size * sh) / sw,
          );
        }
      } else {
        const scale = Math.max(width / source.width, height / source.height);
        const w = source.width * scale,
          h = source.height * scale;
        context.drawImage(source, (width - w) / 2, (height - h) / 2, w, h);
      }
    };
    const draw = (time: number) => {
      frame = 0;
      if (disposed || !image.complete || !image.naturalWidth) return;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      paint(ctx, image);
      {
        if (pointer && time - last > 60) {
          points.push({ ...pointer, time });
          last = time;
        }
        ink.clearRect(0, 0, width, height);
        while (points.length && time - points[0].time > 2200) points.shift();
        for (const p of points) {
          const life = Math.max(0, 1 - (time - p.time) / 2200);
          const r = Math.min(width * 0.35, 210) * (0.8 + 0.2 * life);
          const gradient = ink.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          gradient.addColorStop(0, `rgba(0,0,0,${life})`);
          gradient.addColorStop(0.55, `rgba(0,0,0,${life * 0.9})`);
          gradient.addColorStop(1, "rgba(0,0,0,0)");
          ink.fillStyle = gradient;
          ink.fillRect(p.x - r, p.y - r, r * 2, r * 2);
        }
        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(mask, 0, 0, mask.width, mask.height, 0, 0, width, height);
      }
      if (points.length || pointer) frame = requestAnimationFrame(draw);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (const element of [canvas, lines, mask]) {
        element.width = Math.round(width * dpr);
        element.height = Math.round(height * dpr);
      }
      for (const context of [ctx, pencil, ink])
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (drawing.complete && drawing.naturalWidth) {
        paint(pencil, drawing);
        canvas.parentElement!.dataset.ready = "true";
      }
      schedule();
    };
    const move = (e: PointerEvent) => {
      const now = performance.now();
      if (e.type === "pointermove" && now - last < 28) return;
      last = now;
      const rect = canvas.getBoundingClientRect();
      if (e.pointerType !== "touch")
        pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      points.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        time: now,
      });
      schedule();
    };
    const parent = canvas.parentElement!.parentElement!;
    const leave = () => {
      pointer = null;
    };
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerdown", move);
    parent.addEventListener("pointerleave", leave);
    image.onload = drawing.onload = resize;
    drawing.src = "/art/lyra-lines.png";
    image.src = "/art/lyra-color.png";
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerdown", move);
      parent.removeEventListener("pointerleave", leave);
      image.onload = drawing.onload = null;
    };
  }, []);
  return (
    <div className="flower-art" aria-hidden="true">
      <img src="/art/lyra-lines.png" alt="" />
      <canvas className="mobile-flower-lines" ref={linesRef} />
      <canvas className="flower-colors" ref={ref} />
    </div>
  );
}
