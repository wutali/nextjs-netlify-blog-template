import Layout from "../../../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { listPostContent, PostContent } from "../../../../lib/posts";
import { listTags, getTag, TagContent } from "../../../../lib/tags";
import settings from "../../../../lib/settings";
import PostItem from "../../../../components/PostItem";
import Pagination from "../../../../components/Pagination";

type Props = {
  posts: PostContent[];
  tag: TagContent;
};
export default function ({ posts, tag }: Props) {
  return (
    <Layout>
      <div className={"container"}>
        <h1>All Posts / {tag.name}</h1>
        <ul>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination current={3} pages={8} />
      </div>
      <style jsx>
        {`
          .container {
            padding: 0 20px;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 20px;
          }
          h1 {
            padding-left: 30px;
            margin: 0 0 2rem;
          }
          ul {
            margin: 0;
            padding-left: 30px;
          }
          li {
            list-style: none;
            margin-bottom: 1.5rem;
          }
        `}
      </style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const posts = listPostContent(1, settings.posts_per_page, slug);
  const tag = getTag(slug);
  return {
    props: {
      posts,
      tag,
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
