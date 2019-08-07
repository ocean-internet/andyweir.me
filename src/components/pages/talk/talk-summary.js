import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../layout/image';
import { talkLinkStyle, imageStyle } from './styles.module.scss';

export default TalkSummary;

TalkSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
};

function TalkSummary({ slug, title, dateString, youtube }) {
    const image = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
    const ratio = 9 / 16;

    return (
        <Link to={slug} className={talkLinkStyle}>
            <section>
                <h1>
                    {title}
                    <span>{dateString}</span>
                </h1>
                <Image image={image} className={imageStyle} ratio={ratio} alt={title} />
            </section>
        </Link>
    );
}
