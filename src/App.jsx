import { useState } from 'react';
import './App.css';

const linksTP1 = [
    { href: "src/TP1/01/index.html", text: "TP 1.1" },
    { href: "src/TP1/02/index.html", text: "TP 1.2" },
    { href: "src/TP1/03/index.html", text: "TP 1.3" },
    { href: "src/TP1/04/index.html", text: "TP 1.4" },
    { href: "src/TP1/05/index.html", text: "TP 1.5" },
    { href: "src/TP1/06/index.html", text: "TP 1.6" },
    { href: "src/TP1/07/index.html", text: "TP 1.7" },
    { href: "src/TP1/08/index.html", text: "TP 1.8" },
    { href: "src/TP1/09/index.html", text: "TP 1.9" },
    { href: "src/TP1/10/index.html", text: "TP 1.10" },
    { href: "src/TP1/11/index.html", text: "TP 1.11" },
    { href: "src/TP1/15/index.html", text: "TP 1.15" },
    { href: "src/TP1/16/index.html", text: "TP 1.16" },
];

const linksTP2 = [
    { href: "src/TP2/01/index.html", text: "TP 2.1" },
    { href: "src/TP2/02/index.html", text: "TP 2.2" },
    { href: "src/TP2/03/index.html", text: "TP 2.3" },
    { href: "src/TP2/04/index.html", text: "TP 2.4" },
    { href: "src/TP2/05/index.html", text: "TP 2.5" },
    { href: "src/TP2/06/index.html", text: "TP 2.6" },
    { href: "src/TP2/07/index.html", text: "TP 2.7" },
    { href: "src/TP2/08/index.html", text: "TP 2.8" },
    { href: "src/TP2/09/index.html", text: "TP 2.9" },
    { href: "src/TP2/10/index.html", text: "TP 2.10" },
    { href: "src/TP2/11/index.html", text: "TP 2.11" },
    { href: "src/TP2/12/index.html", text: "TP 2.12" },
    { href: "src/TP2/13/index.html", text: "TP 2.13" },
    { href: "src/TP2/14/index.html", text: "TP 2.14" },
    { href: "src/TP2/15/index.html", text: "TP 2.15" },
    { href: "src/TP2/16/index.html", text: "TP 2.16" },
];

const linksTP3 = [
    { href: "src/TP3/01/index.html", text: "TP 3.1" },
    { href: "src/TP3/02/index.html", text: "TP 3.2" },
    { href: "src/TP3/03/index.html", text: "TP 3.3" },
    { href: "src/TP3/04/index.html", text: "TP 3.4" },
    { href: "src/TP3/05/index.html", text: "TP 3.5" },
    { href: "src/TP3/06/index.html", text: "TP 3.6" },
    { href: "src/TP3/07/index.html", text: "TP 3.7" },
    { href: "src/TP3/08/index.html", text: "TP 3.8" },
    { href: "src/TP3/09/index.html", text: "TP 3.9" },
    { href: "src/TP3/10/index.html", text: "TP 3.10" },
    { href: "src/TP3/11/index.html", text: "TP 3.11" },
    { href: "src/TP3/12/index.html", text: "TP 3.12" },
    { href: "src/TP3/13/index.html", text: "TP 3.13" },
    { href: "src/TP3/14/index.html", text: "TP 3.14" },
    { href: "src/TP3/15/index.html", text: "TP 3.15" },
    { href: "src/TP3/16/index.html", text: "TP 3.16" },
];

export default function App() {
    const [selectedTP, setSelectedTP] = useState('TP1');

    const links = selectedTP === 'TP1' ? linksTP1 : (selectedTP === 'TP2' ? linksTP2 : linksTP3);

    return (
        <main>
            <h1>Teste De Perfomance</h1>
            <div>
                <button className="tp-button" onClick={() => setSelectedTP('TP1')}>TP1</button>
                <button className="tp-button" onClick={() => setSelectedTP('TP2')}>TP2</button>
                <button className="tp-button" onClick={() => setSelectedTP('TP3')}>TP3</button>
            </div>
            <ul className="link-list">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}