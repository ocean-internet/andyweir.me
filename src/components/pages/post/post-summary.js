import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageProp } from '../../layout/image';
import { plainLink } from './styles.module.scss';

export default PostSummary;

PostSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
};

function PostSummary({ slug, title, image, summary }) {
    return (
        <Link to={slug} className={plainLink}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <Image image={image} alt={title} />
            </section>
        </Link>
    );
}
