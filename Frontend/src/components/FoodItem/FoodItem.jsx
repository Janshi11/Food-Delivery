import React, { useContext } from 'react';

import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const count = cartItems[id] || 0;

  const handleIncrement = () => {
    addToCart(id);
  };

  const handleDecrement = () => {
    if (count > 0) {
      removeFromCart(id);
    }
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        <div className="button-container">
          {count > 0 ? (
            <>
              <button className="decrement" onClick={handleDecrement}>-</button>
              <span className="count">{count}</span>
              <button className="increment" onClick={handleIncrement}>+</button>
            </>
          ) : (
            <button className="initial-increment" onClick={handleIncrement}>+</button>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className='food-item-price'>$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
