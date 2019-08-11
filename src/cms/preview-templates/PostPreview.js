import PropTypes from 'prop-types';
import React from 'react';
import PostTemplate from '../../components/pages/post/post-template';
import { wrapperStyles } from '../../scss/layout/styles.module.scss';

export default PostPreview;

PostPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

function PostPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        image: entry.getIn(['data', 'image']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <PostTemplate {...props} />
        </section>
    );
}
