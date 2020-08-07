import Head from "next/head";
import Navigation from "./Navigation";

const settings = require("../settings.yml");

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <title>{settings.site_title}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={settings.site_title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={settings.url} />
        <meta property="og:image" content={settings.url + "/og_image.png"} />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" href="icon.png" />

        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: flex;
            padding: 3em 0;
          }
          nav {
            width: 100px;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </div>
  );
}
