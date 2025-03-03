import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from '../Carousel';
import './Gallery.css';
import angkor from '../../assets/angkor-wat.jpg';
import angkor2 from '../../assets/ankgor2.jpg';
import river from '../../assets/river-scenery.jpg';
import airport from '../../assets/airport.jpg';
import museum from '../../assets/siem-museum.jpg';
import tour from '../../assets/night-tour.jpg';
import airportPickup from '../../assets/airport-pickup.jpg';
import cars from '../../assets/cars.jpg';
import nmusuem from '../../assets/national-musuem.jpg';
import oldMarket from '../../assets/old-market.jpg';
import floating from '../../assets/floating.jpg';
import banteay from '../../assets/banteay.jpg';
import tTour from '../../assets/temple-tour.jpg'

const Gallery = () => {
    const clientImages = [
        { src: angkor, alt: 'Client 1' },
        { src: museum, alt: 'Client 2' },
        // Add more images
    ];
    const clientPictures = [angkor, museum, angkor2, river, tour, airportPickup, cars, nmusuem, oldMarket, floating, banteay, airport,tTour];

    const famousPlacesImages = [
        { src: 'path/to/place1.jpg', alt: 'Place 1' },
        { src: 'path/to/place2.jpg', alt: 'Place 2' },
        // Add more images
    ];
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach((element) => {
                const speed = element.getAttribute('data-speed');
                const yPos = -(window.scrollY * speed) / 100;
                element.style.transform = `translateY(${yPos}px)`;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* <div className="gallery">
                <section className="gallery-section">
                    <h2>Client Experiences</h2>
                    <Carousel images={clientImages} />
                </section>
                <section className="gallery-section">
                    <h2>Famous Places in Cambodia</h2>
                    <Carousel images={famousPlacesImages} />
                </section>
            </div> */}
            <div className="gallery">
                <div className="background"></div>
                {clientPictures.map((picture, index) => (
                    <div key={index} className="gallery-item parallax" data-speed="5" onClick={() => handleOpen(picture)}>
                        <img src={picture} alt={`Client ${index + 1}`} className="gallery-photo" />
                    </div>
                ))}
            </div>

            
        </>


    );
};

export default Gallery;