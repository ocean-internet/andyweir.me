import PropTypes         from 'prop-types';
import React             from 'react';
import HTMLContent    from '../../components/layout/html-content';
import Layout            from '../../components/layout/layout';
import SEO               from '../../components/seo';
import AboutPageTemplate from './about-template';

export default AboutPage;

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
};

function AboutPage ({ data }) {
    const { content, frontmatter } = data.post;
    const { title, summary }       = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const props = {
        title,
        summary,
        content,
        contentComponent: HTMLContent,
    };

    return <Layout>
        <SEO {...seoProps}/>
        <AboutPageTemplate {...props} />
    </Layout>;
}
