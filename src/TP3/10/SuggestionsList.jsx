import Suggestion from './Suggestion';
import './SuggestionsList.css';

export default function SuggestionsList() {
    const suggestions = [
        {
            id: 1,
            photo: '/src/assets/images/suggestion1.jpg',
            name: 'Sugestão 1',
            mutualFriend: 'Amigo Comum 1'
        },
    ];

    return (
        <div className="suggestions-list">
            <h2>Sugestões de Amizade</h2>
            {suggestions.map(suggestion => (
                <Suggestion key={suggestion.id} {...suggestion} />
            ))}
        </div>
    );
}