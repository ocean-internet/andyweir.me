import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { BookOpen as BookIcon } from 'react-feather';
import PaginationNavigation from '../../navigation/pagination';
import * as styles from './styles.module.scss';
import BookSummary from './book-summary';

export default BookIndexTemplate;
export const BookIndexProp = {
    posts: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

BookIndexTemplate.propTypes = BookIndexProp;

function BookIndexTemplate({ posts = [], index = 1, first, last, pageCount = 1, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const hasPosts = !!posts.length;
    const hasPages = !!pageCount && pageCount > 1;

    const bookListProps = {
        children: posts.map(bookProps => <BookSummary {...bookProps} />),
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
            <header className={styles.indexHeader}>
                <h1>
                    <BookIcon className={styles.textIcon} />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPosts && <section {...bookListProps} className={styles.bookList} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
