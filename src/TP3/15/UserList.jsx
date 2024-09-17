import './UserList.css';
import PropTypes from 'prop-types';

export default function UserList({ users }) {
    return (
        <div className="user-list">
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - Afinidade: {user.affinity}%
                    </li>
                ))}
            </ul>
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};