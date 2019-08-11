import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

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

    const className = [styles.bookLink];

    isPrev && className.push(styles.prev);
    isNext && className.push(styles.next);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={styles.summary}>
                <h1 className={styles.summaryHeader}>
                    {title}
                    {name && <span>by {name}</span>}
                </h1>
                <Image image={image} alt={title} className={styles.summaryImage} ratio={ratio} />
            </section>
        </Link>
    );
}
