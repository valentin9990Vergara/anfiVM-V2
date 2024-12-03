
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ajusta la ruta si es necesario
import Navbar from './components/Navbar';

import FestivalPeñas from './pages/FestivalPeñas';



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/festivalpeñas" element={<FestivalPeñas />} />
                
            </Routes>
            
            
        </Router>

        
    );

    
}


    
export default App;
