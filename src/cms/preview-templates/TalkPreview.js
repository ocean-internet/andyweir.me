import PropTypes             from 'prop-types';
import React                 from 'react';
import TalkTemplate from '../../templates/talk-template';

const TalkPreview = ({ entry, widgetFor }) => (
    <TalkTemplate title={entry.getIn(['data', 'title'])}
                  summary={entry.getIn(['data', 'summary'])}
                  youtube={entry.getIn(['data', 'youtube'])}
                  content={widgetFor('body')}/>);

TalkPreview.propTypes = {
    entry:     PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

export default TalkPreview;
