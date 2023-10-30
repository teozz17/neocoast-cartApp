import React, { useState } from "react";
import { ROUTES } from "../../data/constants";
import { NavLink, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";

import "./index.scss";

const NavBar = ({logo, routes}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="nav-bar">
            <div className="nav-bar__logo">
                <Link to={ROUTES.home}>
                    <img className="image" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="nav-bar__menu" onClick={() => setMenuOpen(!menuOpen)}>
                <GiHamburgerMenu />
            </div>
            <nav className="nav-bar__nav">
                <ul className={menuOpen ? "open" : ""}>
                    {routes.map(({label, logo, route}) => (
                        <li key={label} className="icon-style">
                            <NavLink to={route} onClick={() => setMenuOpen(!menuOpen)}>
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