import React from "react";
import { ROUTES } from "../../data/constants";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./index.scss";

const NavBar = ({logo, routes}) => {
    return(
        <header className="nav-bar">
            <div className="nav-bar__logo">
                <NavLink to={ROUTES.home}>
                    <img className="image" src={logo} alt="Logo" />
                </NavLink>
            </div>
            <nav className="nav-bar__nav">
                <ul>
                    {routes.map(({label, logo, route}) => (
                        <li key={label}>
                            <NavLink
                                to={route} 
                                className={({ isActive }) => isActive && 'nav-bar__active'}>
                                {logo}
                            </NavLink>
                        </li>
                    ))}
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