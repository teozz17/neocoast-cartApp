import React, { useState, useEffect } from 'react';
import ProductList from 'Components/ProductList';
import { getProducts } from '../../api/products';

import './index.scss';

const Home = () => {
  
  const [products, setProducts] = useState([]);

  const init = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("ERROR");
    }
  }

  useEffect(() => {
    init();
  }, []);

  return(
    <div className="home">
      <h1>
        Welcome to the Home Page of the React Bootcamp App
      </h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
