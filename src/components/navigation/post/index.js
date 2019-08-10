import React from 'react';
import PropTypes from 'prop-types';
import { prevNextStyle } from '../pagination.module.scss';

export default PostNavigation;

PostNavigation.propTypes = {
    prev: PropTypes.node,
    next: PropTypes.node,
};

PostNavigation.defaultProps = {
    prev: null,
    next: null,
};

function PostNavigation({ prev: Prev, next: Next }) {
    return (
        <nav className={prevNextStyle}>
            {Prev && <Prev />}
            {Next && <Next />}
        </nav>
    );
}
