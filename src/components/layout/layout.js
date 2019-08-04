import moment              from 'moment';
import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';
import Profile             from '../../partials/profile';
import {page}              from './styles.module.scss';

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function Layout({ children }) {

    return (
        <Fragment>
            <Profile />
            <section className={page}>
                <header><h1>Page Heading</h1></header>
                <main>{children}</main>
                <footer>
                    &copy; {moment().format('YYYY')} Andy Weir
                </footer>
            </section>
        </Fragment>
    );
}

