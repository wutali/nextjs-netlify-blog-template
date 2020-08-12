import Layout from "../../../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getSortedPostsData,
  PostContent,
  countPosts,
} from "../../../lib/posts";
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getSortedPostsData(
    parseInt(params.page as string) - 1,
    settings.posts_per_page
  );
  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / settings.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
