import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { icon } from '../../layout/styles.module.scss';
import PaginationNavigation from '../../navigation/pagination';
import { indexHeaderStyle } from './styles.module.scss';
import BookSummary from './book-summary';

export default BookIndexTemplate;

BookIndexTemplate.propTypes = {
    group: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

function BookIndexTemplate({ group: posts, index, first, last, pageCount, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const postList = posts.map(({ node }) => ({ ...node }));

    const hasPosts = !!postList.length;
    const hasPages = !!pageCount && pageCount < 1;

    const bookListProps = {
        children: postList.map(({ id: key, fields, frontmatter }) => {
            const { slug } = fields;
            const { title, image, summary } = frontmatter;

            return <BookSummary {...{ key, slug, title, image, summary }} />;
        }),
    };

    const paginationNavProps = {
        first,
        last,
        index,
        pageCount,
        prevLink: `/books/${prev}`,
        nextLink: `/books/${next}`,
    };
    return (
        <Fragment>
            <header className={indexHeaderStyle}>
                <h1>
                    <FontAwesomeIcon className={icon} icon={faBookReader} fixedWidth />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...bookListProps} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
