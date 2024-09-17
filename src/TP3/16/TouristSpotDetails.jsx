import PropTypes from 'prop-types';
import './TouristSpotDetails.css';

export default function TouristSpotDetails({ spot }) {
    if (!spot) {
        return <div className="tourist-spot-details">Selecione um ponto turístico para ver os detalhes.</div>;
    }

    return (
        <div className="tourist-spot-details">
            <h2>{spot.name}</h2>
            <p><strong>Valor:</strong> R${spot.price}</p>
            <p><strong>Informações:</strong> {spot.info}</p>
            <p><strong>Meios de Transporte:</strong> {spot.transport}</p>
        </div>
    );
}

TouristSpotDetails.propTypes = {
    spot: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        info: PropTypes.string.isRequired,
        transport: PropTypes.string.isRequired,
    }),
};