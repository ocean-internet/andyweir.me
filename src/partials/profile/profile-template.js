import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import {
    X as CloseIcon,
    Home as HomeIcon,
    PenTool as PostIcon,
    MessageSquare as TalkIcon,
    BookOpen as BookIcon,
    User as MeIcon,
    Briefcase as WorkIcon,
    Twitter as TwitterIcon,
    Linkedin as LinkedinIcon,
    GitHub as GithubIcon,
} from 'react-feather';
import Content from '../../components/layout/content';
import Image from '../../components/layout/image';
import { fluidObject } from '../../prop-types/gatsby-image';
import * as styles from './styles.module.scss';

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

    const className = showMenu ? `${styles.show} ${styles.profile}` : styles.profile;
    return (
        <section className={className} style={style}>
            <CloseIcon className={styles.close} onClick={toggleMenu} />
            <Link to="/">
                <header>
                    <h1>{title}</h1>
                    {profileImage && <Image className={styles.profileImage} image={profileImage} alt={title} />}
                </header>
            </Link>
            <Summary content={summary} />
            <nav className={styles.pageNav}>
                <Link activeClassName={styles.active} to="/" onClick={toggleMenu}>
                    <HomeIcon className={styles.textIcon} />
                    Home
                </Link>
                <Link activeClassName={styles.active} partiallyActive to="/blog" onClick={toggleMenu}>
                    <PostIcon className={styles.textIcon} />
                    Posts
                </Link>
                <Link activeClassName={styles.active} partiallyActive to="/talks" onClick={toggleMenu}>
                    <TalkIcon className={styles.textIcon} />
                    Talks
                </Link>
                <Link activeClassName={styles.active} partiallyActive to="/books" onClick={toggleMenu}>
                    <BookIcon className={styles.textIcon} />
                    Books
                </Link>
                <Link activeClassName={styles.active} partiallyActive to="/about" onClick={toggleMenu}>
                    <MeIcon className={styles.textIcon} />
                    About
                </Link>
            </nav>
            <nav className={styles.socialNav}>
                {work && (
                    <a href={`https://twitter.com/${work}`}>
                        <WorkIcon className={styles.icon} title={work} />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`}>
                        <TwitterIcon className={styles.icon} title={twitter} />
                    </a>
                )}
                {linkedin && (
                    <a href={`https://linkedin.com/in/${linkedin}`}>
                        <LinkedinIcon className={styles.icon} title={linkedin} />
                    </a>
                )}
                {github && (
                    <a href={`https://github.com/${github}`}>
                        <GithubIcon className={styles.icon} title={github} />
                    </a>
                )}
            </nav>
        </section>
    );
}
