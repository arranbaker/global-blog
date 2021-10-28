import React from "react";
import { imageData } from "./imageData";

const AlbumGallery = ({ openGallery }) => {

    return (
        <div className='album-gallery-container'>
            <h2 className='album-cards-title'>ALBUMS</h2>
            <div className="album-cards">
                {imageData.map((card, cardIndex) => {
                    return (
                        <div id={card.folder} style={{ backgroundImage: `url(${card.coverImage})` }} className="card" onClick={openGallery} key={cardIndex}>
                            <div id={card.folder} className='info-container'>
                                <h2 id={card.folder}>{card.title}</h2>
                                {/*<p id={card.folder}>{card.description}</p>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}


export default AlbumGallery;