import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PostIndexTemplate from '../../templates/post/post-index-template';

export default PostIndexPage;

PostIndexPage.propTypes = {};

function PostIndexPage(props) {
    console.log({ props });

    const title = 'My Posts';
    const summary = `I've written some posts - you can find some of them here.`;

    const seoProps = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <PostIndexTemplate {...props} />
        </Layout>
    );
}
