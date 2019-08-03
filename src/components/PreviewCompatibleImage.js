import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { fluidObject } from '../prop-types/gatsby-image';

export default PreviewCompatibleImage;

PreviewCompatibleImage.propTypes = {
    image: PropTypes.oneOf([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};
PreviewCompatibleImage.defaultProps = {
    alt: null,
    className: null,
};

function PreviewCompatibleImage({ image, alt, className }) {
    const { fluid } = image || {};

    if (!!fluid) {
        return <Image className={className} fluid={fluid} alt={alt} />;
    } else if (!!image && typeof image === 'string') {
        return <img className={className} src={image} alt={alt} />;
    }
}
