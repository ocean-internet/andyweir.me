import React, { Fragment } from 'react';
import { headerStyle } from './styles.module.scss';

const TalkIndexTemplate = ({ title, summary }) => (
    <Fragment>
        <header className={headerStyle}>
            <h1>{title}&hellip;</h1>
            <p>{summary}</p>
        </header>
    </Fragment>
);

export default TalkIndexTemplate;
