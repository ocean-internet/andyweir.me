import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HTMLContent from '../components/layout/html-content';
import Layout from '../components/layout/layout';
import HomeTemplate from '../components/pages/home/home-template';
import SEO from '../components/seo';

export default HomePage;

HomePage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                summary: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        latest: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.any,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};

export const query = graphql`
    query HomePage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
                footnote
            }
        }
        latest: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: 6
            filter: { frontmatter: { type: { in: ["post", "talk", "book"] } } }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        type
                        title
                        author {
                            name
                        }
                        dateString: date(fromNow: true)
                        date
                        summary
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                        youtube
                    }
                }
            }
        }
    }
`;

function HomePage({ data }) {
    const { page, latest } = data;
    const { edges } = latest;
    const { frontmatter } = page;
    const { title, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const list = edges.map(({ node }) => node);

    const pageProps = {
        ...frontmatter,
        list,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <HomeTemplate {...pageProps} />
        </Layout>
    );
}
