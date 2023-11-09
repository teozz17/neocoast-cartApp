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
  const [rejectedProducts, setRejectedProducts] = useState(false);

  const init = async () => {

    try {
      const response = await getCategories();
      response.data.unshift("All", "TTGL"); //TTGL (Tengen Toppa Gurren-Lagann) es una categoria que no existe, pero la puse para mostrar que pasaria si no hay productos
      setCategories(response.data);
    } catch (error) {
    }

    setLoadingProducts(true);
    if (actualCategory === "All") {
      try {
        const response = await getProducts();
        setProducts(response.data);
        let random = Math.floor(Math.random() * 10);
        if (random < 3){
          throw new Error();
        }
        setRejectedProducts(false);
      } catch (error) {
        setRejectedProducts(true);
      }
    } else {
      try {
        const response = await getProductsByCategory(actualCategory);
        setProducts(response.data);
        let random = Math.floor(Math.random() * 10);
        if (random < 3){
          throw new Error();
        }
        setRejectedProducts(false);
      } catch (error) {
        setRejectedProducts(true);
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
        {loadingProducts?
          <MoonLoader
            color="#ff9b00"
            size={99}
            speedMultiplier={0.7}
            cssOverride={{'marginLeft': "auto", 'marginRight': "auto" , 'marginTop': "15%"}}
          />
          : rejectedProducts?
            <>
            <CategoryFilter 
              categories={ categories } 
              setActualCategory={ handleCategory } 
              actualCategory={ actualCategory } 
              />
            <div className='home-error'>
              <Error
                color={"black"}
                message={"Error on products fetch, please try again"} 
                icon={<GiRun className='home-error__icon'/>}
                />
            </div>
              </>
            :
            products.length === 0 ?
            <>
            <CategoryFilter 
              categories={ categories } 
              setActualCategory={ handleCategory } 
              actualCategory={ actualCategory } 
            />
            <div className='home-error'>
              <Error
                color={"black"}
                message={"Unfortunately there aren't any products for this category"} 
                icon={<PiSmileySad className='home-error__icon'/>}
                />   
            </div>
            </>
          : 
            <>
            <CategoryFilter 
              categories={ categories } 
              setActualCategory={ handleCategory } 
              actualCategory={ actualCategory } 
            />
            <ProductList 
              products={ products } 
              /> 
            </>}
    </div>
  );
};

export default Home;
