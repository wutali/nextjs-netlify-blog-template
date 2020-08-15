import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { listPostContent, PostContent, countPosts } from "../../lib/posts";
import PostList from "../../components/PostList";
import { TagContent, listTags } from "../../lib/tags";
import config from "../../lib/config";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  return (
    <Layout>
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
