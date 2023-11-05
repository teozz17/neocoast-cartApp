import React from "react";
import PropTypes from "prop-types";
import Product from "Components/Product";

import "./index.scss";

const ProductList = ({
    products = [],
    cart = false,
}) => {

    return(
        <div className={cart? "product-cart-list" : "product-list"}>
            {products?.map((product) => (
                <Product
                    key= {product?.id}
                    product={product}
                    quantity={product?.quantity}
                />
            ))}
        </div>
    );
}

export default ProductList;