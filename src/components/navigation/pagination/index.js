import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight as NextIcon, ChevronLeft as PrevIcon } from 'react-feather';
import * as styles from '../pagination.module.scss';

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
        <nav className={styles.pagination}>
            {(!first && (
                <Link to={prevLink} className={styles.link}>
                    <PrevIcon className={styles.icon} />
                </Link>
            )) || <PrevIcon className={styles.disabled} />}
            <p>
                Page {index} of {pageCount}
            </p>
            {(!last && (
                <Link to={nextLink} className={styles.link}>
                    <NextIcon className={styles.icon} />
                </Link>
            )) || <NextIcon className={styles.disabled} />}
        </nav>
    );
}
