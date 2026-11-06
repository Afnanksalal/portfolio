import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Art from "./pages/Art";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let transitionTimer: ReturnType<typeof setTimeout>;
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
      transitionTimer = setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, 1150);
    });
    return () => {
      cancelled = true;
      clearTimeout(transitionTimer);
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
    <MotionConfig reducedMotion="never">
      {loading && (
        <motion.div
          className="welcome-screen"
          initial={{ y: 0 }}
          animate={{ y: leaving ? "-100%" : 0 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
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
        </motion.div>
      )}
      <div ref={contentRef} aria-hidden={loading || undefined}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/art" element={<Art />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MotionConfig>
  );
}
