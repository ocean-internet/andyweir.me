import { graphql, Link, useStaticQuery } from 'gatsby';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Menu } from 'react-feather';
import Profile from '../../partials/profile';
import Image from './image';
import { homeLinkStyle, logoStyle, page } from './styles.module.scss';

export default LayoutTemplate;

LayoutTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

function LayoutTemplate({ children, showMenu, toggleMenu }) {
    const { site, profile } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            profile: markdownRemark(frontmatter: { partial: { eq: "profile" } }) {
                frontmatter {
                    profileImage {
                        childImageSharp {
                            fluid(maxWidth: 48, maxHeight: 48) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const { title } = site.siteMetadata;
    const { profileImage } = profile.frontmatter;

    return (
        <Fragment>
            <Profile {...{ showMenu, toggleMenu }} />
            <section className={page}>
                <nav>
                    <Link to="/" className={homeLinkStyle}>
                        <Image image={profileImage} alt={title} className={logoStyle} />
                        <h1>{title}</h1>
                    </Link>
                    <Menu onClick={toggleMenu} />
                </nav>
                <main>{children}</main>
                <footer>&copy; {moment().format('YYYY')} Andy Weir</footer>
            </section>
        </Fragment>
    );
}
