import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Content from '../../layout/content';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

export default BookTemplate;
export const BookProp = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
    }).isRequired,
    image: imageProp.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func.isRequired,
};

BookTemplate.propTypes = BookProp;
BookTemplate.defaultProps = {
    subtitle: null,
};

function BookTemplate({
    title = null,
    subtitle = null,
    author = {},
    image = null,
    summary = null,
    content = null,
    contentComponent,
}) {
    const BookContent = contentComponent || Content;
    const { name, url } = author;
    const ratio = 198 / 129;

    const Author = () => <div className={styles.author}>by {url ? <a href={url}>{name}</a> : name}</div>;

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>
                    {title}
                    {subtitle && <span>{subtitle}</span>}
                </h1>
                <Author />
                <p>{summary}</p>
                <Image className={styles.image} ratio={ratio} image={image} alt={title} />
            </header>
            <BookContent className={styles.content} content={content} />
        </Fragment>
    );
}
