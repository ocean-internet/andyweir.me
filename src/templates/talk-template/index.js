import React              from 'react';
import Content            from '../../components/content';
import Layout             from '../../components/layout/layout';
import { embedContainer } from './styles.module.scss';

export default function TalkTemplate ({ title, summary, youtube, content, contentComponent }) {

    const PostContent = contentComponent || Content;

    return (
        <Layout>
            <header>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <div className={embedContainer}>
                <iframe title={title}
                        src={`https://www.youtube.com/embed/${youtube}`}
                        frameBorder="0"
                        allowFullScreen/>
            </div>
            <PostContent content={content}/>
        </Layout>);
}
