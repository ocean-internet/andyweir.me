module.exports = {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
        path: `${__dirname}/../static/img`,
        name: 'uploads',
    },
};
