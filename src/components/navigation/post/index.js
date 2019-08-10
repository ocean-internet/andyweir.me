import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { prevNext } from '../pagination.module.scss';

export default PostNavigation;

PostNavigation.propTypes = {
    prev: PropTypes.node,
    next: PropTypes.node,
};

PostNavigation.defaultProps = {
    prev: null,
    next: null,
};

function PostNavigation({ prev, next }) {
    return (
        <nav className={prevNext}>
            {prev && <Fragment>{prev}</Fragment>}
            {next && <Fragment>{next}</Fragment>}
        </nav>
    );
}
