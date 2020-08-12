import Layout from "../../../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getSortedPostsData } from "../../../lib/posts";
import { it } from "date-fns/locale";

const settings = require("../../../settings.yml");

export default function () {
  return <Layout>posts/pages/[page]/</Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();
  const pages = Math.ceil(posts.length / settings.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
