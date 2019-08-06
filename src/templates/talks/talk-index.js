import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import TalkIndexTemplate, { TalkIndexProp } from '../../components/pages/talk/talk-index-template';

export default TalkIndex;

TalkIndex.propTypes = {
    pageContext: PropTypes.shape(TalkIndexProp).isRequired,
};

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
