import TagPostList from "../../../../components/TagPostList";
import Layout from "../../../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  listPostContent,
  PostContent,
  countPosts,
} from "../../../../lib/posts";
import { listTags, getTag, TagContent } from "../../../../lib/tags";
import settings from "../../../../lib/settings";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function ({ posts, tag, pagination }: Props) {
  return (
    <Layout>
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const posts = listPostContent(1, settings.posts_per_page, slug);
  const tag = getTag(slug);
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts(slug) / settings.posts_per_page),
  };
  return {
    props: {
      posts,
      tag,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().map((it) => ({
    params: { slug: it.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
