import React, { useState } from "react";
import { ROUTES } from "../../data/constants";
import { NavLink, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";

import "./index.scss";

const NavBar = ({context, logo, routes, title}) => {

    const actualUser = context;
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="nav-bar">
            <div className="nav-bar__logo">
                <Link to={ROUTES.home}>
                    <img className="image" src={logo} alt="Logo" title="Home"/>
                </Link>
            </div>
            <div className="nav-bar__menu" onClick={() => setMenuOpen(!menuOpen)}>
                <GiHamburgerMenu title="Menu"/>
            </div>
            <nav className="nav-bar__nav">
                <ul className={menuOpen ? "open" : ""}>
                    {routes.map(({label, logo, route, title}) => (
                        <li key={label} className="icon-style">
                            <NavLink to={route} title={title} onClick={() => setMenuOpen(!menuOpen)}>
                                <span className="label-style">{label}</span>
                                {logo}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        {actualUser != null ?
                            <Link className="icon-style__log" to={ROUTES.login}>
                                <span className="label-style">Logout</span>
                                <HiOutlineLogout onClick={() => {
                                    localStorage.clear()
                                }}
                                title="Logout"
                                />
                            </Link>
                        :   <Link className="icon-style__log" to={ROUTES.login}>
                                <HiOutlineLogin 
                                title="Login"
                                />
                            </Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
};

NavBar.propTypes = {
    logo: PropTypes.string.isRequired, 
    routes: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          logo: PropTypes.element.isRequired,
          route: PropTypes.string.isRequired,
        })
      ).isRequired,
};

export default NavBar;