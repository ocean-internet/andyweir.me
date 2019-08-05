import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PostTemplate, { PostProp } from '../../components/pages/post/post-template';

export default PostPage;
export const query = graphql`
    query PostPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                summary
            }
            content: html
        }
    }
`;

PostPage.propTypes = {
    data: PropTypes.shape(PostProp).isRequired,
};

function PostPage({ data }) {
    const { page } = data;
    const { content, frontmatter } = page;
    const { title, image: imageFile, summary } = frontmatter;
    const { childImageSharp: image } = imageFile;

    const seoProps = {
        title,
        summary,
    };
    const pageProps = {
        title,
        summary,
        image,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <PostTemplate {...pageProps} />
        </Layout>
    );
}
