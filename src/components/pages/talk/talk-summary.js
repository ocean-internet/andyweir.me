import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../layout/image';
import * as styles from './styles.module.scss';

export default TalkSummary;

TalkSummary.propTypes = {
    isHome: PropTypes.bool,
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
};

TalkSummary.defaultProps = {
    isHome: false,
    isPrev: false,
    isNext: false,
};

function TalkSummary({ isHome, isPrev, isNext, slug, title, dateString, date, youtube }) {
    const image = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
    const ratio = 9 / 16;

    const className = [styles.talkLink];

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
                <Image image={image} className={styles.summaryImage} ratio={ratio} alt={title} />
            </section>
        </Link>
    );
}
