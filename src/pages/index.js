import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/layout/layout';
import { icon } from '../components/layout/styles.module.scss';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>
            <FontAwesomeIcon className={icon} icon={faHome} fixedWidth />
            {`What's new`}&hellip;
        </h1>
    </Layout>
);

export default IndexPage;
