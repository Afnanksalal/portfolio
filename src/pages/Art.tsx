import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import LyraFlower, { FlowerName } from "@/components/LyraFlower";

export default function Art() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <main className="art-page section-wrap">
      <Link className="quiet-link" to="/">
        back to Afnan’s corner
      </Link>
      <p className="handwritten margin-note">
        a page for the person who drew the lilies
      </p>
      <h1>Lilies from Lyra.</h1>
      <p className="art-intro">
        My best friend drew these for me. They became the garden around this
        little corner of the internet.
      </p>
      <div className="flower-gallery">
        {(["pencil", "blue", "violet", "mint"] as FlowerName[]).map(
          (name, i) => (
            <motion.figure
              key={name}
              initial={{ opacity: 0, y: 26, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ y: -8, rotate: i % 2 ? 3 : -3 }}
            >
              <LyraFlower name={name} decorative={false} />
              <figcaption className="handwritten">
                {
                  [
                    "a pencil lily",
                    "a blue lily",
                    "a violet lily",
                    "a mint lily",
                  ][i]
                }
              </figcaption>
            </motion.figure>
          ),
        )}
      </div>
      <div className="artist-destinations">
        <a
          className="quiet-link"
          href="https://nevis.nekoweb.org/"
          target="_blank"
          rel="noreferrer"
        >
          Lyra’s life ✦
        </a>
        <a
          className="quiet-link"
          href="https://lyradossier.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Lyra’s portfolio ↗
        </a>
      </div>
      <Link className="wander-link" to="/">
        back to the garden ↗
      </Link>
    </main>
  );
}
