import { Link } from 'gatsby';
import React from 'react';
import Image, { imageProp } from '../../layout/image';
import PropTypes from 'prop-types';

export default BookSummary;

BookSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

function BookSummary({ slug, title, image: imageFile, summary }) {
    const { childImageSharp: image } = imageFile;

    return (
        <Link to={slug}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <Image image={image} />
            </section>
        </Link>
    );
}
