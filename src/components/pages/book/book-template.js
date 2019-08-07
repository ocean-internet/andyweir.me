import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Content from '../../layout/content';
import Image, { imageProp } from '../../layout/image';
import { headerStyle, imageStyle, contentStyle } from './styles.module.scss';

export default BookTemplate;
export const BookProp = {
    title: PropTypes.string.isRequired,
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

function BookTemplate({ title = null, author = {}, image = null, summary = null, content = null, contentComponent }) {
    const BookContent = contentComponent || Content;
    const { name, url } = author;
    const ratio = 129 / 198;

    const Author = () => <span>by {url ? <a href={url}>{name}</a> : name}</span>;

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>
                    {title}
                    <Author />
                </h1>
                <p>{summary}</p>
                <Image className={imageStyle} ratio={ratio} image={image} alt={title} />
            </header>
            <BookContent className={contentStyle} content={content} />
        </Fragment>
    );
}
