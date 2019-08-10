import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookTemplate, { BookProp } from '../../components/pages/book/book-template';
import BookSummary from '../../components/pages/book/book-summary';
import PostNavigation from '../../components/navigation/post';

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
                        fluid(fit: COVER, maxWidth: 1032, maxHeight: 1584, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                summary
            }
            content: html
        }
        prev: markdownRemark(id: { eq: $prevId }) {
            ...BookSummaryFragment
        }
        next: markdownRemark(id: { eq: $nextId }) {
            ...BookSummaryFragment
        }
    }
`;

BookPage.propTypes = {
    data: PropTypes.shape(BookProp).isRequired,
};

function BookPage({ data }) {
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
        prev: prev ? () => <BookSummary isPrev {...prevProps} /> : null,
        next: next ? () => <BookSummary isNext {...nextProps} /> : null,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookTemplate {...pageProps} />
            <PostNavigation {...navigationProps} />
        </Layout>
    );
}
