import React, { useState, useEffect } from 'react';
import ProductList from 'Components/ProductList';
import { getProducts, getProductsByCategory, getCategories } from '../../api/products';
import CategoryFilter from 'Components/CategoryFilter';
import { MoonLoader  } from  'react-spinners'
import Error from 'Components/Error';
import { PiSmileySad } from "react-icons/pi";
import { GiRun } from "react-icons/gi";

import './index.scss';

const Home = () => {
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState("All");
  const [loadingProducts, setLoadingProducts] = useState(true);

  const init = async () => {

    setLoadingProducts(true);
    const promesasResueltas = await Promise.allSettled(
      [ actualCategory === 'All'? 
        getProducts() : 
        getProductsByCategory(actualCategory) , 
        getCategories()
      ])

    if (promesasResueltas[0].status != "rejected" ) {
      setProducts(promesasResueltas[0].value.data);
      setLoadingProducts(false);
    } else {
      console.log("ERROR ON PRODUCTS FETCH");
    } 

    if (promesasResueltas[1].status != "rejected" ) {
      promesasResueltas[1].value.data.unshift("All","TTGL");
      setCategories(promesasResueltas[1].value.data);
    } else {
      console.log("ERROR ON CATEGORIES FETCH");
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
        {loadingProducts?
          <MoonLoader
            color="#ff9b00"
            size={99}
            speedMultiplier={0.7}
            cssOverride={{'marginLeft': "auto", 'marginRight': "auto" , 'marginTop': "10%"}}
          /> 
          : 
            products.length === 0 ? 
            <div className='home-error'>
              <Error
                color={"black"}
                message={"Unfortunately there aren't any products for this category"} 
                icon={<PiSmileySad className='home-error__icon'/>}
              />   
            </div>
          : 
            <ProductList 
              products={ products } 
            /> 
          }
    </div>
  );
};

export default Home;
