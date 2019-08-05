import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { disabled, link, pagination } from '../pagination.module.scss';

export default PaginationNavigation;

PaginationNavigation.propTypes = {
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    prevLink: PropTypes.string.isRequired,
    nextLink: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
};

function PaginationNavigation({ first, prevLink, index, pageCount, nextLink, last }) {
    return (
        <nav className={pagination}>
            {(!first && (
                <Link to={prevLink} className={link}>
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                </Link>
            )) || <FontAwesomeIcon icon={faChevronLeft} className={disabled} fixedWidth />}
            <p>
                Page {index} of {pageCount}
            </p>
            {(!last && (
                <Link to={nextLink} className={link}>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                </Link>
            )) || <FontAwesomeIcon icon={faChevronRight} className={disabled} fixedWidth />}
        </nav>
    );
}
