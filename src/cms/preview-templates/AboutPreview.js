import PropTypes from 'prop-types';
import React from 'react';
import { wrapperStyles } from '../../scss/layout/styles.module.scss';
import AboutTemplate from '../../components/pages/about/about-template';

export default AboutPreview;

AboutPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

function AboutPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <AboutTemplate {...props} />
        </section>
    );
}
