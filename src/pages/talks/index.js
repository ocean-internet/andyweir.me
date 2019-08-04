import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import TalkIndexTemplate from '../../templates/talk/talk-index-template';

export default TalkIndexPage;

TalkIndexPage.propTypes = {};

function TalkIndexPage() {
    const title = 'My Talks';
    const summary = `I've done some talking - you can find some of them here.`;

    const seoProps = {
        title,
        summary,
    };
    const props = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkIndexTemplate {...props} />
        </Layout>
    );
}
