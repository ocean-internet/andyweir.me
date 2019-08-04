import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';
import { contentStyle, headerStyle, imageStyle } from './styles.module.scss';

export default PostTemplate;

PostTemplate.propTypes = {
    title: PropTypes.string,
    image: PropTypes.any,
    summary: PropTypes.string,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

function PostTemplate({ title, image, summary, content, contentComponent }) {
    const PostContent = contentComponent || Content;

    return (
        <article>
            <header className={headerStyle}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <Image className={imageStyle} image={image} />
            <PostContent className={contentStyle} content={content} />
        </article>
    );
}
