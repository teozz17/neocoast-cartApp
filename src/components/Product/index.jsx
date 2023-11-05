import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.scss";

const Product = ({product}) => {
        
    const {id, title, image, price, quantity} = product;

    return(
        <div>
            {!quantity &&
            <div className="product"> 
                <Link to={`/product/${id}`} className="link">
                    <img className="product__image" src={image} alt={title} />
                    <h3 className="product__title">{title}</h3>
                    <p className="product__price">${price}</p>
                </Link>
            </div>}
            {quantity &&
            <div className="cart">
                <div className="cart-product">
                    <img className="cart-product__image" src={image} alt={title} />
                    <div className="cart-product__container">
                        <p className="cart-product__title">{title}</p>
                        <p className="cart-product__price">Price: ${price}</p>
                        <p className="cart-product__price">Quantity: {quantity}</p>
                        <p className="cart-product__price">Total: ${price * quantity}</p>
                    </div>
                </div>
            </div>}
        </div>
)}



export default Product;

