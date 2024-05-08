import React from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useCart } from '../CartContext'; 
import './Header.css';

const Header = () => {
  const { cartItems } = useCart(); 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); 

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <GiShoppingBag className="logo-icon" />
          <span className="logo-text">Ecommerce Store</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
           
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
            <li className="nav-item cart-link">
              
              <Link to="/cart">
                <FaShoppingCart className="cart-icon" />
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span> 
                )}
              </Link>
            </li>
           
            <li className="nav-item"><Link to="/login">Login</Link></li>
            <li className="nav-item"><Link to="/register">Register</Link></li>
        
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
