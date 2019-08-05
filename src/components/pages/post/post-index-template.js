import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PaginationNavigation from '../../navigation/pagination';
import { headerStyle } from './styles.module.scss';
import { Link } from 'gatsby';
import Image from '../../../components/layout/image';

export default PostIndexTemplate;

PostIndexTemplate.propTypes = {
    group: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

function PostIndexTemplate({ group: posts, index, first, last, pageCount, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const postList = posts.map(({ node }) => {
        return { ...node };
    });
    const hasPosts = !!postList.length;
    const hasPages = !!pageCount && pageCount < 1;

    const PostSummary = ({ slug, title, image, summary }) => (
        <Link to={slug}>
            <section>
                <h1>{title}</h1>
                <p>{summary}</p>
                <Image image={image.childImageSharp} />
            </section>
        </Link>
    );
    const PostList = ({ children }) => <section>{children}</section>;

    const postListProps = {
        children: postList.map(({ id: key, fields, frontmatter }) => {
            const { slug } = fields;
            const { title, image, summary } = frontmatter;

            return <PostSummary {...{ key, slug, title, image, summary }} />;
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
            <header className={headerStyle}>
                <h1>
                    <FontAwesomeIcon icon={faPenAlt} fixedWidth />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <PostList {...postListProps} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
