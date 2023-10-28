import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";

import getUsers from '../../api/users';

import "./index.scss";

const Login = () => {

const {register, handleSubmit} = useForm();

const [users, setUsers] = useState([]); 

const init = async () => {
    const users = await getUsers();
    console.log(users);
    setUsers(users);
}

useEffect(() => {
    init();
}, []);

const onSubmit = (data, e) => console.log(data);

  return (
    <div className="login">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="login-title">Cart App</h1>
            <input
                {...register ("email", {required: true})} 
                className="login-form__input" 
                type="email" 
                placeholder="Enter your email" />
            <input
                {...register ("password", {required: true})} 
                className="login-form__input" 
                type="password" 
                placeholder="Enter your password" />
            <button type="submit" className="login-form__button">Login</button>
        </form>
        
        <div className="wave" ></div>
    </div>
  )
}   

export default Login;