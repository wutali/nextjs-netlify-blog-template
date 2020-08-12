import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import Category from "./Category";

type Props = {
  posts: PostContent[];
};
export default function ({ posts }: Props) {
  return (
    <div className={"container"}>
      <ul className={"posts"}>
        {posts.map((it, i) => (
          <li key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <ul className={"categories"}>
        <li>
          <Category />
        </li>
        <li>
          <Category />
        </li>
        <li>
          <Category />
        </li>
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
        }
        ul {
          margin: 0;
          padding-left: 30px;
        }
        li {
          list-style: none;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .categories li {
          margin-bottom: 0.75em;
        }
      `}</style>
    </div>
  );
}
