import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import parseHtml from 'html-react-parser';
import { PrevNextProp } from '../../../prop-types/navigation';
import { nextLink, prevLink, prevNext } from '../pagination.module.scss';

export default PostNavigation;

PostNavigation.propTypes = {
    pathPrefix: PropTypes.string,
    prev: PrevNextProp,
    next: PrevNextProp,
};

PostNavigation.defaultProps = {
    pathPrefix: '',
    prev: null,
    next: null,
};

function PostNavigation({ pathPrefix, prev, next }) {
    const { slug: prevSlug, title: prevTitle, date: prevDate, dateString: prevDateString } = prev || {};
    const { slug: nextSlug, title: nextTitle, date: nextDate, dateString: nextDateString } = next || {};

    return (
        <nav className={prevNext}>
            {next && (
                <Link to={`${pathPrefix}/${nextSlug}`} className={nextLink}>
                    <div>
                        <div>{parseHtml(nextTitle)}</div>
                        {nextDateString && <span>{nextDateString}</span>}
                        {nextDate && <span>{moment(nextDate).format('MMM Do YYYY')}</span>}
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                </Link>
            )}
            {prev && (
                <Link to={`${pathPrefix}/${prevSlug}`} className={prevLink}>
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                    <div>
                        <div>{parseHtml(prevTitle)}</div>
                        {prevDateString && <span>{prevDateString}</span>}
                        {prevDate && <span>{moment(prevDate).format('MMM Do YYYY')}</span>}
                    </div>
                </Link>
            )}
        </nav>
    );
}
