import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HTMLContent from '../components/layout/html-content';
import Layout from '../components/layout/layout';
import HomeTemplate, { HomeProp } from '../components/pages/home/home-template';
import SEO from '../components/seo';

export default HomePage;

HomePage.propTypes = {
    data: PropTypes.shape(HomeProp).isRequired,
};

export const query = graphql`
    query HomePage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
                footnote
            }
        }
#        list: allMarkdownRemark {
#            ...PostSummaryFragment
#            ...TalkSummaryFragment
#            ...BookSummaryFragment
#        }
    }
`;

function HomePage({ data }) {
    const { frontmatter } = data.page;
    const { summary } = frontmatter;

    const seoProps = {
        summary,
    };

    const pageProps = {
        ...frontmatter,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <HomeTemplate {...pageProps} />
        </Layout>
    );
}
