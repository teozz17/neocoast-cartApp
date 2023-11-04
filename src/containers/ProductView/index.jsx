import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ROUTES } from "Data/constants";
import { getProduct } from "../../api/products";
import ShowElement from "Components/ShowElement";
import { MoonLoader  } from  'react-spinners'

import "./index.scss";

const ProductView = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const init = async () => {
        try {
            setLoading(true);
            const response = await getProduct(id);
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.log("ERROR ON USER FETCH");
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="product-view">
            {loading?
            <MoonLoader
            color="#ff9b00"
            size={99}
            speedMultiplier={0.7}
            cssOverride={{'marginLeft': "auto", 'marginRight': "auto", 'marginTop': "17.2%"}}
            />
            : 
            <div className="product-view">
                <div className="product-view__back">
                    <Link onClick={() => navigate(-1)}>🡸 Back </Link>
                </div>
                <div className="contenedor">
                    <ShowElement product={product} />
                </div>
            </div>}
        </div>
    );
}

export default ProductView;