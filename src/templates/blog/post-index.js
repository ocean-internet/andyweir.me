import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PostIndexTemplate, { PostIndexProp } from '../../components/pages/post/post-index-template';

export default PostIndex;

PostIndex.propTypes = {
    pageContext: PropTypes.shape(PostIndexProp).isRequired,
};

function PostIndex({ pageContext }) {
    const { title, summary } = pageContext;

    const seoProps = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <PostIndexTemplate {...pageContext} />
        </Layout>
    );
}
