import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './pages/Gallery.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                    <img src={image.src} alt={image.alt} className="carousel-image" />
                </motion.div>
            ))}
        </Slider>
    );
};

export default Carousel;