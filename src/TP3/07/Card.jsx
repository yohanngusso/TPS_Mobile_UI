import './Card.css';
import PropTypes from 'prop-types';

export default function Card({ image, title, description, footer }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-footer">{footer}</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.node.isRequired,
};