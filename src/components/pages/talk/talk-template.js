import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Content from '../../layout/content';
import { headerStyle, embedStyle, contentStyle } from './styles.module.scss';

export default TalkTemplate;
export const TalkProp = {
    title: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func.isRequired,
};

TalkTemplate.propTypes = TalkProp;

function TalkTemplate({ title, dateString, summary, youtube, content, contentComponent }) {
    const PostContent = contentComponent || Content;

    const backgroundImage = { backgroundImage: `url(https://img.youtube.com/vi/${youtube}/mqdefault.jpg)` };

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>
                    {title}
                    <span>{dateString}</span>
                </h1>
                <p>{summary}</p>
            </header>
            <div className={embedStyle} style={backgroundImage}>
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
