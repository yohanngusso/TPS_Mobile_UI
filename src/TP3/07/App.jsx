import Card from './Card';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Card
                image="/src/assets/images/card.png"
                title="Instituto Infnet"
                description="O Instituto Infnet é uma instituição de ensino de alto nível e orientada ao mercado de trabalho."
                footer="R. São José, 90 - Centro, Rio de Janeiro - RJ, 20010-020"
            />
        </div>
    );
}