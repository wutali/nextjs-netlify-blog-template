import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { listPostContent, PostContent } from "../../lib/posts";
import PostList from "../../components/PostList";
import { TagContent, listTags } from "../../lib/tags";
import settings from "../../lib/settings";

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
  const posts = listPostContent(1, settings.posts_per_page);
  const tags = listTags();
  return {
    props: {
      posts,
      tags,
    },
  };
};
