import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faBookReader, faCommentAlt, faHome, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';
import { fluidObject } from '../../prop-types/gatsby-image';
import { icon, active } from '../../components/layout/styles.module.scss';

import { profile, profileImageStyle } from './styles.module.scss';

const ProfileTemplate = ({
    title,
    profileImage,
    backgroundImage,
    summary,
    work,
    twitter,
    linkedin,
    github,
    contentComponent,
}) => {
    const Summary = contentComponent || Content;

    const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : null;

    return (
        <section className={profile} style={style}>
            <header>
                <h1>{title}</h1>
                {profileImage && <Image className={profileImageStyle} image={profileImage} alt={title} />}
            </header>
            <Summary content={summary} />
            <nav>
                <Link activeClassName={active} to="/">
                    <FontAwesomeIcon className={icon} icon={faHome} fixedWidth />
                    Home
                </Link>
                <Link activeClassName={active} partiallyActive to="/blog">
                    <FontAwesomeIcon className={icon} icon={faPenAlt} fixedWidth />
                    Posts
                </Link>
                <Link activeClassName={active} partiallyActive to="/talks">
                    <FontAwesomeIcon className={icon} icon={faCommentAlt} />
                    Talks
                </Link>
                <Link activeClassName={active} partiallyActive to="/books">
                    <FontAwesomeIcon className={icon} icon={faBookReader} fixedWidth />
                    Books
                </Link>
                <Link activeClassName={active} partiallyActive to="/about">
                    <FontAwesomeIcon className={icon} icon={faUser} />
                    About
                </Link>
            </nav>
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
};

ProfileTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    profileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]),
    backgroundImage: PropTypes.string,
    summary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    work: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    contentComponent: PropTypes.func,
};

ProfileTemplate.defaultProps = {
    profileImage: null,
    backgroundImage: null,
    work: null,
    twitter: null,
    linkedin: null,
    github: null,
    contentComponent: null,
};

export default ProfileTemplate;
