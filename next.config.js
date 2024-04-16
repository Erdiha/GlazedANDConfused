const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack(config, { isServer }) {
    // You can choose to only include the analyzer in development mode
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          // For server-side code, exclude analyzer unless needed
          analyzerMode: isServer ? 'disabled' : 'server',
          openAnalyzer: true,
        })
      );
    }

    return config;
  },
};
