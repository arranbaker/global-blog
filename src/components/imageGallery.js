import React, { useState } from "react";
import { imageData } from "./imageData";

const ImageGallery = ({ closeGallery, albumId }) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const galleryLength = imageData.find(selectedGallery => selectedGallery.folder === albumId)

    const selectedGalleryLength = galleryLength.images.length

    const nextSlide = () => {
        if (slideIndex !== selectedGalleryLength) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === selectedGalleryLength) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(selectedGalleryLength)
        }
    }

    return (
        <div className='gallery-container'>
            <div className='gallery-container-close-btn' onClick={closeGallery}>X</div>
            <div className='gallery-slider-container'>
                <div className='left-arrow arrow' onClick={prevSlide}>&lt;</div>
                {imageData.map((gallery, galleryIndex) => {
                    if (gallery.folder === albumId)
                        return (
                            <div className='image-gallery-container' key={galleryIndex} id={gallery.id}>
                                {gallery.images.map((slide, index) => {
                                    return (
                                        <div className={slideIndex === index + 1 ? 'image-container-active image-container' : 'image-container'} key={slide.id}>
                                            <img src={process.env.PUBLIC_URL + `img/${gallery.folder}/img${index + 1}.jpg`} alt=' ' />
                                            <div className='image-info-container'>
                                                <ul>
                                                    <li><span className='bold'>Location</span>: {slide.location}</li>
                                                    <li><span className='bold'>Year</span>: {slide.year}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                })}
                <div className='right-arrow arrow' onClick={nextSlide}>&gt;</div>
            </div>
        </div >
    )
}

export default ImageGallery;