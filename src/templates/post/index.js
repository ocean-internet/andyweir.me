import { graphql } from 'gatsby';
import React from 'react';
import PostPage from './post-page';

export { default as PostPage } from './post-page';
export { default as PostTemplate } from './post-template';

export default props => <PostPage {...props} />;

export const postPageQuery = graphql`
    query PostPageByID($id: String!) {
        post: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
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
