import { graphql } from 'gatsby';
import React from 'react';
import BookPage from '../../../templates/books/book-page';

export { default as BookPage } from '../../../templates/books/book-page';
export { default as BookTemplate } from './book-template';

export default props => <BookPage {...props} />;

export const bookPageQuery = graphql`
    query BookPageByID($id: String!) {
        book: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                author {
                    name
                    url
                }
                summary
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
            content: html
        }
    }
`;
