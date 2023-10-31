import React, { useState, useEffect } from 'react';
import ProductList from 'Components/ProductList';
import { getProducts, getProductsByCategory, getCategories } from '../../api/products';
import CategoryFilter from 'Components/CategoryFilter';

import './index.scss';

const Home = () => {
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState("All");

  const init = async () => {
    getTheCategories();
    getTheProducts();
  }

  const getTheCategories = async () => {
    try {
      const response = await getCategories();
      response.data.unshift("All");
      setCategories(response.data);
    } catch (error) {
      console.log("ERROR");
    }
  }

  const getTheProducts = async () => {
    if (actualCategory === "All") {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.log("ERROR");
      }
    } else {
      try {
        const response = await getProductsByCategory(actualCategory);
        setProducts(response.data);
      } catch (error) {
        console.log("ERROR");
      }
    }
  }

  const handleCategory = (category) => {
    setActualCategory(category);
  }

  useEffect(() => {
    init();
  } , [actualCategory]);

  return(
    <div className="home">
        <CategoryFilter 
          categories={ categories } 
          setActualCategory={ handleCategory } 
          actualCategory={ actualCategory } 
        />
      <ProductList products={ products } />
    </div>
  );
};

export default Home;
