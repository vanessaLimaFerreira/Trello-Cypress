const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.config')

module.exports = {
  e2e: {
    API_URL:'https://api.trello.com/1',
    video: true,
    
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
  },
};
