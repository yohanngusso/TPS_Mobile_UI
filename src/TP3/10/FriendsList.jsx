import Friend from './Friend';
import './FriendsList.css';

export default function FriendsList() {
    const friends = [
        {
            id: 1,
            photo: '/src/assets/images/friend1.jpg',
            name: 'Amigo 1',
            mutualFriends: 5
        },
        // Adicione mais amigos conforme necessário
    ];

    return (
        <div className="friends-list">
            <h2>Amigos</h2>
            {friends.map(friend => (
                <Friend key={friend.id} {...friend} />
            ))}
        </div>
    );
}