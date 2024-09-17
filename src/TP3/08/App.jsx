import Card from './Card';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Card
                image="/src/assets/images/card.png"
                title="Título do Card"
                description="Esta é a descrição do card. Ela pode conter várias informações sobre o conteúdo do card."
                footer="Rodapé do Card"
            />
        </div>
    );
}