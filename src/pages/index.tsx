import Layout from "../components/Layout";
import { SocialList } from "../components/SocialList";

export default function Index() {
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
          flex: 1;
        }
        h1 {
          font-size: 3em;
          margin: 0;
        }
        h2 {
          font-size: 2.25em;
          font-weight: 500;
          line-height: 1.25;
          max-width: 22em;
          letter-spacing: -0.03em;
        }
        .fancy {
          color: #9013fe;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.5px;
        }
      `}</style>
    </Layout>
  );
}
