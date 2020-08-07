import Link from "next/link";

export default function Navigation() {
  return (
    <>
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
          ul {
            width: auto;
            text-align: right;
            list-style: none;
          }
          li {
            margin-bottom: 1.75em;
          }
          li:last-child {
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  );
}
