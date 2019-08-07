import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import { bookLinkStyle, summaryStyle, summaryHeaderStyle, summaryImageStyle } from './styles.module.scss';

export default BookSummary;

BookSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
    }).isRequired,
    image: imageProp.isRequired,
};

function BookSummary({ slug, title, author, image }) {
    const ratio = 198 / 129;
    const { name } = author;

    return (
        <Link to={slug} className={bookLinkStyle}>
            <section className={summaryStyle}>
                <header className={summaryHeaderStyle}>
                    <h1>
                        {title}
                        {name && <span>by {name}</span>}
                    </h1>
                </header>
                <Image image={image} alt={title} className={summaryImageStyle} ratio={ratio} />
            </section>
        </Link>
    );
}
