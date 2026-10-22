import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>
        This page took
        <br />a <span className="gradient-text">wrong turn.</span>
      </h1>
      <p className="muted">
        The page may have moved or the address might be mistyped.
      </p>
      <Link className="button" href="/">
        Back to home <span>↗</span>
      </Link>
    </main>
  );
}
