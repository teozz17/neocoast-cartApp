import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ROUTES } from "Data/constants";
import { getProduct } from "../../api/products";
import ShowElement from "Components/ShowElement";
import { MoonLoader  } from  'react-spinners'
import Error from 'Components/Error';
import { GiRun } from "react-icons/gi";

import "./index.scss";
import { ErrorResponse } from "@remix-run/router";

const ProductView = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [productDontExist, setProductDontExist] = useState(false);
    const [loading, setLoading] = useState(true);
    const [reject, setReject] = useState(false);

    const init = async () => {
        try {
            setLoading(true);
            const response = await getProduct(id);
            setProduct(response.data);
            let random = Math.floor(Math.random() * 10);
            if (random < 3) {
                throw new Error(505, 'Error on product fetch');
            }
            if (response.data === '') {
                throw new ErrorResponse(404, 'Product not found')
            }
            setProductDontExist(false);
            setReject(false);
        } catch (error) {
            switch (true) {
                case (error instanceof ErrorResponse):
                    setProductDontExist(true);
                    break;
                default:
                    setReject(true);
                    break;
            }
        }
        setLoading(false);
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
            cssOverride={{'marginLeft': "auto", 'marginRight': "auto", 'marginTop': "15%"}}
            />
            : reject?
            <div style={{width: "100%"}}> 
                <div className="product-view__back">
                        <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className='product-view-error'>
                    <Error
                        color={"black"}
                        message={"Error on product fetch, please try again"} 
                        icon={<GiRun className='home-error__icon'/>}
                    />
                </div>
            </div>  
            : productDontExist?
            <div style={{width: "100%"}}> 
                <div className="product-view__back">
                        <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className='product-view-error'>
                    <Error
                        color={"black"}
                        message={"Product not found"} 
                        icon={<GiRun className='home-error__icon'/>}
                    />
                </div>
            </div>  
            :
            <div style={{width: '100%'}}>
                <div className="product-view__back">
                    <Link to={ROUTES.home}>🡸 Back </Link>
                </div>
                <div className="contenedor">
                    <ShowElement product={product} />
                </div>
            </div>}
        </div>
    );
}

export default ProductView;