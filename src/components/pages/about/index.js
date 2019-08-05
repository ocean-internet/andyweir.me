import { graphql } from 'gatsby';
import React from 'react';
import AboutPage from '../../../templates/about-page';

export { default as AboutPage } from '../../../templates/about-page';
export { default as AboutTemplate } from './about-template';

export default props => <AboutPage {...props} />;

export const aboutPageQuery = graphql`
    query AboutPageByID($id: String!) {
        post: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
            }
            content: html
        }
    }
`;
