import PropTypes from 'prop-types';
import React from 'react';

export default Content;

Content.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
};

Content.defaultProps = {
    content: null,
    className: null,
};

function Content({ content, className }) {
    return <section className={className}>{content}</section>;
}
