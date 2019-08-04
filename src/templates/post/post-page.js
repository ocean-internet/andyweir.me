import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PostTemplate from './post-template';

export default PostPage;

function PostPage({ data }) {
    const { post } = data;
    const { content, frontmatter } = post;
    const { title, image: imageFile, summary } = frontmatter;
    const { childImageSharp: image } = imageFile;

    const seoProps = {
        title,
        summary,
    };
    const props = {
        title,
        summary,
        image,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <PostTemplate {...props} />
        </Layout>
    );
}
