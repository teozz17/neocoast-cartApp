import React from "react";
import { Outlet } from "react-router";
import { ROUTES } from "../../data/constants";
import NavBar from "Components/NavBar";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsGiftFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import "./index.scss";

const Layout = () => {
    return (
        <div className="layout">
            <NavBar 
                logo={'https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-instagram_23-2149750724.jpg'}
                routes={[
                    {label: 'Cart', logo: <BsFillCartPlusFill className='icon-style'/>, route: ROUTES.cart}, 
                    {label: 'Gift', logo: <BsGiftFill className='icon-style'/>, route: ROUTES.gitf}, 
                    {label: 'Progile', logo: <CgProfile className='icon-style'/>, route: ROUTES.profile},
                ]}
            />
            <div className="layout__children">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;