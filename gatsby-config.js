const siteMetadata = require('./gatsby/site-metadata');
const gatsbyPluginSass = require('./gatsby/plugin-sass');
const gatsbySourceFilesystemUploads = require('./gatsby/source-filesystem-uploads');
const gatsbySourceFilesystemPages = require('./gatsby/source-filesystem-pages');
const gatsbySourceFilesystemPartials = require('./gatsby/source-filesystem-partials');
const gatsbySourceFilesystemImages = require('./gatsby/source-filesystem-images');
const gatsbyTransformerRemark = require('./gatsby/transformer-remark');
const gatsbyPluginNetlifyCms = require('./gatsby/plugin-netlify-cms');
const gatsbyPluginManifest = require('./gatsby/plugin-manifest');

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        { ...gatsbyPluginSass },
        `gatsby-plugin-react-helmet`,
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        { ...gatsbySourceFilesystemPartials },
        { ...gatsbySourceFilesystemImages },
        { ...gatsbyTransformerRemark },
        { ...gatsbyPluginNetlifyCms },
        { ...gatsbyPluginManifest },
        'gatsby-plugin-netlify-cache',
        `gatsby-plugin-offline`,
        // make sure to keep "gatsby-plugin-netlify" last in the array
        'gatsby-plugin-netlify',
    ],
};
