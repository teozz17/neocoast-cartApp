import React from "react";

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
