import Layout from "../../../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { listPostContent } from "../../../../lib/posts";
import { listTags } from "../../../../lib/tags";
import settings from "../../../../lib/settings";

export default function () {
  return <Layout>posts/tags/[slug]/</Layout>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = listPostContent(
    1,
    settings.posts_per_page,
    params.slug as string
  );
  return {
    props: {
      posts,
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
