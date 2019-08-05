import { graphql } from 'gatsby';
import React from 'react';
import TalkPage from '../../../templates/talks/talk-page';

export { default as TalkPage } from '../../../templates/talks/talk-page';
export { default as TalkTemplate } from './talk-template';

export default props => <TalkPage {...props} />;

export const talkPageQuery = graphql`
    query TalkTalkByID($id: String!) {
        talk: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
                youtube
            }
            content: html
        }
    }
`;
