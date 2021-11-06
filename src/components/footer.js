import React, { useState } from "react";
import UploadForm from "./uploadForm";
import { useAuth } from "../contexts/authContext";
import Info from "./info";

const Footer = () => {

    const { userId } = useAuth();

    const [info, setInfo] = useState('0vw')

    const openInfo = () => {
        setInfo('30vw')
    }

    const closeInfo = () => {
        setInfo('0vw')
    }


    return (
        <footer>
            <ul>
                {userId !== 'guest' && <UploadForm />}
                <li>BLOG</li>
                {info === '0vw' ? <li onClick={openInfo}>INFO</li> : <li onClick={closeInfo}>CLOSE</li>}
                <Info info={info} />
            </ul>
        </footer >
    )
}

export default Footer;