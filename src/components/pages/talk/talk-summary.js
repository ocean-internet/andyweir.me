import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

export default TalkSummary;

TalkSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

function TalkSummary({ slug, title, imageUrl, summary }) {
    return (
        <Link to={slug}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <img src={imageUrl} alt={title} />
            </section>
        </Link>
    );
}
