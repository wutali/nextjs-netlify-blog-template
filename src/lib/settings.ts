type Settings = {
  readonly url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly posts_per_page: number;
};

const settings = require("../../settings.yml") as Settings;

export default settings;
