import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { icon } from '../../layout/styles.module.scss';
import PaginationNavigation from '../../navigation/pagination';
import { headerStyle } from './styles.module.scss';
import TalkSummary from './talk-summary';

export default TalkIndexTemplate;

TalkIndexTemplate.propTypes = {
    group: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

function TalkIndexTemplate({ group: posts, index, first, last, pageCount, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const postList = posts.map(({ node }) => ({ ...node }));

    const hasPosts = !!postList.length;
    const hasPages = !!pageCount && pageCount < 1;

    const talkListProps = {
        children: postList.map(({ id: key, fields, frontmatter }) => {
            const { slug } = fields;
            const { title, imageUrl, summary } = frontmatter;

            return <TalkSummary {...{ key, slug, title, imageUrl, summary }} />;
        }),
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
            <header className={headerStyle}>
                <h1>
                    <FontAwesomeIcon className={icon} icon={faCommentAlt} fixedWidth />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...talkListProps} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
