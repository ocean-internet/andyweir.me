import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../layout/content';
import Image, { imageProp } from '../../layout/image';
import * as styles from './styles.module.scss';

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
            <header className={styles.header}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <Image className={styles.image} image={image} />
            <PostContent className={styles.content} content={content} />
        </article>
    );
}
