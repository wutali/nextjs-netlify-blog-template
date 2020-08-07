module.exports = {
  exportTrailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.yml/,
      type: "json",
      use: "yaml-loader",
    });
    return config;
  },
};
