import React, { useState } from 'react';
import Layout from './Layout/Layout';
import './productpage.css';
import { useCart } from './CartContext';
import products from './Products';
import toast from 'react-hot-toast';

const ProductPage = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(0);
  const { addToCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const isCategoryMatching = (product, categoryFilter) => categoryFilter === 'All' || product.category === categoryFilter;
  const isPriceMatching = (product, priceFilter) => product.price >= priceFilter;

  const filteredProducts = products.filter(
    (product) => isCategoryMatching(product, categoryFilter) && isPriceMatching(product, priceFilter)
  );

  const getCartItem = (productId) => cartItems.find(item => item.id === productId);

  return (
    <Layout>
      <div className="product-page">
        <div className="filter-section">
          <label>
            Category:
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Home">Home</option>
            </select>
          </label>

          <label>
            Minimum Price:
            <input
              type="number"
              value={priceFilter}
              onChange={(e) => setPriceFilter(parseFloat(e.target.value))}
            />
          </label>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => {
            const cartItem = getCartItem(product.id);

            return (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                </div>

                <div className="button">
                 
                  {cartItem ? (
                  
                  <div className="quantity-control">
                    
                      <button
                        className="increment"
                        onClick={() => {
                          incrementQuantity(cartItem.id);
                          toast.success('Quantity increased');
                        }}
                      >  +
                     </button>

                      <span className="quantity">{cartItem.quantity}</span>
                      
                      <button
                        className="decrement"
                        onClick={() => {
                          decrementQuantity(cartItem.id);
                          if (cartItem.quantity <= 1) {
                            toast.success('Item removed from cart');
                          } else {
                            toast.success('Quantity decreased');
                          }
                        }}
                      >
                        -
                      </button>
                   
                    </div>
                  ) : (
                    
                    <button className='atc'
                      onClick={() => {
                        addToCart(product);
                        toast.success('Item added to cart');
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

