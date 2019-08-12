import PropTypes from 'prop-types';
import React from 'react';
import { wrapperStyles } from '../../scss/layout/styles.module.scss';
import HomeTemplate from '../../components/pages/home/home-template';

export default HomePreview;

HomePreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

function HomePreview({ entry }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        summary: entry.getIn(['data', 'summary']),
        footnote: entry.getIn(['data', 'footnote']),
    };

    return (
        <section className={wrapperStyles}>
            <HomeTemplate {...props} />
        </section>
    );
}
