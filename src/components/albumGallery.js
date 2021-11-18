import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import HorizontalScroll from "react-scroll-horizontal";
import { useAuth } from "../contexts/authContext";
import useRemove from "../hooks/useRemove";

const AlbumGallery = () => {

    const { userId } = useAuth();

    const { files } = useFirestore(`${userId}/folder/images`);

    const child = { width: `auto` }
    const parent = { width: `100vw` }
    const [removeUrl, setRemoveUrl] = useState('')
    const [removeId, setRemoveId] = useState('')

    const removeImage = (event) => {
        setRemoveId(event.target.id)
        setRemoveUrl(event.target.title)
    }

    useRemove(removeUrl, removeId)


    return (

        <div className='album-gallery-container' style={parent}>
            {files.length === 0 ? <h2 className='album-cards-title'>ADD IMAGES</h2> : <h2 className='album-cards-title'>START SCROLLING</h2>}
            <HorizontalScroll reverseScroll={true}>
                <div className="album-cards-container container" style={child}>
                    {files && files.map((card, cardIndex) => {
                        console.log(card)
                        return (
                            <div className='card-container blocks' key={cardIndex}>
                                {<img id={card.id} src={card.url} className="card" alt={card.name} />}
                                {card.id !== '' && <div className='delete-image-button' id={card.id} title={card.url} style={{ display: `${deleteButton}` }} onClick={removeImage}>DELETE</div>}
                            </div>
                        )
                    })}
                </div>
            </HorizontalScroll>
        </div >
    )
}

export default AlbumGallery;