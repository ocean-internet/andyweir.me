import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import HTMLContent from '../../components/layout/html-content';
import ProfileTemplate from './profile-template';

export default Profile;

Profile.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

function Profile({ showMenu, toggleMenu }) {
    const { partial } = useStaticQuery(graphql`
        query ProfileQuery {
            partial: markdownRemark(frontmatter: { partial: { eq: "profile" } }) {
                frontmatter {
                    backgroundImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    title
                    profileImage {
                        childImageSharp {
                            fluid(maxWidth: 100, maxHeight: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    work
                    twitter
                    linkedin
                    github
                }
                summary: html
            }
        }
    `);

    const { frontmatter, summary } = partial;
    const { backgroundImage: backgroundImageFile, title, profileImage, work, twitter, linkedin, github } = frontmatter;
    const { src: backgroundImage } = backgroundImageFile.childImageSharp.fluid;
    const contentComponent = HTMLContent;

    const props = {
        showMenu,
        toggleMenu,
        title,
        profileImage,
        backgroundImage,
        summary,
        work,
        twitter,
        linkedin,
        github,
        contentComponent,
    };

    return <ProfileTemplate {...props} />;
}
