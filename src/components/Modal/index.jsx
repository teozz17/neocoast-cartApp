import React from "react";
import { ROUTES } from "Data/constants";
import { Link } from "react-router-dom";

import "./index.scss";

export default () => {
  return (
    <div>
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <h1>Thank you for your purchase!</h1>
                    <Link to={ROUTES.home}>
                        <button className="btn">click here to continue</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}