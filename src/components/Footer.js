import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} ANFI Villa María. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
