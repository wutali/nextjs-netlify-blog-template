import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostContent } from "../../lib/posts";
import PostList from "../../components/PostList";
import { TagContent, getTags } from "../../lib/tags";

const settings = require("../../../settings.yml");

type Props = {
  posts: PostContent[];
  tags: TagContent[];
};
export default function ({ posts, tags }: Props) {
  return (
    <Layout>
      <PostList posts={posts} tags={tags} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData(0, settings.posts_per_page);
  const tags = getTags();
  return {
    props: {
      posts,
      tags,
    },
  };
};
