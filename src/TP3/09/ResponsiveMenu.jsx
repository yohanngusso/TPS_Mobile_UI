import { useState } from 'react';
import './ResponsiveMenu.css';

export default function ResponsiveMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="menu-container">
            <div className="menu-logo">
                <img src="/src/assets/images/logo.png" alt="Logo" className="logo-image" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>Serviços</li>
                <li>Produtos</li>
                <li>Sobre nós</li>
                <li>Contatos</li>
            </ul>
        </nav>
    );
}