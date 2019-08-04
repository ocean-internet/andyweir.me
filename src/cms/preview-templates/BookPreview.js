import PropTypes    from 'prop-types';
import React        from 'react';
import BookTemplate from '../../templates/book-template';

const BookPreview = ({ entry, widgetFor }) => (
    <BookTemplate title={entry.getIn(['data', 'title'])}
                  author={entry.getIn(['data', 'author'])}
                  image={entry.getIn(['data', 'image'])}
                  summary={entry.getIn(['data', 'summary'])}
                  content={widgetFor('body')}/>);

BookPreview.propTypes = {
    entry:     PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

export default BookPreview;
