import PropTypes from 'prop-types';
import React from 'react';
import BookTemplate from '../../templates/book/book-template';
import { wrapperStyles } from '../../scss/page/styles.module.scss';

export default BookPreview;

BookPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

function BookPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        author: entry.getIn(['data', 'author']),
        image: entry.getIn(['data', 'image']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <BookTemplate {...props} />
        </section>
    );
}
