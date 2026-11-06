import FlowerGarden from "@/components/FlowerGarden";
import GlassNav from "@/components/GlassNav";
import LyraFlower, { FlowerName } from "@/components/LyraFlower";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const projects = [
  [
    "Genmotion",
    "A motion design engine where agents build the scene and you direct the details.",
    "native motion & creative tools",
    "genmotion",
  ],
  [
    "Co-op",
    "A local-first workspace for running a business, with AI and your files close at hand.",
    "business software, on your machine",
    "co-op",
  ],
  [
    "BreachScope",
    "Finding weak spots in software supply chains, dependencies, and toolchains.",
    "security & supply chains",
    "BreachScope",
  ],
  [
    "Frag",
    "A small hardware description language compiler in Rust, with Verilog output and simulation.",
    "a language for hardware",
    "frag",
  ],
];
export default function Index() {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to the introduction
      </a>
      <GlassNav />
      <section className="garden" id="home" aria-label="Afnan’s homepage">
        <FlowerGarden />
        <main className="intro" id="about">
          <p className="handwritten greeting">oh, hey. you found me.</p>
          <h1>I'm Afnan.</h1>
          <p className="intro-copy">
            I make things, follow my curiosity,
            <br />
            and occasionally finish a side project.
          </p>
          <p className="intro-small">
            Somewhere between software, hardware,
            <br />
            and whatever caught my attention this week.
          </p>
          <a className="wander-link" href="#things">
            Have a look around <span aria-hidden="true">↘</span>
          </a>
        </main>
        <div className="garden-footer">
          <p className="art-note handwritten">
            flowers from my best friend,{" "}
            <a
              className="artist-link"
              href="https://lyradossier.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Lyra
            </a>{" "}
            ♡
          </p>
          <p className="hover-note">
            <span className="pointer-hint">
              hover over the flowers for a little color
            </span>
            <span className="touch-hint">
              touch the flowers for a little color
            </span>
          </p>
        </div>
      </section>
      <section
        className="things section-wrap"
        id="things"
        aria-labelledby="things-heading"
      >
        <div className="section-heading">
          <div>
            <p className="handwritten margin-note">
              a few things from the workbench
            </p>
            <h2 id="things-heading">Made out of curiosity.</h2>
          </div>
          <a
            className="quiet-link"
            href="https://github.com/Afnanksalal"
            target="_blank"
            rel="noreferrer"
          >
            the rest on GitHub ↗
          </a>
        </div>
        <div className="project-list">
          {projects.map(([name, note, kind, repo], index) => (
            <a
              className="project"
              key={name}
              href={"https://github.com/Afnanksalal/" + repo}
              target="_blank"
              rel="noreferrer"
            >
              <LyraFlower
                name={
                  (["pencil", "blue", "violet", "mint"] as FlowerName[])[index]
                }
              />
              <div className="project-name">
                <h3>{name}</h3>
                <span>{kind}</span>
              </div>
              <p>{note}</p>
              <span className="project-arrow" aria-label="Open on GitHub">
                ↗
              </span>
            </a>
          ))}
        </div>
        <aside className="about-note">
          <span className="handwritten">a bit more about me</span>
          <p>
            I like working across the whole thing: the code, the circuit, and
            the way it feels to use. Lately that's meant AI, embedded systems,
            and tools that help people connect.
          </p>
        </aside>
      </section>
      <footer className="hello section-wrap" id="hello">
        <div className="hello-postcard">
          <img
            className="postcard-art"
            src="/art/lyra-postcard.png"
            alt=""
            loading="lazy"
          />
          <svg
            className="postcard-mobile-art"
            viewBox="0 0 390 520"
            aria-hidden="true"
            focusable="false"
          >
            <svg x="0" y="0" width="190" height="145" viewBox="35 30 550 430">
              <image href="/art/lyra-postcard.png" width="1920" height="1080" />
            </svg>
            <svg
              x="200"
              y="5"
              width="190"
              height="145"
              viewBox="1360 15 510 430"
            >
              <image href="/art/lyra-postcard.png" width="1920" height="1080" />
            </svg>
            <svg
              x="0"
              y="350"
              width="195"
              height="170"
              viewBox="85 570 590 475"
            >
              <image href="/art/lyra-postcard.png" width="1920" height="1080" />
            </svg>
            <svg
              x="195"
              y="350"
              width="195"
              height="170"
              viewBox="1400 640 500 420"
            >
              <image href="/art/lyra-postcard.png" width="1920" height="1080" />
            </svg>
          </svg>
          <div className="postcard-message">
            <p className="handwritten">the internet is nicer with friends.</p>
            <h2>Leave a little hello.</h2>
            <a className="email-link" href="mailto:afnanksalal@gmail.com">
              afnanksalal@gmail.com
            </a>
            <p className="postcard-credit handwritten">
              another little garden by{" "}
              <a
                className="artist-link"
                href="https://lyradossier.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Lyra
              </a>{" "}
              ♡
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Afnan K Salal <span aria-hidden="true">✳</span> thanks for stopping
            by.
          </p>
          <div>
            <Link to="/art">flowers by Lyra ♡</Link>
            <a
              href="https://nevis.nekoweb.org/"
              target="_blank"
              rel="noreferrer"
            >
              Lyra’s life
            </a>
            <a
              href="https://lyradossier.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Lyra’s portfolio
            </a>
            <a href="https://github.com/Afnanksalal">GitHub</a>
            <a href="https://twitter.com/afnanksalal">Twitter</a>
            <a href="https://www.linkedin.com/in/afnanksalal/">LinkedIn</a>
            <a href="https://www.instagram.com/afnanksalal/">Instagram</a>
            <a href="#home">back to the flowers ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
