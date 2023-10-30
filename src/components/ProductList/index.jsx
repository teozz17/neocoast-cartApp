import React from "react";
import PropTypes from "prop-types";
import Product from "Components/Product";

import "./index.scss";

const ProductList = ({
    products = [],
}) => {

    return(
        <div className="product-list">
            {products.map((product) => (
                <Product
                    key= {product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductList;