import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Button = ({
    onCLick, 
    isDisabled = false, 
    name,
}) => (
        <button className="category-button"
            onClick={onCLick}
            disabled={isDisabled}
        >
            {name.toUpperCase()}
        </button>

);

Button.propTypes = {
    onCLick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
}

export default Button;