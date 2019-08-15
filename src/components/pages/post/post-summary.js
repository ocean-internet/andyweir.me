import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

export default PostSummary;

PostSummary.propTypes = {
    isHome: PropTypes.bool,
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    postImage: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

PostSummary.defaultProps = {
    isHome: false,
    isPrev: false,
    isNext: false,
};

function PostSummary({ isHome, isPrev, isNext, slug, title, dateString, date, postImage: image, summary }) {
    const className = [styles.postLink];
    const isPrevNext = isPrev || isNext;

    isHome && className.push(styles.home);
    isPrev && className.push(styles.prev);
    isNext && className.push(styles.next);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={styles.summary}>
                <h1 className={styles.summaryHeader}>
                    {title}
                    <time dateTime={date}>{dateString}</time>
                </h1>
                {!isPrevNext && <p className={styles.caption}>{summary}</p>}
                <Image className={styles.summaryImage} image={image} alt={title} />
            </section>
        </Link>
    );
}
