import './ProductInfo.css';

import PropTypes from 'prop-types';
import './ProductInfo.css';

export default function ProductInfo({ name, price, description, specifications }) {
    return (
        <div className="product-info">
            <h1>{name}</h1>
            <p className="price">{price}</p>
            <p className="description">{description}</p>
            <p className="specifications">{specifications}</p>
        </div>
    );
}

ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    specifications: PropTypes.string.isRequired,
};
