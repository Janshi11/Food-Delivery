import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo1} alt="logo" className='logo' /> </Link>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to='/'>Home</Link></li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("MobileApp")} className={menu === "MobileApp" ? "active" : ""}>MobileApp
        </li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}><Link to ="/Footer">Comtact US</Link></li>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <Link to='/Cart'><img src={assets.basket_icon} alt="cart" /> </Link>
          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
