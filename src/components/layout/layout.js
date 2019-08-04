import { faBookReader, faCommentAlt, faHome, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Profile from '../../partials/profile';
import { page, icon, active } from './styles.module.scss';
import { Link } from 'gatsby';

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function Layout({ children }) {
    return (
        <Fragment>
            <Profile />
            <section className={page}>
                <nav>
                    <Link activeClassName={active} to="/">
                        <FontAwesomeIcon className={icon} icon={faHome} fixedWidth />
                        Home
                    </Link>
                    <Link activeClassName={active} partiallyActive={true} to="/blog">
                        <FontAwesomeIcon className={icon} icon={faPenAlt} fixedWidth />
                        Posts
                    </Link>
                    <Link activeClassName={active} partiallyActive={true} to="/talks">
                        <FontAwesomeIcon className={icon} icon={faCommentAlt} />
                        Talks
                    </Link>
                    <Link activeClassName={active} partiallyActive={true} to="/books">
                        <FontAwesomeIcon className={icon} icon={faBookReader} fixedWidth />
                        Books
                    </Link>
                    <Link activeClassName={active} partiallyActive={true} to="/about">
                        <FontAwesomeIcon className={icon} icon={faUser} />
                        About
                    </Link>
                </nav>
                <main>{children}</main>
                <footer>&copy; {moment().format('YYYY')} Andy Weir</footer>
            </section>
        </Fragment>
    );
}
