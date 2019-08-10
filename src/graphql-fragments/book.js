import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const BookSummaryFragment = graphql`
    fragment BookSummaryFragment on MarkdownRemark {
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
                    fluid(fit: COVER, maxWidth: 516, maxHeight: 792, cropFocus: ENTROPY) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
`;
