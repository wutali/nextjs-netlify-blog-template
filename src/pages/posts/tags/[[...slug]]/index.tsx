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
export default function Index({ posts, tag, pagination }: Props) {
  return (
    <Layout>
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, current] = [queries[0], queries[2]];
  const posts = listPostContent(
    current ? parseInt(current as string) : 1,
    settings.posts_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: current ? parseInt(current as string) : 1,
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
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / settings.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, "page", (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};
