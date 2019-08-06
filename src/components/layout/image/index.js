import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { fluidObject } from '../../../prop-types/gatsby-image';
import { imageStyle, packerStyle, wrapperStyle } from './styles.module.scss';

export default PreviewCompatibleImage;
export const imageProp = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]);
export const ImageProp = {
    image: imageProp.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

PreviewCompatibleImage.propTypes = ImageProp;

PreviewCompatibleImage.defaultProps = {
    alt: null,
    className: null,
};

function PreviewCompatibleImage({ image, alt, className }) {
    try {
        const { fluid } = image.childImageSharp;

        return <Image className={className} fluid={fluid} alt={alt} />;
    } catch (e) {
        return (
            <div className={wrapperStyle}>
                <div className={packerStyle} />
                <img className={imageStyle} src={image} alt={alt} />
            </div>
        );
    }
}
