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
            <PostIndexTemplate {...{ ...pageContext, posts }} />
        </Layout>
    );
}
