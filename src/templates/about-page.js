import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../components/layout/html-content';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import AboutPageTemplate, { AboutProp } from '../components/pages/about/about-template';

export default AboutPage;

AboutPage.propTypes = {
    data: PropTypes.shape(AboutProp).isRequired,
};

export const query = graphql`
    query AboutPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
            }
            content: html
        }
    }
`;

function AboutPage({ data }) {
    const { frontmatter, content } = data.page;
    const { title, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const pageProps = {
        title,
        summary,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <AboutPageTemplate {...pageProps} />
        </Layout>
    );
}
