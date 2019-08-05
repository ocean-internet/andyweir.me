import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PostIndexTemplate from '../../components/pages/post/post-index-template';

export default PostIndex;

PostIndex.propTypes = {};

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
