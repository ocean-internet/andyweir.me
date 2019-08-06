import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookTemplate, { BookProp } from '../../components/pages/book/book-template';

export default BookPage;
export const query = graphql`
    query BookPage($id: String!) {
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
    }
`;

BookPage.propTypes = {
    data: PropTypes.shape(BookProp).isRequired,
};

function BookPage({ data }) {
    const { content, frontmatter } = data.page;
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

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookTemplate {...pageProps} />
        </Layout>
    );
}
