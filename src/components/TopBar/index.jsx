// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const TopBar = ({ logo, routes }) => (
  <header className="top-bar">
    <div className="top-bar__logo">
      {typeof logo === 'string' ? (
        <img src={logo} alt="Logo" />
      ) : (
        logo
      )}
    </div>
    <nav className="top-bar__nav">
      <ul>
        {routes.map((route) => (
          <li key={route.label}>
            <Link to={route.route}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

TopBar.propTypes = {
  logo: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.element]
  ).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopBar;
