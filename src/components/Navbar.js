import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleCalendarClick = () => {
        console.log("Botón 'Calendario' presionado");
    };

    const handleLiveClick = () => {
        console.log("Botón 'En Vivo' presionado");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo-section" onClick={handleHomeClick}>
                <img 
                    src="/logoANFI.webp" 
                    alt="Logo ANFI"
                    className="navbar-logo"
                />
                <span className="navbar-title">ANFI Villa María</span>
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/about')}>Sobre Nosotros</li>
                <li onClick={() => navigate('/services')}>Servicios</li>
                <li onClick={() => navigate('/contact')}>Contacto</li>
            </ul>
            <div className="navbar-buttons">
                <button className="navbar-calendar-button" onClick={handleCalendarClick}>
                    📅
                </button>
                <button className="navbar-live-button" onClick={handleLiveClick}>
                🎝 En Vivo 🎝
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
