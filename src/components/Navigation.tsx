import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : null}>about</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/">
            <a className={router.pathname === "/posts/" ? "active" : null}>
              blog
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            width: auto;
            text-align: right;
            list-style: none;
            margin: 0;
          }
          li {
            margin-bottom: 1.75em;
          }
          li:last-child {
            margin-bottom: 0;
          }
          .active {
            color: #000;
          }
        `}
      </style>
    </>
  );
}
