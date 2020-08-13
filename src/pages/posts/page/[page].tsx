import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import PostList from "../../../components/PostList";
import { countPosts, listPostContent, PostContent } from "../../../lib/posts";
import { listTags, TagContent } from "../../../lib/tags";
import settings from "../../../lib/settings";

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
  const posts = listPostContent(
    parseInt(params.page as string),
    settings.posts_per_page
  );
  const tags = listTags();
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
