import { useEffect, useRef } from "react";

export default function GlassNav() {
  const header = useRef<HTMLElement>(null);
  const map = useRef<SVGFEImageElement>(null);
  useEffect(() => {
    const element = header.current;
    if (!element || !/Chrome|Chromium/.test(navigator.userAgent)) return;
    const update = () => {
      const { width, height } = element.getBoundingClientRect();
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(width);
      canvas.height = Math.ceil(height);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const pixels = ctx.createImageData(canvas.width, canvas.height);
      const radius = height / 2;
      // A rounded lens displacement map: clear center, refraction at the rim.
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const px = x - width / 2,
            py = y - height / 2;
          const qx = Math.abs(px) - (width / 2 - radius);
          const qy = Math.abs(py) - (height / 2 - radius);
          const ox = Math.max(qx, 0),
            oy = Math.max(qy, 0);
          const length = Math.hypot(ox, oy);
          const distance = length + Math.min(Math.max(qx, qy), 0) - radius;
          const depth = Math.max(0, -distance);
          const bend =
            distance < 0 && depth < 20 ? Math.sin((depth / 20) * Math.PI) : 0;
          const nx = length ? (ox / length) * Math.sign(px) : 0;
          const ny = length ? (oy / length) * Math.sign(py) : Math.sign(py);
          const index = (y * canvas.width + x) * 4;
          pixels.data[index] = 128 + nx * bend * 110;
          pixels.data[index + 1] = 128 + ny * bend * 110;
          pixels.data[index + 2] = 128;
          pixels.data[index + 3] = 255;
        }
      }
      ctx.putImageData(pixels, 0, 0);
      map.current?.setAttribute("href", canvas.toDataURL());
      element.dataset.refraction = "true";
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <svg className="glass-filter-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id="nav-glass"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feImage
              ref={map}
              result="lens"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="lens"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <header className="site-header" ref={header}>
        <a className="signature" href="#home" aria-label="Afnan, home">
          afnan<span aria-hidden="true">✳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about" aria-label="a little about me">
            <span className="nav-full">a little about me</span>
            <span className="nav-short">about</span>
          </a>
          <a href="#things" aria-label="things I've made">
            <span className="nav-full">things I've made</span>
            <span className="nav-short">things I make</span>
          </a>
          <a href="#hello" aria-label="say hello">
            <span className="nav-full">say hello</span>
            <span className="nav-short">hello</span>
          </a>
        </nav>
      </header>
    </>
  );
}
