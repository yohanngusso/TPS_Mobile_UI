import { useState } from 'react';
import ItemList from './ItemList';
import MatchResults from './MatchResults';
import './App.css';

function App() {
    const [showResults, setShowResults] = useState(false);
    const [, setPreferences] = useState({});

    const handleMatch = (preferences) => {
        setPreferences(preferences);
        setShowResults(true);
    };

    return (
        <div className="App">
            {showResults ? (
                <MatchResults />
            ) : (
                <ItemList onMatch={handleMatch} />
            )}
        </div>
    );
}

export default App;