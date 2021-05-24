# facebook
Building Facebook 2.0 from Scratch Using React, Next.js, Tailwind CSS, Firebase (Tutorial Here: https://youtu.be/dBotWYKYYWc)


You need to provide a webpack loader that will handle SVG imports, one of the famous one is svgr.

In order to configure it to work with next, you need to add to your next.config.js file the usage of the loader, like that:

// next.config.js
    
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
For more config info, check out the docs.

Don't forget to install it first: npm install —-save-dev@svgr/webpack

Reference: https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
