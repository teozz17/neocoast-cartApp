import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { ROUTES } from "Data/constants";
import { getUser } from "../../api/users";
import ShowElement from "Components/ShowElement";
import { MoonLoader  } from  'react-spinners'
import Error from 'Components/Error';
import { GiRun } from "react-icons/gi";

import "./index.scss";

const Profile = () => {

    const actualUser = useOutletContext();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reject, setReject] = useState(false);

    const init = async () => {
        try {
            setLoading(true);
            const response = await getUser(actualUser);
            setUser(response.data);
            setLoading(false);
            let random = Math.floor(Math.random() * 10);
            if (random < 3){
                throw new Error();
            }
            setReject(false);
        } catch (error) {
            setReject(true);
        }
    
    }

    useEffect(() => {
        if(actualUser == null) navigate(ROUTES.home);
        init();
    }, []);


    return (
        <div className="profile">
            {loading?
                <MoonLoader
                    color="#ff9b00"
                    size={99}
                    speedMultiplier={0.7}
                    cssOverride={{'marginLeft': "auto", 'marginRight': "auto", 'marginTop': "15%"}}
                />
            : reject?
            <div style={{width: '100%'}}> 
                <div className="profile__back">
                        <Link onClick={() => navigate(-1)}>🡸 Back</Link>
                </div>
                <div className='profile-error'>
                    <Error
                        color={"black"}
                        message={"Error on profile fetch, please try again"} 
                        icon={<GiRun className='home-error__icon'/>}
                    />
                </div>
            </div>  
            :
            <div className="profile">
                <div className="profile__back">
                    <Link onClick={() => navigate(-1)}>🡸 Back</Link>
                </div>
                <h2 className='profile__title'>Profile</h2>
                <ShowElement user={user}/>
            </div>
            }
        </div>
    )
};


export default Profile;