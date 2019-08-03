import PropTypes from 'prop-types';
import React from 'react';
import Profile from '../../partials/profile/profile';

const ProfilePartialPreview = ({ entry, widgetFor }) => {

    console.log(widgetFor('body'));

    const props = {
        title: entry.getIn(['data', 'title']),
        profileImage: entry.getIn(['data', 'profileImage']),
        backgroundImage: entry.getIn(['data', 'backgroundImage']),
        content: widgetFor('body'),
        work: entry.getIn(['data', 'work']),
        twitter: entry.getIn(['data', 'twitter']),
        linkedin: entry.getIn(['data', 'linkedin']),
        github: entry.getIn(['data', 'github']),
    };

    return <Profile {...props} />;
};

ProfilePartialPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

export default ProfilePartialPreview;
