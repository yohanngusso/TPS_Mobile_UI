import Header from './Header';
import MainMenu from './MainMenu';
import Feed from './Feed';
import FriendsList from './FriendsList';
import SuggestionsList from './SuggestionsList';
import './App.css';

export default function App() {
    return (
        <div className="container">
            <Header />
            <MainMenu />
            <Feed />
            <FriendsList />
            <SuggestionsList />
        </div>
    );
}