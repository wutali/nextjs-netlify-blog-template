import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <h1>title</h1>


<div id="fullwidth" className="ls-overflow-visible">
		<div id="contain">
<table className="sheru-cp-section table wrap">
  <thead className="table__head">
    <tr className="table__row">
      <th className="table__cell table__cell--head" scope="col">Name</th>
      <th className="table__cell table__cell--head" scope="col">Date</th>
      <th className="table__cell table__cell--head" scope="col">Description</th>
      <th className="table__cell table__cell--head" scope="col">View</th>
      <th className="table__cell table__cell--head" scope="col">Download</th>
    </tr>
  </thead>
  <tbody className="table__body">
<!--   {% for froggy in list %} -->
    <tr className="table__row">
      <th className="table__cell table__cell--head" scope="row" data-title="Name">
        froggy.name
      </th>
      <th className="table__cell table__cell--head" scope="row" data-title="Date">
        froggy.date
      </th>
      <td className="table__cell" data-title="Description">
        froggy.description
      </td>
      <td className="table__cell" data-title="View">
        <a href="froggy.asset" target="_blank">View</a>
      </td>
      <td className="table__cell" data-title="Download">
        <a download href="froggy.asset">Download</a>
      </td>
    </tr>
<!--     {% endfor %} -->
  </tbody>
</table>
</div>
</div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
