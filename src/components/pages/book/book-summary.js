import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

export default BookSummary;

BookSummary.propTypes = {
    isHome: PropTypes.bool,
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
    }).isRequired,
    bookImage: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

BookSummary.defaultProps = {
    isHome: false,
    isPrev: false,
    isNext: false,
};

function BookSummary({ isHome, isPrev, isNext, slug, title, subtitle, author, bookImage: image, summary }) {
    const ratio = 198 / 129;
    const { name } = author;

    const className = [styles.bookLink];

    const Author = () => <div className={styles.author}>by {name}</div>;

    isHome && className.push(styles.home);
    isPrev && className.push(styles.prev);
    isNext && className.push(styles.next);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={styles.summary}>
                <header className={styles.summaryHeader}>
                    <h1>
                        {title}
                        {isHome && subtitle && <span>{subtitle}</span>}
                    </h1>
                    <Author />
                    {isHome && <p>{createExcerpt(summary)}</p>}
                </header>
                <Image image={image} alt={title} className={styles.summaryImage} ratio={ratio} />
            </section>
        </Link>
    );
}

function createExcerpt(string) {
    const limit = 100;
    const regex = /(<([^>]+)>)/gi;
    const excerpt = string
        .replace(regex, ' ')
        .replace(/\s+/g, ' ')
        .replace('[&hellip;]', '')
        .trim();

    return excerpt.length < limit ? excerpt : `${excerpt.substr(0, excerpt.lastIndexOf(' ', limit))}\u2026`;
}
