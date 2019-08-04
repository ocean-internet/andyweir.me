import React, { Fragment } from 'react';
import Content from '../../components/layout/content';
import { headerStyle, embedStyle } from './styles.module.scss';

export default function TalkTemplate({ title, summary, youtube, content, contentComponent }) {
    const PostContent = contentComponent || Content;

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <div className={embedStyle}>
                <iframe
                    title={title}
                    src={`https://www.youtube.com/embed/${youtube}`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <PostContent content={content} />
        </Fragment>
    );
}
