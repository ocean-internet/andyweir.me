import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../layout/image';
import { plainLink } from './styles.module.scss';

export default TalkSummary;

TalkSummary.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

function TalkSummary({ slug, title, youtube, summary }) {
    const image = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
    const ratio = 9 / 16;

    return (
        <Link to={slug} className={plainLink}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <Image image={image} ratio={ratio} alt={title} />
            </section>
        </Link>
    );
}
