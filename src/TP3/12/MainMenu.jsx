import { useState } from 'react';
import './MainMenu.css';

export default function MainMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="main-menu">
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                <li>Início</li>
                <li>Vídeos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    );
}