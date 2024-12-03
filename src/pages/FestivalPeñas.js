import React from 'react';
import Footer from '../components/Footer';
import './FestivalPeñas.css';

function FestivalPeñas() {
    return (
        <div className="festival-peñas">

                <h1 className="festival-title">Festival de Peñas</h1>
            
            <div className="festival-content">
                <p>
                    Bienvenido al Festival de Peñas, el evento cultural más importante de Villa María. ¡No te lo pierdas!
                </p>
            </div>
            <Footer /> {/* Footer siempre en el flujo, al final */}
        </div>
    );
}

export default FestivalPeñas;
