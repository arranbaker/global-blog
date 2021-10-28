import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul>
                <Link to={'/blog'}><li>BLOG</li></Link>
                <Link to={'/info'}><li>INFO</li></Link>
            </ul>
        </footer >
    )
}

export default Footer;