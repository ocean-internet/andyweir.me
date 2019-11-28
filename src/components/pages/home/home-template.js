import { arrayOf, shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import { Home as HomeIcon } from 'react-feather';
import BookSummary from '../book/book-summary';
import PostSummary from '../post/post-summary';
import TalkSummary from '../talk/talk-summary';
import * as styles from './styles.module.scss';

export default HomeTemplate;
export const HomeProp = {
    title: string.isRequired,
    summary: string,
    list: arrayOf(
        shape({
            frontmatter: shape({
                type: string,
            }),
        })
    ).isRequired,
    footnote: string,
};

HomeTemplate.propTypes = HomeProp;

HomeTemplate.defaultProps = {
    summary: null,
    footnote: null,
};

function HomeTemplate({ title, summary, list = [], footnote }) {
    const listProps = {
        children: list.map(({ id: key, fields, frontmatter }) => {
            const props = {
                key,
                isHome: true,
                ...fields,
                ...frontmatter,
            };

            // eslint-disable-next-line react/prop-types
            const { type } = props;

            switch (type) {
                case 'post':
                    return <PostSummary {...props} />;
                case 'talk':
                    return <TalkSummary {...props} />;
                case 'book':
                    return <BookSummary {...props} />;
                default:
                    return null;
            }
        }),
    };

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>
                    <HomeIcon className={styles.textIcon} />
                    {title}&hellip;
                </h1>
                {summary && <p>{summary}</p>}
            </header>
            <section {...listProps} className={styles.list} />
            {footnote && <p className={styles.footnote}>{footnote}</p>}
        </Fragment>
    );
}
