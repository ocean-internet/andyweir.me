import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../layout/content';
import Image, { imageProp } from '../../layout/image';
import { contentStyle, headerStyle, imageStyle } from './styles.module.scss';

export default PostTemplate;
export const PostProp = {
    title: PropTypes.string.isRequired,
    image: imageProp.isRequired.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func.isRequired,
};

PostTemplate.propTypes = PostProp;

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
