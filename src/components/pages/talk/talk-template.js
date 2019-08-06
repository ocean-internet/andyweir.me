import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Content from '../../layout/content';
import { headerStyle, embedStyle, contentStyle } from './styles.module.scss';

export default TalkTemplate;
export const TalkProp = {
    title: PropTypes.string,
    summary: PropTypes.string,
    youtube: PropTypes.string,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

TalkProp.propTypes = TalkProp;

function TalkTemplate({ title, summary, youtube, content, contentComponent }) {
    const PostContent = contentComponent || Content;

    const iframeStyle = { backgroundImage: `url(https://img.youtube.com/vi/${youtube}/mqdefault.jpg)` };

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <div className={embedStyle} style={iframeStyle}>
                <iframe
                    title={title}
                    src={`https://www.youtube.com/embed/${youtube}`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <PostContent className={contentStyle} content={content} />
        </Fragment>
    );
}
