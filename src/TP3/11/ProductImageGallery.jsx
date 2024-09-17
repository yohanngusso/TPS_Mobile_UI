import PropTypes from 'prop-types';
import './ProductImageGallery.css';

export default function ProductImageGallery({ images }) {
    return (
        <div className="product-image-gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Imagem do produto ${index + 1}`} />
            ))}
        </div>
    );
}

ProductImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};