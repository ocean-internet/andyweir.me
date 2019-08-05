import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookIndexTemplate from '../../components/pages/book/book-index-template';

export default BookIndex;

BookIndex.propTypes = {};

function BookIndex({ pageContext }) {
    const { title, summary } = pageContext;

    const seoProps = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookIndexTemplate {...pageContext} />
        </Layout>
    );
}
