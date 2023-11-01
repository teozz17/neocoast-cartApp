import React, { useState, useEffect } from 'react';
import ProductList from 'Components/ProductList';
import { getProducts, getProductsByCategory, getCategories } from '../../api/products';
import CategoryFilter from 'Components/CategoryFilter';
import { MoonLoader  } from  'react-spinners'


import './index.scss';

const Home = () => {
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState("All");
  const [loadingProducts, setLoadingProducts] = useState(true);

  const init = async () => {
    try {
      const response = await getCategories();
      response.data.unshift("All");
      setCategories(response.data);
    } catch (error) {
      console.log("ERROR");
    }

    setLoadingProducts(true);
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
    setLoadingProducts(false);
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
        {loadingProducts?
          <MoonLoader
            color="#ff9b00"
            size={99}
            speedMultiplier={0.7}
            cssOverride={{'marginLeft': "auto", 'marginRight': "auto" , 'marginTop': "10%"}}
          /> 
          : 
         <ProductList products={ products } /> }
    </div>
  );
};

export default Home;
