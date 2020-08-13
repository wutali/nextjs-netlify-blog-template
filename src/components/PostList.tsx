import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import Tag from "./Tag";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function ({ posts, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <ul>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination current={pagination.current} pages={pagination.pages} />
      </div>
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <Tag tag={it} />
          </li>
        ))}
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
