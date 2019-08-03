import Image from '../../components/PreviewCompatibleImage';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { fluidObject } from '../../prop-types/gatsby-image';

import { profile, profileImageStyle } from './styles.module.scss';
import PropTypes from 'prop-types';

export default Profile;

Profile.propTypes = {
    title: PropTypes.string.isRequired,
    profileImage: PropTypes.oneOf([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]).isRequired,
    backgroundImage: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    work: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
};

Profile.defaultProps = {
    work: null,
    twitter: null,
    linkedin: null,
    github: null,
};

function Profile({ title, profileImage, backgroundImage, content, work, twitter, linkedin, github }) {
    const style = { backgroundImage: `url(${backgroundImage})` };

    return (
        <section Tag="section" className={profile} style={style}>
            <header>
                <h1>{title}</h1>
                <Image className={profileImageStyle} image={profileImage} alt={title} />
            </header>
            <section dangerouslySetInnerHTML={{ __html: content }} />
            <nav>
                {work && (
                    <a href={`https://twitter.com/${work}`}>
                        <FontAwesomeIcon icon={faBriefcase} fixedWidth size="2x" title={work} />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`}>
                        <FontAwesomeIcon icon={faTwitter} fixedWidth size="2x" title={twitter} />
                    </a>
                )}
                {linkedin && (
                    <a href={`https://linkedin.com/in/${linkedin}`}>
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth size="2x" title={linkedin} />
                    </a>
                )}
                {github && (
                    <a href={`https://github.com/${github}`}>
                        <FontAwesomeIcon icon={faGithub} fixedWidth size="2x" title={github} />
                    </a>
                )}
            </nav>
        </section>
    );
}
