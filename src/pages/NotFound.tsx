import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="section-wrap">
      <p className="handwritten margin-note">a little off the garden path</p>
      <h1>Nothing here.</h1>
      <p className="intro-copy">This page may have moved.</p>
      <Link className="wander-link" to="/">
        Back to the flowers ↗
      </Link>
    </main>
  );
}
