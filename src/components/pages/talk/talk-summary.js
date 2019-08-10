import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../layout/image';
import { nextStyle, prevStyle, talkLinkStyle, summaryHeaderStyle, summaryImageStyle } from './styles.module.scss';

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

    const className = [talkLinkStyle];

    isPrev && className.push(prevStyle);
    isNext && className.push(nextStyle);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={summaryHeaderStyle}>
                <h1>
                    {title}
                    <span>{dateString}</span>
                </h1>
                <Image image={image} className={summaryImageStyle} ratio={ratio} alt={title} />
            </section>
        </Link>
    );
}
