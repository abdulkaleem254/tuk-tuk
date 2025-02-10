import { createBrowserRouter, NavLink } from "react-router-dom"
import "./Home.css"
import react, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardPromo from "../CardPromo";
import cityTour from '../../assets/city-tour.jpg';
import countrySide from '../../assets/country-side.jpg';
import templeTour from '../../assets/temple-tour.jpg';
import scenery from '../../assets/river-scenery.jpg';
import nightTour from '../../assets/night-tour.jpg';
import culinaryHeritage from '../../assets/culinary-heritage.jpg';
import intro from '../../assets/intro.jpg';
import Gallery from "./Gallery";
import GalleryCarousel from "../GalleryCarousel";
import FormTukTuk from "../FormTukTuk";

const Home = () => {
    const [services, setServices] = useState([
        {
            title: "City Tours",
            description: "Explore the vibrant streets of Phnom Penh, Siem Reap, and other major cities. Our city tours offer a unique perspective on urban life, historical landmarks, and cultural hotspots.",
            highlights: ["Royal Palace", "National Museum", "local markets"],
            duration: "Half-day or full-day",
            image: cityTour
        },
        {
            title: "Countryside Excursions",
            description: "Escape the hustle and bustle of the city and enjoy the serene beauty of Cambodia’s countryside. Visit traditional villages, lush rice paddies, and scenic landscapes.",
            highlights: ["Village visits", "local crafts", "picturesque views"],
            duration: "Full-day trips available",
            image: countrySide
        },
        {
            title: "Temple Tours",
            description: "Discover the ancient wonders of Cambodia with our temple tours. Visit the iconic Angkor Wat, Bayon Temple, Ta Prohm, and other historical sites.",
            highlights: ["Intricate carvings", "grand architecture", "overgrown ruins"],
            duration: "Full-day or multi-day",
            image: templeTour
        },
        {
            title: "Custom Tours",
            description: "Tailor your adventure to suit your interests and schedule. Mix of everything, we can create a custom itinerary just for you.",
            highlights: ["Personalized experiences based on your preferences"],
            duration: "Flexible",
            image: scenery
        },
        {
            title: "Night Tours",
            description: "Experience the magic of Cambodia after dark. Our night tours take you to the best spots for nightlife, dining, and entertainment.",
            highlights: ["Night markets", "local eateries", "cultural performances"],
            duration: "Evening tours available",
            image: nightTour
        },
        {
            title: "Culinary Tours",
            description: "Explore Cambodian cuisine through local markets, street food stalls, and renowned restaurants. Learn about the country's heritage.",
            highlights: ["Cooking classes", "food tastings", "market visits"],
            duration: "Half-day or full-day",
            image: culinaryHeritage
        }

    ])

    const carouselItems = [nightTour, scenery, culinaryHeritage];
    return (
        <>
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-content">
                            <h1>Cambodia Tuk-Tuk Adventure</h1>
                            <p>Start your engines. We’re going to Cambodia.</p>
                            <div className="banner-buttons">
                                <NavLink to={'/contact'}><button className="enquire-btn">ENQUIRE</button></NavLink>
                                <button className="brochure-btn">DOWNLOAD OUR BROCHURE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* body content */}
            {/* Intro Section */}
            <section>
                <div className="container">
                    <h2 className="text-center mb-3">About Us</h2>
                    <div className="row mt-5 intro">
                        <div className="col-12 col-md-6">
                            <h2 className="about-title pt-3">
                                Welcome to the Cambodia Tuk-Tuk Adventure
                            </h2>
                            <p className="about-description">
                                Welcome to the Cambodia Tuk-Tuk Adventure! Embark on a thrilling 900km journey through Cambodia in an iconic Indian-made Tuk-Tuk. Experience the vibrant streets of Phnom Penh, the serene countryside, and quaint villages. Feel the warm breeze and immerse yourself in the rich tapestry of Cambodian life. This adventure is perfect for thrill-seekers and those looking to connect deeply with the culture and people of Cambodia.                        </p>
                            <p>Don't miss out on this unforgettable journey. Sign up now and create memories that will last a lifetime.</p>
                            <NavLink to='/about'>
                                <Button variant="outlined" className="mt-2" size="medium">
                                    Learn more
                                </Button>
                            </NavLink>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={intro} className="intro-image" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* services section */}
            <section id="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <p className="description">Discover our diverse range of services designed to make your Cambodia adventure unforgettable. From city tours to countryside excursions, temple visits, and custom itineraries, we have something for every traveler.</p>
                    <div className="row">
                        {services.map((service, index) => {
                            return (
                                <CardPromo key={index} service={service} />
                            )
                        })}

                    </div>
                </div>
            </section>

            {/* Gallery section */}

            <section>
                <GalleryCarousel title="Journey Through Cambodia"
                    description="Experience the beauty of Cambodia through our photo carousel. Explore stunning landscapes, 
            vibrant cityscapes, and cultural landmarks." list={carouselItems} />
            </section>


            {/* Contact Us */}
            <section>
                <FormTukTuk />
            </section>

        </>
    )
}
export default Home;