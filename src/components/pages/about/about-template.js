import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../layout/content';
import { headerStyle, contentStyle } from './styles.module.scss';

export default AboutTemplate;
export const AboutProp = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};
AboutTemplate.defaultProps = {
    content: null,
    contentComponent: null,
};

AboutTemplate.propTypes = AboutProp;

function AboutTemplate({ title, summary, content, contentComponent }) {
    const PageContent = contentComponent || Content;

    return (
        <article>
            <header className={headerStyle}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <PageContent className={contentStyle} content={content} />
        </article>
    );
}
