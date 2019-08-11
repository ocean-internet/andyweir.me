import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../layout/image';
import * as styles from './styles.module.scss';

export default TalkSummary;

TalkSummary.propTypes = {
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
};

TalkSummary.defaultProps = {
    isPrev: false,
    isNext: false,
};

function TalkSummary({ isPrev, isNext, slug, title, dateString, youtube }) {
    const image = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
    const ratio = 9 / 16;

    const className = [styles.talkLink];

    isPrev && className.push(styles.prev);
    isNext && className.push(styles.next);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={styles.summary}>
                <h1 className={styles.summaryHeader}>
                    {title}
                    <span>{dateString}</span>
                </h1>
                <Image image={image} className={styles.summaryImage} ratio={ratio} alt={title} />
            </section>
        </Link>
    );
}
