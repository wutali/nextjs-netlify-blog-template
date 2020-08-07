import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import { SocialList } from "../components/SocialList";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <div className="container">
        <div>
          <h1>
            Hi, I'm Codex<span className="fancy">.</span>
          </h1>
          <span className="handle">@hugo-theme-codex</span>
          <h2>A minimal blog theme for hugo.</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
