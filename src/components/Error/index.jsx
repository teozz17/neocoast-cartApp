import React from "react";
import PropTypes from 'prop-types';

import "./index.scss";

export default ({message, color, size, width, height, icon}) => {
    const style = {
        color: color,
        fontSize: size,
        width: width,
        height: height
    }   
    return (
        <div className="error">
            <p className="error__title" style={style}>{message}</p>
            <div>{icon}</div>
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    icon: PropTypes.element,
};


