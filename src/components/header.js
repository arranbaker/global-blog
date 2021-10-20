import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/'><h1 className='header-title'>GLOBAL ( )</h1></Link>
        </header>
    )
}

export default Header;