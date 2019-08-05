import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import TalkIndexTemplate from '../../components/pages/talk/talk-index-template';

export default TalkIndex;

TalkIndex.propTypes = {};

function TalkIndex({ pageContext }) {
    const { title, summary } = pageContext;

    const seoProps = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkIndexTemplate {...pageContext} />
        </Layout>
    );
}
