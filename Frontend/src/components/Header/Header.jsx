import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h3>Order Your Favourite Food Here</h3>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
        <button>Menu Details</button>
      </div>
      <img src={assets.header_img1} alt="Header" className='header-img' />
    </div>
  );
};

export default Header;
