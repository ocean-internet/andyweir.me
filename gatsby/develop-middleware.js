const proxy = require('http-proxy-middleware');

// for avoiding CORS while developing Netlify Functions locally
// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
module.exports = app => {
  app.use(
    '/.netlify/functions/',
    proxy({
            target: 'http://localhost:9000',
            pathRewrite: {
              '/.netlify/functions/': '',
            },
          })
  );
};
