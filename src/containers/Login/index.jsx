import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../data/constants";
import Error from '../../components/Error';
import { getUsers } from '../../api/users';

import "./index.scss";

const Login = () => {

const {register, formState: { errors }, handleSubmit} = useForm();
const navigate = useNavigate();
const actualUser = JSON.parse(localStorage.getItem("userData"));

const [users, setUsers] = useState([]); 
const [flag, setFlag] = useState(false);

const init = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
}

useEffect(() => {
    if(actualUser != null) navigate(ROUTES.home);
    init();
}, []);

const onSubmit = (data) => {
    const user = users.find(user => user.email.toLowerCase() === data.email.toLowerCase() && user.password === data.password);
    if (user === undefined) {
        setFlag(true);
    } else{
        localStorage.setItem("userData", JSON.stringify(user));
        navigate(ROUTES.home);
    }
};

  return (
    <div className="login">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {flag && <Error message="⚠ User not found"/>}
            {}
            <Link to={ROUTES.home}>
                <h1 className="login-form__title">Cart App</h1>
            </Link>
            <input onChangeCapture={() => setFlag(false)}
                {...register ("email", {required: "⚠ This field is required!!!"})} 
                className="login-form__input" 
                type="text" 
                placeholder="Enter your email" 
            />
            <ErrorMessage errors={errors} name="email" as={<p className="login-form__error"></p>}/>
            <input
                {...register ("password", {required: "⚠ This field is required!!!"})} 
                className="login-form__input" 
                type="password" 
                placeholder="Enter your password" 
            />
            <ErrorMessage errors={errors} name="password" as={<p className="login-form__error"></p>}/>
            <button type="submit" className="login-form__button">Login</button>
        </form>
        <div className="wave" ></div>
    </div>
  )
}   

export default Login;