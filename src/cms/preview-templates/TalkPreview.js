import PropTypes from 'prop-types';
import React from 'react';
import { wrapperStyles } from '../../scss/layout/styles.module.scss';
import TalkTemplate from '../../components/pages/talk/talk-template';

export default TalkPreview;

TalkPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
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
