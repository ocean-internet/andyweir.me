import React from 'react';
import { title, summary } from '../../gatsby/site-metadata';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

export default NotFoundPage;

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <h1>{title}</h1>
            <p>{summary}</p>
        </Layout>
    );
}
