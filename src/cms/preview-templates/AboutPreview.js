import PropTypes     from 'prop-types';
import React         from 'react';
import AboutTemplate from '../../templates/about/about-template';

export default AboutPreview;

AboutPreview.propTypes = {
    entry:     PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

function AboutPreview ({ entry, widgetFor }) {
    const props = {
        title:   entry.getIn(['data', 'title']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return <AboutTemplate {...props}/>;
}
