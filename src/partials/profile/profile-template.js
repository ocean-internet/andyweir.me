import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    faBriefcase,
    faBookReader,
    faCommentAlt,
    faHome,
    faPenAlt,
    faUser,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';
import { fluidObject } from '../../prop-types/gatsby-image';
import { icon } from '../../components/layout/styles.module.scss';
import {
    closeStyle,
    show,
    profile,
    profileImageStyle,
    pageNavStyle,
    socialNavStyle,
    active,
} from './styles.module.scss';

export default ProfileTemplate;
ProfileTemplate.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
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
function ProfileTemplate({
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
}) {
    const Summary = contentComponent || Content;

    const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : null;

    const className = showMenu ? `${show} ${profile}` : profile;
    return (
        <section className={className} style={style}>
            <FontAwesomeIcon className={closeStyle} icon={faTimes} fixedWidth onClick={toggleMenu} />
            <header>
                <h1>{title}</h1>
                {profileImage && <Image className={profileImageStyle} image={profileImage} alt={title} />}
            </header>
            <Summary content={summary} />
            <nav className={pageNavStyle}>
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
            <nav className={socialNavStyle}>
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
