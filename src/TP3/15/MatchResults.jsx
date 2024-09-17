import UserList from './UserList';
import './MatchResults.css';

const users = [
    { name: "Usuário 1", affinity: 90 },
    { name: "Usuário 2", affinity: 80 },
    { name: "Usuário 3", affinity: 70 }
];

export default function MatchResults() {
    return (
        <div className="match-results">
            <h2>Resultados de Afinidade</h2>
            <UserList users={users} />
        </div>
    );
}