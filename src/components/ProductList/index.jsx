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

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number,
        }).isRequired,
    ),
    cart: PropTypes.bool,
};

export default ProductList;