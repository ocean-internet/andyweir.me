const path = require(`path`);
const createPaginatedPages = require('gatsby-paginate');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { postIndexMeta, talkIndexMeta, bookIndexMeta } = require('./gatsby/site-metadata');

exports.onCreateWebpackConfig = function onCreateWebpackConfig({ getConfig }) {
    const config = getConfig();

    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return config;
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return getData(graphql)
        .then(({ data, errors }) => (!errors ? Promise.resolve(data) : Promise.reject(errors)))
        .then(({ pages, posts, talks, books }) => {
            const pageProps = {
                edges: posts.edges,
                createPage,
                pageTemplate: './src/templates/blog/post-index.js',
                pageLength: 10,
                pathPrefix: '/blog',
                context: postIndexMeta,
            };

            const talkProps = {
                edges: talks.edges,
                createPage,
                pageTemplate: './src/templates/talks/talk-index.js',
                pageLength: 10,
                pathPrefix: '/talks',
                context: talkIndexMeta,
            };

            const bookProps = {
                edges: books.edges,
                createPage,
                pageTemplate: './src/templates/books/book-index.js',
                pageLength: 6,
                pathPrefix: '/books',
                context: bookIndexMeta,
            };

            return Promise.all([
                createPaginatedPages(pageProps),
                createPaginatedPages(talkProps),
                createPaginatedPages(bookProps),
                createAllPosts(createPage, posts),
                createAllPosts(createPage, talks),
                createAllPosts(createPage, books),
                createAllPages(createPage, pages),
            ]);
        });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    const { internal = null } = node;
    const { type } = internal;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        return createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
    return Promise.resolve();
};

function createAllPages(createPage, { edges: pages = [] }) {
    return Promise.all(
        pages.map(({ node: page }) => {
            const { id, frontmatter } = page;
            const { path: pagePath, type } = frontmatter;

            return createPage({
                path: pagePath,
                component: path.resolve(`src/templates/${pagePath}-${type}.js`),
                context: { id },
            });
        })
    );
}

function createAllPosts(createPage, { edges: posts = [] }) {
    const firstIndex = 0;
    const lastIndex = posts.length - 1;

    return Promise.all(
        posts.map(({ node: post }, index) => {
            const { id, fields, frontmatter } = post;
            const { slug } = fields;
            const { path: postPath, type } = frontmatter;

            const { id: prevId = '' } = index > firstIndex ? posts[index - 1].node : {};
            const { id: nextId = '' } = index < lastIndex ? posts[index + 1].node : {};

            return createPage({
                path: slug,
                component: path.resolve(`src/templates/${postPath}/${type}-page.js`),
                context: { id, prevId, nextId },
            });
        })
    );
}

function getData(graphql) {
    return graphql(`
        {
            pages: allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            type
                            path
                        }
                    }
                }
            }
            posts: allMarkdownRemark(
                filter: { frontmatter: { path: { eq: "blog" } } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                            path
                            title
                            summary
                            image {
                                childImageSharp {
                                    fluid(fit: COVER, maxWidth: 200, maxHeight: 200, cropFocus: ENTROPY) {
                                        tracedSVG
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
            talks: allMarkdownRemark(
                filter: { frontmatter: { path: { eq: "talks" } } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                            path
                            title
                            dateString: date(fromNow: true)
                            youtube
                        }
                    }
                }
            }
            books: allMarkdownRemark(
                filter: { frontmatter: { path: { eq: "books" } } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                            path
                            title
                            author {
                                name
                            }
                            image {
                                childImageSharp {
                                    fluid(fit: COVER, maxWidth: 129, maxHeight: 198, cropFocus: ENTROPY) {
                                        tracedSVG
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
}
