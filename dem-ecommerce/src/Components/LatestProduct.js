import React from 'react';
import { useCart } from './CartContext';
import './feast.css';
import toast from 'react-hot-toast';

function LatestProduct({ products }) {
  const { addToCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const getCartItem = (productId) => cartItems.find((item) => item.id === productId);

  return (
    <>
    <div className="latest">
      <h1>Latest Products</h1>
    </div>

      <div className="single-line-products">
        {products.map((product) => {
          const cartItem = getCartItem(product.id);

          return (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="np">
                <h2 className="product-name">{product.name}</h2>
                <p>{product.price}</p>
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
                    >
                      +
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
                  <button
                    className="atc"
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
    </>
  );
}

export default LatestProduct;
