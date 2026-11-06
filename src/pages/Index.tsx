import { useState } from "react";
import FlowerGarden from "@/components/FlowerGarden";
const projects = [
  [
    "Acadly",
    "A place for students to trade, learn, and find each other.",
    "campus & community",
    "Acadly",
  ],
  [
    "Co-op",
    "What happens when a few AI models think something through together?",
    "an experiment in AI",
    "co-op",
  ],
  [
    "TenderTalks",
    "A home for podcasts and the people who listen to them.",
    "made for listening",
    "tendertalks",
  ],
  [
    "Frag",
    "An experimental language for systems and robotics, written in Rust.",
    "close to the hardware",
    "frag",
  ],
];
export default function Index() {
  const [bloom, setBloom] = useState(false);
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to the introduction
      </a>
      <section className="garden" id="home" aria-label="Afnan’s homepage">
        <FlowerGarden bloom={bloom} />
        <header className="site-header">
          <a className="signature" href="#home" aria-label="Afnan, home">
            afnan<span aria-hidden="true">✳</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">a little about me</a>
            <a href="#things">things I've made</a>
            <a href="#hello">say hello</a>
          </nav>
        </header>
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
            flowers from my best friend, Lyra ♡
          </p>
          <button
            className="bloom-button"
            aria-pressed={bloom}
            onClick={() => setBloom(!bloom)}
          >
            <span aria-hidden="true">✿</span>
            {bloom ? "back to the sketch" : "let it bloom"}
          </button>
          <p className="hover-note">a little color follows your cursor</p>
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
          {projects.map(([name, note, kind, repo]) => (
            <a
              className="project"
              key={name}
              href={"https://github.com/Afnanksalal/" + repo}
              target="_blank"
              rel="noreferrer"
            >
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
        <div>
          <p className="handwritten">the internet is nicer with friends.</p>
          <h2>Leave a little hello.</h2>
          <a className="email-link" href="mailto:afnanksalal@gmail.com">
            afnanksalal@gmail.com
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            Afnan K Salal <span aria-hidden="true">✳</span> thanks for stopping
            by.
          </p>
          <div>
            <a href="https://github.com/Afnanksalal">GitHub</a>
            <a href="https://twitter.com/afnanksalal">Twitter</a>
            <a href="#home">back to the flowers ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
