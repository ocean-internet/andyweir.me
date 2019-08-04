import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';

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
            <header>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <Image image={image} />
            <PostContent content={content} />
        </article>
    );
}
