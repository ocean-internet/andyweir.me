import PropTypes from 'prop-types';
import React from 'react';
import { wrapperStyles } from '../../scss/page/styles.module.scss';
import TalkTemplate from '../../templates/talk/talk-template';

export default TalkPreview;

TalkPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

function TalkPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        summary: entry.getIn(['data', 'summary']),
        youtube: entry.getIn(['data', 'youtube']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <TalkTemplate {...props} />
        </section>
    );
}
