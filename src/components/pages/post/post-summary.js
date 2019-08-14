import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

export default PostSummary;

PostSummary.propTypes = {
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: imageProp.isRequired,
};

PostSummary.defaultProps = {
    isPrev: false,
    isNext: false,
};

function PostSummary({ isPrev, isNext, slug, title, dateString, date, image }) {
    const className = [styles.postLink];
    const isPrevNext = isPrev || isNext;

    isPrev && className.push(styles.prev);
    isNext && className.push(styles.next);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={styles.summary}>
                <h1 className={styles.summaryHeader}>
                    {title}
                    <time dateTime={date}>{dateString}</time>
                </h1>
                {!isPrevNext && <p>{styles.summary}</p>}
                <Image className={styles.summaryImage} image={image} alt={title} />
            </section>
        </Link>
    );
}
