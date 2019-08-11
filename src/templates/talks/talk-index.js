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
    const { title, summary, group } = pageContext;

    const seoProps = {
        title,
        summary,
    };

    const posts = group
        .map(({ node }) => ({ ...node }))
        .map(({ id: key, fields, frontmatter }) => ({
            key,
            ...fields,
            ...frontmatter,
        }));

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkIndexTemplate {...{ ...pageContext, posts }} />
        </Layout>
    );
}
