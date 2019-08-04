import PropTypes    from 'prop-types';
import React        from 'react';
import PostTemplate from '../../templates/post/post-template';

export default PostPreview;

PostPreview.propTypes = {
    entry:     PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

function PostPreview ({ entry, widgetFor }) {

    const props = {
        title:   entry.getIn(['data', 'title']),
        image:   entry.getIn(['data', 'image']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return <PostTemplate {...props}/>;
}
