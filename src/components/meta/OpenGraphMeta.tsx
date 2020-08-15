import config from "../../lib/config";

export default function OpenGraphMeta() {
  return (
    <>
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content={config.base_url + "/og_image.png"} />
      <meta property="og:type" content="article" />
    </>
  );
}
