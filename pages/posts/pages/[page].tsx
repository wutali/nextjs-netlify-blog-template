import Layout from "../../../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getSortedPostsData, PostContent } from "../../../lib/posts";
import PostList from "../../../components/PostList";

const settings = require("../../../settings.yml");

type Props = {
  posts: PostContent[];
};
export default function ({ posts }: Props) {
  return (
    <Layout>
      <PostList posts={posts} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();
  const pages = Math.ceil(posts.length / settings.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
