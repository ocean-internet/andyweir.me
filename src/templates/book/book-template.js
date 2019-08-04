import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';
import { fluidObject } from '../../prop-types/gatsby-image';
import { headerStyle, imageStyle, contentStyle } from './styles.module.scss';

export default BookTemplate;

BookTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
    }).isRequired,
    imageFile: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]),
    summary: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

function BookTemplate({ title, author, image, summary, content, contentComponent }) {
    const BookContent = contentComponent || Content;
    const { name, url } = author;

    const Author = () => <span>by {!!url ? <a href={url}>{name}</a> : name}</span>;

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>
                    {title}
                    <Author />
                </h1>
                <p>{summary}</p>
                <Image className={imageStyle} image={image} alt={title} />
            </header>
            <BookContent className={contentStyle} content={content} />
        </Fragment>
    );
}
