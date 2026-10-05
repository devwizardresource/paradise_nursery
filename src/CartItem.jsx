import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectTotalQuantity } from './CartSlice';
import './CartItem.css';

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();

  // Importe total de todas las plantas del carrito
  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  // Coste total de un tipo de planta (precio unitario × cantidad)
  const calculateTotalCost = (item) => item.cost * item.quantity;

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('¡Próximamente! El pago estará disponible muy pronto.');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Al bajar de 1 la planta se elimina del carrito
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total-amount">
        Importe total del carrito: {formatCurrency(calculateTotalAmount())}
      </h2>
      <h3 className="cart-total-quantity">
        Número total de plantas: <span>{totalQuantity}</span>
      </h3>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío. ¡Añade algunas plantas!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Precio unitario: {formatCurrency(item.cost)}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Disminuir cantidad de ${item.name}`}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Aumentar cantidad de ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: {formatCurrency(calculateTotalCost(item))}
                </div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continuar comprando
        </button>
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
