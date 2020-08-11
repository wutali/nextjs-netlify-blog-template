import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData, Post } from "../../lib/posts";
import PostItem from "../../components/PostItem";
import Category from "../../components/Category";

type Props = {
  posts: Post[];
};
export default function ({ posts }: Props) {
  return (
    <Layout>
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};
