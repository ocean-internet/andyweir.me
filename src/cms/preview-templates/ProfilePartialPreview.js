import PropTypes from 'prop-types';
import React     from 'react';
import Profile   from '../../partials/profile/profile';

const ProfilePartialPreview = ({ entry, widgetFor }) => {

    return (
        <Profile backgroundImage={entry.getIn(['data', 'backgroundImage'])}
                 title={entry.getIn(['data', 'title'])}
                 profileImage={entry.getIn(['data', 'profileImage'])}
                 summary={widgetFor('body')}
                 work={entry.getIn(['data', 'work'])}
                 twitter={entry.getIn(['data', 'twitter'])}
                 linkedin={entry.getIn(['data', 'linkedin'])}
                 github={entry.getIn(['data', 'github'])}/>);
};

ProfilePartialPreview.propTypes = {
    entry:     PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

export default ProfilePartialPreview;
