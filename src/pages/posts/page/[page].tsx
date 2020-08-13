import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import PostList from "../../../components/PostList";
import { countPosts, listPostContent, PostContent } from "../../../lib/posts";
import { listTags, TagContent } from "../../../lib/tags";
import settings from "../../../lib/settings";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ posts, tags, pagination }: Props) {
  return (
    <Layout>
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const current = parseInt(params.page as string);
  const posts = listPostContent(current, settings.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: current,
    pages: Math.ceil(countPosts() / settings.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
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
