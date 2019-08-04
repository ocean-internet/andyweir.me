import Image           from 'gatsby-image';
import PropTypes       from 'prop-types';
import React           from 'react';
import { fluidObject } from '../../prop-types/gatsby-image';
import { packerStyle, imageStyle }         from './styles.module.scss';

export default PreviewCompatibleImage;

PreviewCompatibleImage.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ fluid: fluidObject })]).isRequired,
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
        return <div className={className} style={{position:'relative', overflow: 'hidden'}}>
            <div className={packerStyle}></div>
            <img className={imageStyle} src={image} alt={alt} />
        </div>;
    }
}
