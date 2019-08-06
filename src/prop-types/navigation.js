import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const PrevNextProp = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    dateString: PropTypes.string,
};
