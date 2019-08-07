import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { icon } from '../../layout/styles.module.scss';
import PaginationNavigation from '../../navigation/pagination';
import { indexHeaderStyle, talkListStyle } from './styles.module.scss';
import TalkSummary from './talk-summary';

export default TalkIndexTemplate;
export const TalkIndexProp = {
    group: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

TalkIndexTemplate.propTypes = TalkIndexProp;

function TalkIndexTemplate({ group: posts = [], index = 1, first, last, pageCount = 1, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const postList = posts.map(({ node }) => ({ ...node }));

    const hasPosts = !!postList.length;
    const hasPages = !!pageCount && pageCount < 1;

    const talkListProps = {
        children: postList.map(({ id: key, fields, frontmatter }) => {
            const talkProps = {
                key,
                ...fields,
                ...frontmatter,
            };

            return <TalkSummary {...talkProps} />;
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
            <header className={indexHeaderStyle}>
                <h1>
                    <FontAwesomeIcon className={icon} icon={faCommentAlt} fixedWidth />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...talkListProps} className={talkListStyle} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
