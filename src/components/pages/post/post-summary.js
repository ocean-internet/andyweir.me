import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import {
    nextStyle,
    prevStyle,
    postLinkStyle,
    summaryStyle,
    summaryHeaderStyle,
    summaryImageStyle,
} from './styles.module.scss';

export default PostSummary;

PostSummary.propTypes = {
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

PostSummary.defaultProps = {
    isPrev: false,
    isNext: false,
};

function PostSummary({ isPrev, isNext, slug, title, dateString, image, summary }) {
    const className = [postLinkStyle];
    const isPrevNext = isPrev || isNext;

    isPrev && className.push(prevStyle);
    isNext && className.push(nextStyle);

    return (
        <Link to={slug} className={className.join(' ')}>
            <section className={summaryStyle}>
                <h1 className={summaryHeaderStyle}>
                    {title}
                    <span>{dateString}</span>
                </h1>
                {!isPrevNext && <p>{summary}</p>}
                <Image className={summaryImageStyle} image={image} alt={title} />
            </section>
        </Link>
    );
}
