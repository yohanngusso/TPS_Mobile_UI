import PropTypes from 'prop-types';
import './SelectedSpots.css';

export default function SelectedSpots({ selectedSpots }) {
    const totalPrice = selectedSpots.reduce((total, spot) => total + spot.price, 0);

    return (
        <div className="selected-spots">
            <h2>Pontos Turísticos Selecionados</h2>
            <ul>
                {selectedSpots.map((spot, index) => (
                    <li key={index}>
                        {spot.name} - R${spot.price}
                    </li>
                ))}
            </ul>
            <p><strong>Valor Total:</strong> R${totalPrice}</p>
        </div>
    );
}

SelectedSpots.propTypes = {
    selectedSpots: PropTypes.array.isRequired,
};