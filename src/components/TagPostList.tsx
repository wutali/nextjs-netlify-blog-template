import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, pagination }: Props) {
  return (
    <div>
      <div className={"container"}>
        <h1>All Posts / {tag.name}</h1>
        <ul>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: () => "/posts/tags/[[...slug]]",
            as: (page) =>
              page === 1
                ? "/posts/tags/" + tag.slug
                : `/posts/tags/${tag.slug}/${page}`,
          }}
        />
      </div>
      <style jsx>
        {`
          .container {
            padding: 0 20px;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 20px;
          }
          h1 {
            padding-left: 30px;
            margin: 0 0 2rem;
          }
          ul {
            margin: 0;
            padding-left: 30px;
          }
          li {
            list-style: none;
            margin-bottom: 1.5rem;
          }
        `}
      </style>
    </div>
  );
}
