
import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import './style/componentsSCSS/carousel.scss'

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">

            <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
            />
            <div className='btn'>
            <MdArrowBackIos onClick={prevSlide} />
            <MdArrowForwardIos onClick={nextSlide} />
            </div>
            <div className="counter">{`${currentImageIndex + 1} / ${images.length}`}</div>
        </div>
    );
};

export default Carousel;
