import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="root">
      <ul>
        <li>
          <Link href="/">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/">
            <a>blog</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          .root {
            width: 100px;
          }
          ul {
            width: auto;
            text-align: right;
            list-style: none;
            margin-top: 3em;
          }
          li {
            margin-bottom: 1.75em;
          }
          li:last-child {
            margin-bottom: 0;
          }
        `}
      </style>
    </nav>
  );
}
