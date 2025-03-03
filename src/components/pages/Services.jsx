import React, { useContext } from 'react';
import './About.css';
import './Services.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';
import { contextServices } from '../contextServices';
import ServiceCard from '../ServiceCard';
const Services = () => {
    const { services } = useContext(contextServices);


    return (
        <>
            <section className="hero container-fluid m-0">
                <div className="row about-banner">
                    <div className="col-12">
                        <h1>Welcome to Our Services</h1>
                        <p>We offer a wide range of services to meet your needs.</p>
                        <a href="#explore" className='btn btn-primary'>Learn More</a>
                    </div>
                </div>
            </section>
            {/* services section */}
            <div className="container my-4">
                <div className="row text-center ">
                    <div className="col-12 description">
                        <h2 className="text-center">Our Services</h2>
                        <h5 className="text-center">Ride with Comfort, Explore with Joy</h5>
                        <p>At TukTuk Tours, we offer a variety of services to meet your needs at reasonable prices. Whether you're exploring Angkor Wat, enjoying a cultural evening, or needing a ride to the airport, we've got you covered. Our friendly drivers and added perks like free water and towels ensure your comfort and satisfaction.</p>
                        <p>We believe in providing exceptional service with a personal touch. Our friendly and professional drivers are dedicated to making your experience enjoyable and memorable. With perks like free water, towels, and even beer on some tours, we go the extra mile to ensure your comfort and satisfaction</p>
                    </div>
                </div>
            </div>
            {/* services */}
            <div className="container" id='explore'>
                <h3 className='text-center my-3'>Explore our services below and discover why our customers leave with a smile!</h3>
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard service={service} index={index} key={`${index}`} />
                    ))}
                </div>
                <div className="row mt-3 mb-5 d-flex justify-content-end booking">
                    <div className="col-12 text-end">
                        <NavLink to={'/contact'} className="btn btn-dark">Book Now<ArrowRightAltIcon /></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;