import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href="https://twitter.com/%3cyour%20handle%3e"
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} />
      </a>
      <a
        title="GitHub"
        href="https://github.com/%3cyour%20handle%3e"
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
