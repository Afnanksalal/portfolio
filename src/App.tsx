import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let fadeTimer: ReturnType<typeof setTimeout>;
    const images = ["lyra-welcome.png", "lyra-lines.png", "lyra-color.png"].map(
      (name) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = image.onerror = () => resolve();
          image.src = `/art/${name}`;
        }),
    );
    const minimum = new Promise<void>((resolve) => setTimeout(resolve, 1600));
    const maximum = new Promise<void>((resolve) => setTimeout(resolve, 5000));
    Promise.race([Promise.all([...images, minimum]), maximum]).then(() => {
      if (cancelled) return;
      setLeaving(true);
      fadeTimer = setTimeout(
        () => {
          if (!cancelled) setLoading(false);
        },
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450,
      );
    });
    return () => {
      cancelled = true;
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = loading;
    if (!loading) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <div
          className={`welcome-screen${leaving ? " is-leaving" : ""}`}
          role="status"
          aria-label="Loading Afnan’s little corner"
        >
          <img
            src="/art/lyra-welcome.png"
            alt="Afnan K Salal, handwritten by Lyra and framed with her flowers"
          />
          <p>
            flowers by Lyra <span aria-hidden="true">♡</span>
          </p>
        </div>
      )}
      <div ref={contentRef} aria-hidden={loading || undefined}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
