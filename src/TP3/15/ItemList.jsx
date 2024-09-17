import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Item from './Item';
import './ItemList.css';

const items = [
    "Filme 1",
    "Filme 2",
    "Filme 3",
    "Música 1",
    "Música 2",
    "Música 3",
    "Jogo 1",
    "Jogo 2",
    "Jogo 3"
];

export default function ItemList({ onMatch }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [preferences, setPreferences] = useState({});

    const handlePreference = (item, preference) => {
        setPreferences({
            ...preferences,
            [item]: preference
        });

        const nextIndex = currentIndex + 1;
        if (nextIndex < items.length) {
            setCurrentIndex(nextIndex);
        } else {
            onMatch(preferences);
        }
    };

    return (
        <div className="item-list">
            {currentIndex < items.length ? (
                <Item 
                    item={items[currentIndex]} 
                    onPreference={handlePreference} 
                />
            ) : (
                <p>Você já avaliou todos os itens.</p>
            )}
        </div>
    );
}

ItemList.propTypes = {
    onMatch: PropTypes.func.isRequired
};