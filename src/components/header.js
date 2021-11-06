import React from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";
import { useAuth } from "../contexts/authContext";


const Header = () => {

    const { userId } = useAuth();

    return (
        <header>
            <Link to='/'><h1 className='header-title'>GLOBAL (  )</h1></Link>
            {userId !== 'guest' && < Logout />}
        </header>
    )
}

export default Header;