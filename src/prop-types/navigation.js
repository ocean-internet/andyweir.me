import PropTypes from 'prop-types';

export const PrevNextProp = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    dateString: PropTypes.string,
};
