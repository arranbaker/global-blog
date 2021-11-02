import React from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory } from "react-router-dom";

const Logout = () => {

    const { logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        await logout()
        history.push('/login')
    }

    return (
        <button className='logout-button' type='button' onClick={handleLogout}>Logout</button>
    )
}

export default Logout;