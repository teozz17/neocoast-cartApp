import React from "react";

import "./index.scss";

const ErrorPage = () => {
    return(
        <div className="error-page">
            <h1 className="error-page__title">404</h1>
            <p className="error__description">Page not found</p>
        </div>
    )
}

export default ErrorPage;