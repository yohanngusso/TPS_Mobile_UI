import './TouristSpotItem.css';
import PropTypes from 'prop-types';

export default function TouristSpotItem({ spot, onSelectSpot }) {
    return (
        <li className="tourist-spot-item" onClick={() => onSelectSpot(spot)}>
            {spot.name}
        </li>
    );
}

TouristSpotItem.propTypes = {
    spot: PropTypes.object.isRequired,
    onSelectSpot: PropTypes.func.isRequired
};