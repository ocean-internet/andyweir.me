import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import {
    bookLinkStyle,
    summaryStyle,
    summaryHeaderStyle,
    summaryImageStyle,
    prevStyle,
    nextStyle,
} from './styles.module.scss';

export default BookSummary;

BookSummary.propTypes = {
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
    }).isRequired,
    image: imageProp.isRequired,
};

BookSummary.defaultProps = {
    isPrev: false,
    isNext: false,
};

function BookSummary({ isPrev, isNext, slug, title, author, image }) {
    const ratio = 198 / 129;
    const { name } = author;

    const className = [bookLinkStyle];

    isPrev && className.push(prevStyle);
    isNext && className.push(nextStyle);

    return (
        <Link to={slug} className={className.join(' ')}>
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
