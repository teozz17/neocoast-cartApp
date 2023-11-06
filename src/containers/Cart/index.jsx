import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext, Link } from "react-router-dom";
import { ROUTES } from "Data/constants";
import { getUserCart, setUserCart, getUserCartByCartId } from "../../api/carts";
import { getProduct } from "../../api/products";
import { MoonLoader  } from  'react-spinners'
import Error from 'Components/Error';
import { GiRun } from "react-icons/gi";
import { FaSadCry } from "react-icons/fa";
import ProductList from "Components/ProductList";
import Modal from "Components/Modal";

import "./index.scss";

const Cart = () => {

    const { id }  = useParams();
    const logged = id == null;
    const actualUser = useOutletContext();
    const navigate = useNavigate();
    const [cartId, setCartId] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);
    const [reject, setReject] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const init = async () => {
        try {
            setReject(false);
            setLoading(true);
            let response = [];
            if (!logged) { 
                response = await getUserCartByCartId(id);
            } else {
                response = await getUserCart(actualUser);
            }
            if (response.data == null) {
                setEmpty(true);
                throw new Error();
            };
            let specifiedCart = response.data;
            if (logged) {
                specifiedCart = response.data.reduce((acc, me) => acc.date > me.date ? acc : me);
            };
            setCartId(specifiedCart.id);
            initializeProducts(specifiedCart.products);
        } catch (error) {
            setLoading(false);
            setReject(true);
        }
    }

    const initializeProducts = async (items) => {
        try {
            const productPromises = items.map(async (item) => {
                const response = await getProduct(item.productId);
                return response;
            });
            const promises = await Promise.allSettled(productPromises);
            const products = promises.map(promise =>
                                promise.status === 'fulfilled'? 
                                    promise.value.data : 
                                    () => {throw new Error()}
                            );
            products.map((product, index) => {
                product.quantity = items[index].quantity;
            });
            setProducts(products);
        } catch (error) {
            setLoading(false);
            setReject(true);
        }
        setLoading(false);
    }

    const buyCart = () => {
        setModalOpen(!modalOpen);
        setUserCart(cartId);
    }

    useEffect(() => {
        actualUser == null? 
            navigate(ROUTES.home)
        :
            init();
    }, [id]);

    return (
        <div className="cart">
            {loading?
                <MoonLoader
                    color="#ff9b00"
                    size={99}
                    speedMultiplier={0.7}
                    cssOverride={{'marginLeft': "auto", 'marginRight': "auto", 'marginTop': "15%"}}
                />
            : empty?
            <div style={{width: '100%'}}> 
                <div className="cart__back">
                    <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className='cart-error'>
                    <Error
                        color={"black"}
                        message={"This cart does not exists 😢"} 
                        icon={<FaSadCry className='home-error__icon'/>}
                    />
                </div>
            </div>
            : reject?
            <div style={{width: '100%'}}> 
                <div className="cart__back">
                    <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className='cart-error'>
                    <Error
                        color={"black"}
                        message={"Error on cart fetch, please try again"} 
                        icon={<GiRun className='home-error__icon'/>}
                    />
                </div>
            </div>
            :
            <div className="cart">                
                <div className="cart__back">
                    <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className="cart-container">
                    {logged && <span className="cart-container__title">OWN CART</span>}
                    {!logged && <span className="cart-container__title">FRIEND'S CART</span>}
                    <div className="container__second">
                        <div className={logged? "products-container" : 'products-container__not-logged'}>
                            <ProductList products={products} cart={true}/>    
                        </div>
                        <div className={modalOpen? "modal-open" : "modal-closed"}>
                            <Modal/>
                        </div>
                        {logged && <button className="cart-container__button" onClick={() => buyCart()}>Buy Cart</button>}
                        {!logged && <button className="cart-container__button" onClick={() => buyCart()}>Send Gift</button>}
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cart;