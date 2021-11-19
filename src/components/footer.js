import React, { useState } from "react";
import UploadForm from "./uploadForm";
import { useAuth } from "../contexts/authContext";
import Info from "./info";

const Footer = () => {

    const { userId } = useAuth();

    const [info, setInfo] = useState('0vw')
    const [content, setContent] = useState('0')

    const openInfo = () => {
        setInfo('40vw')
        setContent('1')
    }

    const closeInfo = () => {
        setInfo('0vw')
        setContent('0')
    }

    return (
        <footer>
            <ul>
                {userId !== 'guest' && <li className='upload-button'><UploadForm /></li>}
                <li className='li-blog'>BLOG</li>
                {info === '0vw' ? <li onClick={openInfo}>INFO</li> : <li onClick={closeInfo}>CLOSE</li>}
                <Info info={info} content={content} />
            </ul>
        </footer >
    )
}

export default Footer;