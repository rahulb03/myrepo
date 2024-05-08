import React from 'react';
import  {Routes , Route } from 'react-router-dom';
import Homepage from './HomePage';
import ProductPage from './Components/ProductPage';
import Cart from './Components/CartPage';
import Register from './Components/register';
import Login from './Components/Login';

function App() {
  
  return (
    
    <Routes>
    
    <Route path="/" element={<Homepage />} />
    <Route path="/Products" element={<ProductPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login/>} />

    </Routes>

     
   
  );
}

export default App;
