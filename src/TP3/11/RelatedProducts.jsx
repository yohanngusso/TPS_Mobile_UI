import PropTypes from 'prop-types';
import './RelatedProducts.css';

export default function RelatedProducts({ products }) {
    return (
        <div className="related-products">
            <h2>Produtos Relacionados</h2>
            <div className="products-list">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img className="product-image" src={product.image} alt={product.name} />
                        <div className="product-info">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

RelatedProducts.propTypes = {
    products: PropTypes.array.isRequired
};