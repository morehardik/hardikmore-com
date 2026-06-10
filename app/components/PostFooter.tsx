import Link from "next/link";

export default function PostFooter() {
  return (
    <footer className="post-footer">
      <div className="post-footer-subscribe">
        <p>Get new essays by email.</p>
        <iframe
          src="https://hardikmore.substack.com/embed"
          width="100%"
          height="150"
          style={{ border: "none", display: "block" }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className="post-footer-nav">
        <Link href="/writing">← All writing</Link>
        <Link href="/">Home</Link>
      </div>
    </footer>
  );
}
