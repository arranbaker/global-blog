import React, { useState } from "react";
import ImageGallery from "../components/imageGallery";
import AlbumGallery from "../components/albumGallery";

const Dashboard = () => {

    const [albumId, setAlbumId] = useState('')
    const [gallery, setGallery] = useState(false)

    const openGallery = (event) => {
        setGallery(true)
        setAlbumId(`${event.target.id}`)
    }

    const closeGallery = () => {
        setGallery(false)
    }

    return (
        <>
            <AlbumGallery openGallery={openGallery} />
            {gallery === true && <ImageGallery closeGallery={closeGallery} albumId={albumId} />}
        </>
    )
}

export default Dashboard;