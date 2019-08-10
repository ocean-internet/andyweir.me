import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const TalkSummaryFragment = graphql`
    fragment TalkSummaryFragment on MarkdownRemark {
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
`;
