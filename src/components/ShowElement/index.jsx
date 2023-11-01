import React, { useEffect, useState } from "react";

import "./index.scss";

const ShowElement = ({ user, product }) => {    

    const {email, phone, username, address, name} = user || {};
    const {firstname, lastname} = name || {};
    const {street, number, city, zipcode} = address || {};

    

    return (
        <div className="show-element">
            <div className="first-container">
                <img src={`https://robohash.org/${firstname} ${lastname}.jpg?set=set5`}/>  
                <div className="first-container__title">
                    <h1 name="username" className="first-container__userOrTitle">
                        Username: <span className="first-container__name">{username}</span>
                    </h1>
                    <h1 name="email" className="first-container__userOrTitle">
                        Email: <span className="first-container__name">{email}</span>
                    </h1>
                </div>
            </div>
            <div className="first-container__title">
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
            </div>
        </div>
    );
};

export default ShowElement;