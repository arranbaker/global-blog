import React from "react";
import useFirestore from "../hooks/useFirestore";
import HorizontalScroll from "react-scroll-horizontal";
import { useAuth } from "../contexts/authContext";

const AlbumGallery = () => {

    const { userId } = useAuth();

    const { files } = useFirestore(`${userId}/folder/images`);

    const child = { width: `auto` }
    const parent = { width: `100vw` }


    return (

        <div className='album-gallery-container' style={parent}>
            <h2 className='album-cards-title'>START SCROLLING</h2>
            <HorizontalScroll reverseScroll={true}>
                <div className="album-cards-container container" style={child}>
                    {files && files.map((card, cardIndex) => {
                        console.log(card)
                        return (
                            <div className='card-container blocks' key={cardIndex}>
                                {<img id={card.folder} src={card.url} className="card" alt={card.name} />}
                            </div>
                        )
                    })}
                </div>
            </HorizontalScroll>
        </div >
    )
}

export default AlbumGallery;