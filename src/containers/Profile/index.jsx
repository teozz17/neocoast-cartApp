import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "Data/constants";
import { getUser } from "../../api/users";
import ShowElement from "Components/ShowElement";
import { MoonLoader  } from  'react-spinners'

import index from "./index.scss";

const Profile = () => {

    const actualUser = useOutletContext();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const init = async () => {
        try {
            setLoading(true);
            const response = await getUser(actualUser);
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            console.log("ERROR ON USER FETCH");
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
                    cssOverride={{'marginLeft': "auto", 'marginRight': "auto" , 'marginTop': "16.2%"}}
                />
            : 
                <ShowElement user={user}/>
            }
        </div>
    )
};


export default Profile;