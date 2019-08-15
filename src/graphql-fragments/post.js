import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PostSummaryFragment = graphql`
    fragment PostSummaryFragment on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            type
            path
            title
            dateString: date(fromNow: true)
            summary
            postImage: image {
                childImageSharp {
                    fluid(fit: COVER, maxWidth: 600, maxHeight: 400, cropFocus: ENTROPY) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
`;
