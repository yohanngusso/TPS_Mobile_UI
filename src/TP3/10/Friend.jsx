import './Friend.css';

import PropTypes from 'prop-types';

export default function Friend({ photo, name, mutualFriends }) {
Friend.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mutualFriends: PropTypes.number.isRequired,
};
    return (
        <div className="friend">
            <img src={photo} alt={name} className="friend-photo" />
            <div className="friend-info">
                <p>{name}</p>
                <p>{mutualFriends} amigos em comum</p>
            </div>
        </div>
    );
}