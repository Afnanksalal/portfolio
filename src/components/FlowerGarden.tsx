import { useEffect, useRef } from "react";
export default function FlowerGarden({ bloom }: { bloom: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const mask = document.createElement("canvas"),
      ink = mask.getContext("2d");
    if (!ink) return;
    const image = new Image();
    let frame = 0,
      disposed = false,
      ready = false,
      last = 0,
      width = 0,
      height = 0;
    const points: { x: number; y: number; time: number }[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const draw = (time: number) => {
      frame = 0;
      if (!ready || disposed) return;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.max(width / image.width, height / image.height),
        w = image.width * scale,
        h = image.height * scale;
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
      if (!bloom) {
        ink.clearRect(0, 0, width, height);
        while (points.length && time - points[0].time > 2200) points.shift();
        for (const p of points) {
          const life = Math.max(0, 1 - (time - p.time) / 2200),
            r = Math.min(width * 0.23, 210) * (0.8 + 0.2 * life);
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
      if (points.length && !bloom) frame = requestAnimationFrame(draw);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      mask.width = canvas.width;
      mask.height = canvas.height;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ink.setTransform(dpr, 0, 0, dpr, 0, 0);
      schedule();
    };
    const move = (e: PointerEvent) => {
      if (bloom || reduced.matches || e.pointerType === "touch") return;
      const now = performance.now();
      if (now - last < 28) return;
      last = now;
      const rect = canvas.getBoundingClientRect();
      points.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        time: now,
      });
      schedule();
    };
    const parent = canvas.parentElement!.parentElement!;
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    parent.addEventListener("pointermove", move);
    image.onload = () => {
      ready = true;
      resize();
    };
    image.src = "/art/lyra-color.png";
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      parent.removeEventListener("pointermove", move);
      image.onload = null;
    };
  }, [bloom]);
  return (
    <div className="flower-art" aria-hidden="true">
      <img src="/art/lyra-lines.png" alt="" />
      <canvas ref={ref} />
    </div>
  );
}
