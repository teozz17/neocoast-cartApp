import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.scss";

const Product = ({product}) => {
        
    return(
        <div className="product">
            <Link to={`/product/${product.id}`} className="link">
                <img className="product__image" src={product.image} alt={product.title} />
                <h3 className="product__title">{product.title}</h3>
                <p className="product__price">${product.price}</p>
            </Link>
        </div>
)}



export default Product;

