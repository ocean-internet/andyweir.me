import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import PostNavigation from '../../components/navigation/post';
import SEO from '../../components/seo';
import BookTemplate, { BookProp } from '../../components/pages/book/book-template';

export default BookPage;
export const query = graphql`
    query BookPage($id: String!, $prevId: String!, $nextId: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                author {
                    name
                    url
                }
                image {
                    childImageSharp {
                        fluid {
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
                title
                author {
                    name
                }
            }
        }
        next: markdownRemark(id: { eq: $nextId }) {
            fields {
                slug
            }
            frontmatter {
                title
                author {
                    name
                }
            }
        }
    }
`;

BookPage.propTypes = {
    data: PropTypes.shape(BookProp).isRequired,
};

function BookPage({ data }) {
    const defaultNav = { fields: null, frontmatter: null };
    const { page, prev, next } = data;
    const { content, frontmatter } = page;
    const { title, author, image, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const pageProps = {
        title,
        author,
        image,
        summary,
        content,
        contentComponent: HTMLContent,
    };

    const navigationProps = {
        prev: prev
            ? {
                  ...(prev.fields || defaultNav),
                  ...(prev.frontmatter || defaultNav),
              }
            : null,
        next: next
            ? {
                  ...(next.fields || defaultNav),
                  ...(next.frontmatter || defaultNav),
              }
            : null,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookTemplate {...pageProps} />
            <PostNavigation {...navigationProps} />
        </Layout>
    );
}
