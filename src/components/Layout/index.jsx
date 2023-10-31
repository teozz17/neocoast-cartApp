import React from "react";
import { Outlet } from "react-router";
import { ROUTES } from "../../data/constants";
import NavBar from "Components/NavBar";
import { BsFillCartPlusFill, BsGiftFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import "./index.scss";

const Layout = () => {

    const actualUser = JSON.parse(localStorage.getItem("userData"));

    return (
        <div className="layout">
            {(actualUser) != null ?
                <NavBar 
                    context = {actualUser}
                    logo={'https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-instagram_23-2149750724.jpg'}
                    routes={[
                        {label: 'Cart', logo: <BsFillCartPlusFill />, route: ROUTES.cart}, 
                        {label: 'Gift', logo: <BsGiftFill />, route: ROUTES.gitf}, 
                        {label: 'Progile', logo: <CgProfile />, route: ROUTES.profile},
                ]}
                />
            :   <NavBar 
                    logo={'https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-instagram_23-2149750724.jpg'}
                    routes={[]}
                />
            }
            <div className="layout__children">
                <Outlet context={actualUser}/>
            </div>
        </div>
    );
};

export default Layout;