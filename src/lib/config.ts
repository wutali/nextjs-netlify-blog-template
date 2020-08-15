import config from "../../config.json";

type Config = {
  readonly url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly posts_per_page: number;
};

export default config as Config;
