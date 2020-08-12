import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostContent } from "../../lib/posts";
import PostList from "../../components/PostList";

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
