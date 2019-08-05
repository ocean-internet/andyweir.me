import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import TalkTemplate, { TalkProp } from '../../components/pages/talk/talk-template';

export default TalkPage;
export const query = graphql`
    query TalkPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
                youtube
            }
            content: html
        }
    }
`;

TalkPage.propTypes = {
    data: PropTypes.shape(TalkProp).isRequired,
};

function TalkPage({ data }) {
    const { content, frontmatter } = data.page;
    const { title, summary, youtube } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const pageProps = {
        title,
        summary,
        youtube,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkTemplate {...pageProps} />
        </Layout>
    );
}
