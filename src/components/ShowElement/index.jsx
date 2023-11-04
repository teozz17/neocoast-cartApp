import React, { useEffect, useState } from "react";

import "./index.scss";

const ShowElement = ({ user, product }) => {    

    const {email, phone, username, address, name} = user || {};
    const {firstname, lastname} = name || {};
    const {street, number, city, zipcode} = address || {};

    const {title, description, price, category, image, rating} = product || {};
    const {rate, count} = rating || {};

    return (
        <div className="show-element">
            <div className="first-container"> 
               {user && <img className="user-image" src={`https://robohash.org/${firstname} ${lastname}.jpg?set=set5`} alt={username} title={username} />}
               {product && <img className="product-image" src={image} alt={title} title={title} /> }
                <div className="first-container__title">
                    {user && <h1 name="username" className="first-container__userOrTitle">
                        Username: <span className="first-container__name">{username}</span>
                    </h1>}
                    {user && <h1 name="email" className="first-container__userOrTitle">
                        Email: <span className="first-container__name">{email}</span>
                    </h1>}
                    {product && <h1 name="title" className="first-container__product">
                        <span className="first-container__name">{title}</span>
                    </h1>}
                    {product && <h1 name="category" className="first-container__product__rating">
                        <span style={{color: '#E9B824'}}>★ {rate}</span> 
                        <span style={{color: "gray", fontSize: "15px"}}> ({count} votes)</span>
                    </h1>}
                    {product && <h1 name="description" className="first-container__product">
                        <span className="first-container__name">{description}</span>
                    </h1>}
                    {product && <div className="first-container__product__category-price"> 
                        <h1 name="category" className="first-container__product">
                            <span className="first-container__name__category">{category}</span>
                        </h1>
                        <h1 name="price" className="first-container__product">
                            <span className="first-container__name__price">${price}</span>
                        </h1> 
                    </div>}

                </div>
            </div> 
            {user && <div className="first-container__title second">
                <div className="first-container__title">
                    <h1 name="name" className="first-container__userOrTitle">
                        Name: <span className="first-container__name">{firstname} {lastname}</span>
                    </h1>
                    <h1 name="phone" className="first-container__userOrTitle">
                        Phone: <span className="first-container__name">{phone}</span>
                    </h1>
                    <h1 name="phone" className="first-container__userOrTitle">
                        City: <span className="first-container__name">{city}</span>
                    </h1>
                    <h1 name="phone" className="first-container__userOrTitle">
                        Street: <span className="first-container__name">{street} {number}</span>
                    </h1>
                    <h1 name="phone" className="first-container__userOrTitle">
                        Zip-Code: <span className="first-container__name">{zipcode}</span>
                    </h1>
                </div>
            </div>}
        </div>
    );
};

export default ShowElement;