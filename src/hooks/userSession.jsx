import userSessionStore from "../states/userSessionStore.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const userSession = () => {
    const navigate = useNavigate();

    const {
        data,
        getSession,
        error,
        getIsLoggedIn,
    } = userSessionStore();


    useEffect(() => {
        getSession();

        if(!getIsLoggedIn()) {
            console.log(getIsLoggedIn(),getSession());
            console.log(error);
            window.location.assign('/');
        }
    }, [getSession,getIsLoggedIn]);


    return {
        data,
        getIsLoggedIn
    }
};

export default userSession;