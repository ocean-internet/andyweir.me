import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { fluidObject } from '../../../prop-types/gatsby-image';
import { imageStyle, packerStyle, wrapperStyle } from './styles.module.scss';

export default PreviewCompatibleImage;
export const imageProp = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]);
export const ImageProp = {
    image: imageProp.isRequired,
    ratio: PropTypes.number,
    alt: PropTypes.string,
    className: PropTypes.string,
};

PreviewCompatibleImage.propTypes = ImageProp;

PreviewCompatibleImage.defaultProps = {
    ratio: 4 / 6,
    alt: '',
    className: '',
};

function PreviewCompatibleImage({ image, ratio, alt, className }) {
    try {
        const { fluid } = image.childImageSharp;

        return <Image className={className} fluid={fluid} alt={alt} />;
    } catch (e) {
        const style = {
            paddingBottom: `${(ratio * 100).toFixed(5)}%`,
        };

        return (
            <div className={`${className} ${wrapperStyle}`}>
                <div className={packerStyle} style={style} />
                <img className={imageStyle} src={image} alt={alt} />
            </div>
        );
    }
}
