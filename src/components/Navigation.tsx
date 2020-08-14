import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container"}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 7rem;
              display: none;
            }
            ul {
              width: auto;
              text-align: right;
              list-style: none;
              margin: 0;
              position: fixed;
            }
            li {
              margin-bottom: 1.75em;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }
          `}
        </style>
      </div>
    </>
  );
}
