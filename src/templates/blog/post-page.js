import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import PostNavigation from '../../components/navigation/post';
import PostSummary from '../../components/pages/post/post-summary';
import SEO from '../../components/seo';
import PostTemplate, { PostProp } from '../../components/pages/post/post-template';

export default PostPage;
export const query = graphql`
    query PostPage($id: String!, $prevId: String!, $nextId: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(fit: COVER, maxWidth: 1200, maxHeight: 800, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                summary
            }
            content: html
        }
        prev: markdownRemark(id: { eq: $prevId }) {
            fields {
                slug
            }
            frontmatter {
                type
                path
                title
                dateString: date(fromNow: true)
                summary
                image {
                    childImageSharp {
                        fluid(fit: COVER, maxWidth: 600, maxHeight: 400, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
        next: markdownRemark(id: { eq: $nextId }) {
            fields {
                slug
            }
            frontmatter {
                type
                path
                title
                dateString: date(fromNow: true)
                summary
                image {
                    childImageSharp {
                        fluid(fit: COVER, maxWidth: 600, maxHeight: 400, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;

PostPage.propTypes = {
    data: PropTypes.shape(PostProp).isRequired,
};

function PostPage({ data }) {
    const { page, prev, next } = data;
    const { content, frontmatter } = page;
    const { title, image, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };
    const pageProps = {
        title,
        summary,
        image,
        content,
        contentComponent: HTMLContent,
    };
    const prevProps = prev
        ? {
              ...prev.fields,
              ...prev.frontmatter,
          }
        : null;
    const nextProps = next
        ? {
              ...next.fields,
              ...next.frontmatter,
          }
        : null;

    const navigationProps = {
        prev: prev ? () => <PostSummary isPrev {...prevProps} /> : null,
        next: next ? () => <PostSummary isNext {...nextProps} /> : null,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <PostTemplate {...pageProps} />
            <PostNavigation {...navigationProps} />
        </Layout>
    );
}
