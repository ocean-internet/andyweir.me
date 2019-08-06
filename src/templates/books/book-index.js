import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookIndexTemplate, { BookIndexProp } from '../../components/pages/book/book-index-template';

export default BookIndex;

BookIndex.propTypes = {
    pageContext: PropTypes.shape(BookIndexProp).isRequired,
};

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
