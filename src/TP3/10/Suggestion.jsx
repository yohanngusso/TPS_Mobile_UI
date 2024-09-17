import './Suggestion.css';
import PropTypes from 'prop-types';

export default function Suggestion({ photo, name, mutualFriend }) {
    return (
        <div className="suggestion">
            <img src={photo} alt={name} className="suggestion-photo" />
            <div className="suggestion-info">
                <p>{name}</p>
                <p>Amigo em comum: {mutualFriend}</p>
            </div>
        </div>
    );
}

Suggestion.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mutualFriend: PropTypes.string.isRequired
};