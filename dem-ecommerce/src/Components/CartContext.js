import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
       
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
        
        if (existingProductIndex !== -1) {
          
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += 1;
            setCartItems(updatedCartItems);
        
        } else {
            setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
