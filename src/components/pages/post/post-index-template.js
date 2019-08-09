import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PaginationNavigation from '../../navigation/pagination';
import PostSummary from './post-summary';
import { indexHeaderStyle, postListStyle } from './styles.module.scss';

export default PostIndexTemplate;
export const PostIndexProp = {
    group: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

PostIndexTemplate.propTypes = PostIndexProp;

function PostIndexTemplate({ group: posts = [], index = 1, first, last, pageCount = 1, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const postList = posts.map(({ node }) => ({ ...node }));

    const hasPosts = !!postList.length;
    const hasPages = !!pageCount && pageCount < 1;

    const postListProps = {
        children: postList.map(({ id: key, fields, frontmatter }) => {
            const postProps = {
                key,
                ...fields,
                ...frontmatter,
            };

            return <PostSummary {...postProps} />;
        }),
    };

    const paginationNavProps = {
        first,
        last,
        index,
        pageCount,
        prevLink: `/blog/${prev}`,
        nextLink: `/blog/${next}`,
    };

    return (
        <Fragment>
            <header className={indexHeaderStyle}>
                <h1>
                    <FontAwesomeIcon icon={faPenAlt} fixedWidth />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...postListProps} className={postListStyle} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
