import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalQuantity } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

// Catálogo: 3 categorías con 6 plantas de interior únicas cada una
const plantsArray = [
  {
    category: 'Plantas purificadoras de aire',
    plants: [
      {
        name: 'Lengua de suegra',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produce oxígeno de noche, mejorando la calidad del aire.',
        cost: 15,
      },
      {
        name: 'Cinta',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filtra formaldehído y xileno del ambiente.',
        cost: 12,
      },
      {
        name: 'Cuna de Moisés',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'Elimina el moho de las esporas y purifica el aire.',
        cost: 18,
      },
      {
        name: 'Helecho de Boston',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'Añade humedad al aire y elimina toxinas.',
        cost: 20,
      },
      {
        name: 'Árbol del caucho',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'Fácil de cuidar y eficaz eliminando toxinas.',
        cost: 17,
      },
      {
        name: 'Aloe vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'Purifica el aire y tiene propiedades curativas.',
        cost: 14,
      },
    ],
  },
  {
    category: 'Plantas aromáticas y fragantes',
    plants: [
      {
        name: 'Lavanda',
        image:
          'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
        description: 'Aroma relajante, ideal para dormitorios.',
        cost: 20,
      },
      {
        name: 'Jazmín',
        image:
          'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
        description: 'Fragancia dulce que favorece la relajación.',
        cost: 18,
      },
      {
        name: 'Romero',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'Aroma vigorizante, muy usado en la cocina.',
        cost: 15,
      },
      {
        name: 'Menta',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'Aroma refrescante, ideal para infusiones.',
        cost: 12,
      },
      {
        name: 'Melisa',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'Aroma cítrico que alivia el estrés.',
        cost: 14,
      },
      {
        name: 'Jacinto',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'Flores vistosas con un perfume intenso.',
        cost: 22,
      },
    ],
  },
  {
    category: 'Plantas de bajo mantenimiento',
    plants: [
      {
        name: 'Zamioculca',
        image:
          'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
        description: 'Prospera con poca luz y riego ocasional.',
        cost: 25,
      },
      {
        name: 'Potos',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
        description: 'Tolera la poca luz y el riego irregular.',
        cost: 10,
      },
      {
        name: 'Aspidistra',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
        description: 'Prácticamente indestructible, tolera el descuido.',
        cost: 20,
      },
      {
        name: 'Suculentas',
        image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'Necesitan muy poca agua y mucha luz.',
        cost: 18,
      },
      {
        name: 'Aglaonema',
        image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
        description: 'Requiere poco cuidado y luce hojas decorativas.',
        cost: 22,
      },
      {
        name: 'Geranio',
        image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
        description: 'Florece todo el año con cuidados mínimos.',
        cost: 16,
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [showCart, setShowCart] = useState(false);

  // El botón se desactiva mientras la planta esté en el carrito
  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-list-page">
      {/* Barra de navegación: visible en el listado de productos y en el carrito */}
      <nav className="navbar">
        <a href="#" className="navbar-brand" onClick={handleHomeClick}>
          <img
            className="navbar-logo"
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Logo de Paradise Nursery"
          />
          <div>
            <h3>Paradise Nursery</h3>
            <i>Donde el verde se encuentra con la serenidad</i>
          </div>
        </a>

        <ul className="navbar-links">
          <li>
            <a href="#" onClick={handleHomeClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className={!showCart ? 'active' : ''} onClick={handlePlantsClick}>
              Plantas
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`cart-link ${showCart ? 'active' : ''}`}
              onClick={handleCartClick}
              aria-label={`Carrito, ${totalQuantity} artículos`}
            >
              <svg
                className="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="40"
                height="40"
              >
                <circle cx="80" cy="216" r="12" />
                <circle cx="184" cy="216" r="12" />
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              <span className="cart-count">{totalQuantity}</span>
            </a>
          </li>
        </ul>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const added = isInCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-price">${plant.cost.toFixed(2)}</div>
                      <button
                        className={`product-button ${added ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? 'Añadido al carrito' : 'Añadir al carrito'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
