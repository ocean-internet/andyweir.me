import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Profile from '../../partials/profile';
import { page, logoStyle } from './styles.module.scss';
import Image from './image';

export default class Layout extends Component {
    state = {
        showMenu: false,
        // title: null,
        // logo: null,
    };

    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    // componentDidMount() {
    //     const { site, profile } = useStaticQuery(graphql`
    //         query {
    //             site {
    //                 siteMetadata {
    //                     title
    //                 }
    //             }
    //             profile: markdownRemark(frontmatter: { partial: { eq: "profile" } }) {
    //                 frontmatter {
    //                     logo: profileImage {
    //                         childImageSharp {
    //                             fluid(maxWidth: 64, maxHeight: 64) {
    //                                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     `);
    //
    //     const { title } = site.siteMetadata;
    //     const { logo } = profile.frontmatter;
    //
    //     this.setState({ title, logo });
    // }

    toggleMenu = () => {
        const { showMenu } = this.state;

        this.setState({ showMenu: !showMenu });
    };

    render() {
        const { site, profile } = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
                profile: markdownRemark(frontmatter: { partial: { eq: "profile" } }) {
                    frontmatter {
                        logo: profileImage {
                            childImageSharp {
                                fluid(maxWidth: 64, maxHeight: 64) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `);

        const { title } = site.siteMetadata;
        const { logo } = profile.frontmatter;

        const { children } = this.props;
        // const { showMenu } = this.state;

        const { toggleMenu } = this;

        return (
            <Fragment>
                <Profile />
                <section className={page}>
                    <nav>
                        <Image image={logo} alt={title} className={logoStyle} />
                        <h1>{title}</h1>
                        <FontAwesomeIcon icon={faBars} fixedWidth onClick={toggleMenu} />
                    </nav>
                    <main>{children}</main>
                    <footer>&copy; {moment().format('YYYY')} Andy Weir</footer>
                </section>
            </Fragment>
        );
    }
}
