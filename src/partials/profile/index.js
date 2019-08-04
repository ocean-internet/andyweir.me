import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import HTMLContent from '../../components/layout/html-content';
import ProfileTemplate from './profile-template';

export default function() {
    const { partial } = useStaticQuery(graphql`
        query ProfileQuery {
            partial: markdownRemark(frontmatter: { partial: { eq: "profile" } }) {
                frontmatter {
                    backgroundImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                    title
                    profileImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
    const {
        backgroundImage: backgroundImageFile,
        title,
        profileImage: profileImageFile,
        work,
        twitter,
        linkedin,
        github,
    } = frontmatter;
    const { childImageSharp: profileImage } = profileImageFile;
    const { src: backgroundImage } = backgroundImageFile.childImageSharp.fluid;
    const contentComponent = HTMLContent;

    const props = {
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
