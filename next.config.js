const withSass = require('@zeit/next-sass');
const BASE_PATH = process.env.CI ? '/sample-integration-nextjs' : '';

// Add next-with-images and next-transpile-modules to the webpack config
module.exports = withSass({
  target: 'serverless',
  assetPrefix: BASE_PATH,
  env: {
    BASE_PATH,
  },
  webpack: (config) => {
    const result = {
      ...config,
    };

    // Add Polyfills to webpack entry points
    const originalEntry = result.entry;
    result.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries;
    };

    return result;
  },
});
