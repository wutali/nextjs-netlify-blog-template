import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostContent } from "../../lib/posts";
import PostList from "../../components/PostList";

const settings = require("../../settings.yml");

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
  const posts = getSortedPostsData(0, settings.posts_per_page);
  return {
    props: {
      posts,
    },
  };
};
