import PropTypes from 'prop-types';

export const fixedObject = PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
    media: PropTypes.string,
});

export const fluidObject = PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
    media: PropTypes.string,
});
