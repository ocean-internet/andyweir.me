/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment }         from 'react';
import PropTypes                   from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import Profile                     from '../../partials/profile';
import {page} from './styles.module.scss';

const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `);

    return (
        <Fragment>
            <Profile />
            <section className={page}>
                <header><h1>Page Heading</h1></header>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </section>
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
