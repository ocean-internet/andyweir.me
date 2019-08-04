import { graphql, useStaticQuery } from 'gatsby';
import React                       from 'react';
import HTMLContent             from "../../components/layout/html-content"
import Profile                     from './profile';

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
    const { backgroundImage, title, profileImage, work, twitter, linkedin, github } = frontmatter;
    const { childImageSharp: image } = profileImage;
    const { src: background } = backgroundImage.childImageSharp.fluid;
    const contentComponent = HTMLContent;

    const props = { title, image, background, summary, work, twitter, linkedin, github, contentComponent };

    return <Profile {...props} />;
}
