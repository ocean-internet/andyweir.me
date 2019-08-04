import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import TalkTemplate from './talk-template';

export default TalkPage;

TalkPage.propTypes = {
    data: PropTypes.object.isRequired,
};

function TalkPage({ data }) {
    const { talk } = data;

    const { content, frontmatter } = talk;
    const { title, youtube, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const props = {
        title,
        summary,
        youtube,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkTemplate {...props} />
        </Layout>
    );
}
