import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Home as HomeIcon } from 'react-feather';
import * as styles from './styles.module.scss';

export default HomeTemplate;
export const HomeProp = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    footnote: PropTypes.string,
};

HomeTemplate.propTypes = HomeProp;

HomeTemplate.defaultProps = {
    summary: null,
    footnote: null,
};

function HomeTemplate({ title, summary, footnote }) {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>
                    <HomeIcon className={styles.textIcon} />
                    {title}&hellip;
                </h1>
                {summary && <p>{summary}</p>}
            </header>
            {footnote && <p className={styles.footnote}>{footnote}</p>}
        </Fragment>
    );
}
