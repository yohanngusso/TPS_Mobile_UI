import { useState } from 'react';
import TouristSpotList from './TouristSpotList';
import TouristSpotDetails from './TouristSpotDetails';
import SelectedSpots from './SelectedSpots';
import './App.css';

function App() {
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [selectedSpots, setSelectedSpots] = useState([]);

    const handleSelectSpot = (spot) => {
        setSelectedSpot(spot);
        setSelectedSpots([...selectedSpots, spot]);
    };

    return (
        <div className="App">
            <TouristSpotList onSelectSpot={handleSelectSpot} />
            <TouristSpotDetails spot={selectedSpot} />
            <SelectedSpots selectedSpots={selectedSpots} />
        </div>
    );
}

export default App;