import React from 'react';
import { useNavigate } from "react-router-dom";
import CategoryButton from "Components/CategoryButton";

import './index.scss';

const CartList = ({ carts }) => {

    const navigate = useNavigate();
    const length = carts.length;

  return (
    <div className="cart-list2">
       {length > 0 && 
        <ul>
            {carts.map((cart) => (
                    <li key={cart.id}>
                        <div className='cart2'>
                            <img src={`https://robohash.org/${cart.userName} ${cart.userLastname}.jpg?set=set5`} alt={cart.userName} title={cart.userName} />
                            <h3>{cart.userName} {cart.userLastname}</h3> 
                            <p>Cart Number: {cart.id}</p>
                            <CategoryButton onCLick={() => navigate(`/cart/${cart.id}`)} name='Go To Cart'/>
                        </div>
                    </li>
            ))}
        </ul>}
        {length === 0 && <h1 style={{fontFamily: 'monospace', fontSize: '40px'}}>There are no carts available 😢</h1>}
    </div>
  );
};

export default CartList;