import React from 'react';
import './About.css';
import './Services.css';
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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';
const Services = () => {
    const services = [
        {
            title: "Angkor Wat Full Day Ride",
            price: "$28",
            perks: ["Free Water & Towels"],
            location: "Angkor Area",
            image: angkor
        },
        {
            title: "Angkor Wat Half Day Ride",
            price: "$15",
            perks: ["Free Water & Towels"],
            location: "Angkor Area",
            image: angkor2
        },
        {
            title: "Half Day Ride - Create your own tour",
            price: "$20",
            perks: ["Free water"],
            location: "Half Day",
            image: river
        },
        {
            title: "Airport Pick Up",
            price: "$5",
            perks: ["Free one Scarf (Krama)"],
            location: "Hotel in Siem Reap",
            image: airport
        },
        {
            title: "Siem Reap War Museum",
            price: "$5",
            perks: ["Siem Reap War Museum Tour"],
            location: "Pick up from Hotel",
            image: museum
        },
        {
            title: "Full Day Tour - Create your own tour",
            price: "$60",
            perks: ["Customize your tour"],
            location: "",
            image: tour
        },
        {
            title: "Airport Pick Up/Drop Off",
            price: "$5 ($10 for both)",
            perks: ["Airport Pick Up/Drop Off"],
            location: "",
            image: airportPickup
        },
        {
            title: "Air-Conditioned Car Half Day",
            price: "$40",
            perks: ["Free water"],
            location: "Siem Ramp",
            image: cars
        },
        {
            title: "National Museum",
            price: "$5 pick-up/drop off ($10 for both)",
            perks: ["Free water"],
            location: "Siem Reap",
            image: nmusuem
        },
        {
            title: "Old Market",
            price: "$4 pick-up/drop off ($8 for both)",
            perks: ["Guide"],
            location: "Siem Reap",
            image: oldMarket
        },
        {
            title: "Floating Markets Tour",
            price: "$25",
            perks: ["Guide"],
            location: "Siem Reap",
            image: floating
        },
        {
            title: "Banteay Srei",
            price: "$30 Tuk Tuk ($50 by Car)",
            perks: ["Free water"],
            location: "Siem Reap",
            image: banteay
        }
    ];

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
                        <div className="col-12 col-md-3 my-2" key={index}>
                            <div className="card">
                                <div className="card-front" style={{ backgroundImage: `url(${service.image})` }}>
                                    <div className="overlay">
                                        <div>
                                            <h2>{service.title}</h2>
                                            <p><b>Price :</b>{service.price}</p>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h6>{service.title}</h6>
                                        <p><b>Price </b>: {service.price}</p>
                                        {service.perks.length > 0 && <ul>
                                            <b>Perks </b>:
                                            {service.perks.map((perk, i) => (
                                                <li key={i}><i className="fas fa-check-circle"></i> {perk}</li>
                                            ))}
                                        </ul>}
                                        <p><b>Location </b> : {service.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-3 mb-5 d-flex justify-content-end booking">
                    <div className="col-12 text-end">
                        <NavLink to={'/contact'} className="btn btn-dark"><ArrowRightAltIcon/>Book Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;