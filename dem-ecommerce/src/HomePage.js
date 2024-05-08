import React from "react";
import imageArray from "./imagearray";
import Slider from "../../project1/src/Components/Slider";
import FeaturedProducts from "../../project1/src/Components/FeaturedProduct";
import LatestProducts from "../../project1/src/Components/LatestProduct";
import Layout from "./Components/Layout/Layout";
//import './HomePage.css';

const imagesContext = require.context('./image', false, /\.(png|jpe?g|gif)$/);
const importedImages = imagesContext.keys().map(imagesContext);


const HomePage = () => {
  
  const Latest  = [
    { id: 1, name: 'Product 1', image: imageArray[4] ,category: 'Electronics', price: 99.99 },
    { id: 2, name: 'Product 2', image: imageArray[6] ,category: 'Apparel', price: 49.99 },
    { id: 3, name: 'Product 3', image: imageArray[0] ,category: 'Electronics', price: 199.99 },
    { id: 4, name: 'Product 4', image: imageArray[2] ,category: 'Home', price: 29.99 },
    { id: 5, name: 'Product 5', image: imageArray[1] ,category: 'Apparel', price: 79.99 },
    { id: 6, name: 'Product 6', image: imageArray[5] ,category: 'Apparel', price: 1000.99 }
 ];
  
 const Feature  = [
  { id: 1, name: 'Product 1', image: imageArray[4] ,category: 'Electronics', price: 99.99 },
  { id: 2, name: 'Product 2', image: imageArray[6] ,category: 'Apparel', price: 49.99 },
  { id: 3, name: 'Product 3', image: imageArray[0] ,category: 'Electronics', price: 199.99 },
  { id: 4, name: 'Product 4', image: imageArray[2] ,category: 'Home', price: 29.99 },
  { id: 5, name: 'Product 5', image: imageArray[1] ,category: 'Apparel', price: 79.99 },
  { id: 6, name: 'Product 6', image: imageArray[5] ,category: 'Apparel', price: 1000.99 }
];
  return (
   
    <Layout>
      
       <Slider images={importedImages} /> 
    
       <FeaturedProducts products={Feature}/>
      
       <LatestProducts products={Latest}/>
     
    </Layout>
    
  );
};

export default HomePage;
