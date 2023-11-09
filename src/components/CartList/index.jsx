import React from 'react';
import { useNavigate } from "react-router-dom";
import CategoryButton from "Components/CategoryButton";
import PropTypes from 'prop-types';

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

CartList.propTypes = {
  carts: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          userName: PropTypes.string.isRequired,
          userLastname: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default CartList;