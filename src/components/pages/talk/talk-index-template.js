import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { MessageSquare as TalkIcon } from 'react-feather';
import PaginationNavigation from '../../navigation/pagination';
import * as styles from './styles.module.scss';
import TalkSummary from './talk-summary';

export default TalkIndexTemplate;
export const TalkIndexProp = {
    posts: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

TalkIndexTemplate.propTypes = TalkIndexProp;

function TalkIndexTemplate({ posts = [], index = 1, first, last, pageCount = 1, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const hasPosts = !!posts.length;
    const hasPages = !!pageCount && pageCount < 1;

    const talkListProps = {
        children: posts.map(talkProps => <TalkSummary {...talkProps} />),
    };

    const paginationNavProps = {
        first,
        last,
        index,
        pageCount,
        prevLink: `/talks/${prev}`,
        nextLink: `/talks/${next}`,
    };
    return (
        <Fragment>
            <header className={styles.indexHeader}>
                <h1>
                    <TalkIcon className={styles.textIcon} />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...talkListProps} className={styles.talkList} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
