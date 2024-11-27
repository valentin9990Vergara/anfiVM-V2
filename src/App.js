// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ajusta la ruta si es necesario
import Navbar from './components/Navbar';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Agrega otras rutas aquí si es necesario */}
            </Routes>
            
        </Router>
    );
}

export default App;
