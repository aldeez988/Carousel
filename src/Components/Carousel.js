import React from 'react';
import './app.css'
const Carousel = (props) => {
    return (
        <div class="carousel__image-container">
            <img id="js-image-carousel" src={props.imageSrc} />
        </div>
    )
};


export default Carousel;