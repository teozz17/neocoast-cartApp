import React from "react";

import "./index.scss";

const Login = () => {

  return (
    <div className="login">
        <form className="login-form">
            <input className="login-form__input" type="input" placeholder="Email" />
            <input className="login-form__input" type="password" placeholder="Password" />
            <button className="login-form__button">Login</button>
        </form>
    </div>
  )
}   

export default Login;