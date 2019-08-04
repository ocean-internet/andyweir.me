import PropTypes from 'prop-types';
import React     from 'react';
import Content   from '../../components/layout/content';

export default AboutTemplate;

AboutTemplate.propTypes = {
    title:            PropTypes.string.isRequired,
    summary:          PropTypes.string.isRequired,
    content:          PropTypes.string,
    contentComponent: PropTypes.func,
};

function AboutTemplate ({ title, summary, content, contentComponent }) {

    const PageContent = contentComponent || Content;

    return (
        <article>
            <header>
                <h1>{title}</h1>
                <p>{summary}</p>
            </header>
            <PageContent content={content}/>
        </article>);
}

