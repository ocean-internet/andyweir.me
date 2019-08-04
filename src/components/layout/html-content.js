import parseHtml from 'html-react-parser';
import PropTypes from 'prop-types';
import React     from 'react';

export default HTMLContent;

HTMLContent.propTypes = {
    content:   PropTypes.node,
    className: PropTypes.string,
};

function HTMLContent ({ content, className }) {

    return <section className={className}>{parseHtml(content)}</section>;
}
