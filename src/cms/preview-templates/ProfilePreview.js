import PropTypes from 'prop-types';
import React from 'react';
import ProfileTemplate from '../../partials/profile/profile-template';

export default ProfilePreview;

ProfilePreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

function ProfilePreview({ entry, widgetFor }) {
    const props = {
        backgroundImage: entry.getIn(['data', 'backgroundImage']),
        title: entry.getIn(['data', 'title']),
        profileImage: entry.getIn(['data', 'profileImage']),
        summary: widgetFor('body'),
        work: entry.getIn(['data', 'work']),
        twitter: entry.getIn(['data', 'twitter']),
        linkedin: entry.getIn(['data', 'linkedin']),
        github: entry.getIn(['data', 'github']),
    };

    return <ProfileTemplate {...props} />;
}
