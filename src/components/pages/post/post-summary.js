import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import { postLinkStyle } from './styles.module.scss';

export default PostSummary;

PostSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

function PostSummary({ slug, title, dateString, image, summary }) {
    return (
        <Link to={slug} className={postLinkStyle}>
            <section>
                <h1>
                    {title}
                    <span>{dateString}</span>
                </h1>
                <p>{summary}</p>
                <Image image={image} alt={title} />
            </section>
        </Link>
    );
}
