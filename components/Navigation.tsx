import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
