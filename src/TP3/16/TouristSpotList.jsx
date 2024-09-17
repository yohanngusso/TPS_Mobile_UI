import TouristSpotItem from './TouristSpotItem';
import PropTypes from 'prop-types';
import './TouristSpotList.css';

const touristSpots = [
    { id: 1, name: "Ponto Turístico 1", price: 50, info: "Informações sobre o ponto turístico 1", transport: "Ônibus, Táxi" },
    { id: 2, name: "Ponto Turístico 2", price: 30, info: "Informações sobre o ponto turístico 2", transport: "Metrô, Táxi" },
    // Adicione mais pontos turísticos aqui
];

export default function TouristSpotList({ onSelectSpot }) {
    // Prop validation
    TouristSpotList.propTypes = {
        onSelectSpot: PropTypes.func.isRequired,
    };

    return (
        <div className="tourist-spot-list">
            <h2>Pontos Turísticos</h2>
            <ul>
                {touristSpots.map((spot) => (
                    <TouristSpotItem key={spot.id} spot={spot} onSelectSpot={onSelectSpot} />
                ))}
            </ul>
        </div>
    );
}
