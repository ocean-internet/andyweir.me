import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookIndexTemplate from '../../templates/book/book-index-template';

export default BookIndexPage;

BookIndexPage.propTypes = {};

function BookIndexPage() {
    const title = 'Recommended Reading';
    const summary = `I've read some books - you can find some of them here.`;

    const seoProps = {
        title,
        summary,
    };

    const props = {
        title,
        summary,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookIndexTemplate {...props} />
        </Layout>
    );
}
