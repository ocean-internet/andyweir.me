import React from 'react';

import { Home as HomeIcon } from 'react-feather';
import Layout from '../components/layout/layout';
import * as styles from './styles.module.scss';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1 className={styles.heading}>
            <HomeIcon className={styles.textIcon} />
            {`What's new`}&hellip;
        </h1>
    </Layout>
);

export default IndexPage;
