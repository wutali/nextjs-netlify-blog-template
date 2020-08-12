import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import PostList from "../../../components/PostList";
import {
  countPosts,
  getSortedPostsData,
  PostContent,
} from "../../../lib/posts";
import { getTags, TagContent } from "../../../lib/tags";

const settings = require("../../../../settings.yml");

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getSortedPostsData(
    parseInt(params.page as string) - 1,
    settings.posts_per_page
  );
  const tags = getTags();
  return {
    props: {
      posts,
      tags,
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
