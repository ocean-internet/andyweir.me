import React, {Fragment}            from 'react';
import Content                      from '../../components/content';
import Image                        from '../../components/preview-compatible-images';
import { headerStyle, authorStyle } from './styles.module.scss';

export default function BookTemplate ({ title, author, image, summary, content, contentComponent }) {

    const PostContent = contentComponent || Content;
    const {name, url} = author;

    const Author = () => <span>by {!!url && <a href={url}>{name}</a>  || name}</span>;

    return (
        <Fragment>
            <header className={headerStyle}>
                <h1>
                    {title}
                    <Author className={authorStyle} />
                </h1>
                <p>{summary}</p>
                <Image image={image} alt={title}/>
            </header>
            <PostContent content={content}/>
        </Fragment>);
}
