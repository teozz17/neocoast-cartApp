import React, {useState, useEffect} from "react";

import getUsers from '../../api/users';

import "./index.scss";

const Login = () => {

const [users, setUsers] = useState([]); 

const init = async () => {
    const users = await getUsers();
    console.log(users);
    setUsers(users);
}

useEffect(() => {
    init();
}, []);


  return (
    <div className="login">
        <form className="login-form">
            <h1 className="login-title">Cart App</h1>
            <input className="login-form__input" type="email" placeholder="Email" />
            <input className="login-form__input" type="password" placeholder="Password" />
            <button className="login-form__button">Login</button>
        </form>
    </div>
  )
}   

export default Login;