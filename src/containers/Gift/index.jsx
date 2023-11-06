import React, {useState, useEffect} from 'react';
import { getCarts } from '../../api/carts';
import { getUser } from '../../api/users';
import {ROUTES } from 'Data/constants';
import { useOutletContext, Link } from 'react-router-dom';
import CartList from 'Components/CartList';
import { MoonLoader  } from  'react-spinners'

import './index.scss';
import { set } from 'immutable';

const Gift = () => {

    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reject, setReject] = useState(false);
    const actualUser = useOutletContext();

    const init = async () => {
        setLoading(true);
        setReject(false);
        try {
            const response = await getCarts();
            const res = response.data.reduce((acc, cart) => {
                            if (cart.userId != actualUser) {
                                acc.push(cart);
                            }
                            return acc;
                        }, []);
            initializeCarts(res);
        } catch (error) {
            setReject(true);
            setLoading(false);
        }
    }

    const initializeCarts = async (items) => {
        try {
            const carts = items;
            const userPromises = items.map(async (item) => {
                const response = await getUser(item.userId);
                return response;
            });
            const promises = await Promise.allSettled(userPromises);
            const users = promises.map(promise =>
                                promise.status === 'fulfilled'? 
                                    promise.value.data : 
                                    () => {throw new Error()}
                            );
            users.map ((user, index) => {
                carts[index].user = user.id;
                carts[index].userName = user.name.firstname;
                carts[index].userLastname = user.name.lastname;
            });
            setCarts(carts);
            setLoading(false);
        } catch (error) {
            setReject(true);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="gift">
            {loading? 
            <MoonLoader
                color="#ff9b00"
                size={99}
                speedMultiplier={0.7}
                cssOverride={{'marginLeft': "auto", 'marginRight': "auto", 'marginTop': "15%"}}
            />
            : reject?
            <div style={{width: '100%'}}> 
                <div className="gift__back">
                    <Link to={ROUTES.home}>🡸 Back</Link>
                </div>
                <div className='gift-error'>
                    <Error
                        color={"black"}
                        message={"Error on cart fetch, please try again"} 
                        icon={<GiRun className='home-error__icon'/>}
                    />
                </div>
            </div>
            :
            <>
            <div className="gift__back">
                    <Link to={ROUTES.home}>🡸 Back</Link>
            </div>
            <h2 className='gift__title'>Send a Gift to a Friend!!!</h2>
            <CartList carts={carts} />         
            </>}
        </div>
    );
};

export default Gift;