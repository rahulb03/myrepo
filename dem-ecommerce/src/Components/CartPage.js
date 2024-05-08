import React from 'react';
import Layout from './Layout/Layout';
import { useCart } from './CartContext';

import './CartPage.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 

  return (
    <Layout>
      <h2 className='head'>Shopping Cart</h2>
      <div className="cart-page">
        {totalItems === 0 ? (
          <p className='head'>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3 className="product-name">{item.name}</h3>
                    <p>${(item.price * item.quantity).toFixed(2)} 
                    <p>({item.quantity} pcs)</p>
                    </p> 
                  </div>
                  <div className="remove">
                  <button onClick={() => removeFromCart(item.id)}>Remove</button> 
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
