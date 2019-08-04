import PropTypes from 'prop-types';
import React from 'react';

export default Content;

Content.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
};

function Content({ content, className }) {
    return <section className={className}>{content}</section>;
}
