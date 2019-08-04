import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import BookTemplate from './book-template';

export default BookPage;

BookPage.propTypes = {
    data: PropTypes.object.isRequired,
};

function BookPage({ data }) {
    const { content, frontmatter } = data.book;
    const { title, author, image: imageFile, summary } = frontmatter;
    const { childImageSharp: image } = imageFile;

    const seoProps = {
        title,
        summary,
    };

    const props = {
        title,
        author,
        image,
        summary,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <BookTemplate {...props} />
        </Layout>
    );
}
