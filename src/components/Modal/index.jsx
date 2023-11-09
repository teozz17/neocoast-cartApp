import React from "react";
import { ROUTES } from "Data/constants";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./index.scss";

const Modal = ({message}) => {
  return (
    <div>
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <h1>{message}</h1>
                    <Link to={ROUTES.home}>
                        <button className="btn">click here to continue</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

Modal.propTypes = {
    message: PropTypes.string,
};

export default Modal;