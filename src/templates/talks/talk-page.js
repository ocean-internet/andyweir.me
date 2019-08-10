import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import PostNavigation from '../../components/navigation/post';
import TalkSummary from '../../components/pages/talk/talk-summary';
import SEO from '../../components/seo';
import TalkTemplate, { TalkProp } from '../../components/pages/talk/talk-template';

export default TalkPage;
export const query = graphql`
    query TalkPage($id: String!, $prevId: String!, $nextId: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                dateString: date(fromNow: true)
                summary
                youtube
            }
            content: html
        }
        prev: markdownRemark(id: { eq: $prevId }) {
            fields {
                slug
            }
            frontmatter {
                type
                path
                title
                dateString: date(fromNow: true)
                youtube
            }
        }
        next: markdownRemark(id: { eq: $nextId }) {
            fields {
                slug
            }
            frontmatter {
                type
                path
                title
                dateString: date(fromNow: true)
                youtube
            }
        }
    }
`;

TalkPage.propTypes = {
    data: PropTypes.shape(TalkProp).isRequired,
};

function TalkPage({ data }) {
    const { page, prev, next } = data;
    const { content, frontmatter } = page;
    const { title, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const pageProps = {
        ...frontmatter,
        content,
        contentComponent: HTMLContent,
    };

    const prevProps = prev
        ? {
              ...prev.fields,
              ...prev.frontmatter,
          }
        : null;
    const nextProps = next
        ? {
              ...next.fields,
              ...next.frontmatter,
          }
        : null;

    const navigationProps = {
        prev: prev ? () => <TalkSummary isPrev {...prevProps} /> : null,
        next: next ? () => <TalkSummary isNext {...nextProps} /> : null,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <TalkTemplate {...pageProps} />
            <PostNavigation {...navigationProps} />
        </Layout>
    );
}
