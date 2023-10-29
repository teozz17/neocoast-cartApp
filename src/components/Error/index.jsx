import React from "react";

import "./index.scss";

export default ({message}) => {
    return (
        <div className="error">
            <p className="error__title">{message}</p>
        </div>
    );
}
