import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import { plainLink } from './styles.module.scss';

export default BookSummary;

BookSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

function BookSummary({ slug, title, image, summary }) {
    const ratio = 129 / 198;

    return (
        <Link to={slug} className={plainLink}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <Image image={image} alt={summary} ratio={ratio} />
            </section>
        </Link>
    );
}
