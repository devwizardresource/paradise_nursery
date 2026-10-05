import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  // Botón "Comenzar" de la página de aterrizaje: lleva al listado de productos
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Enlace "Inicio" del navbar: vuelve a la página de aterrizaje
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Bienvenido a Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Donde el verde se encuentra con la serenidad</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Comenzar
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
