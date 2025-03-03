import React from 'react';
import './About.css';
import aboutIntro from '../../assets/about-intro.jpg';
import teamMember1 from '../../assets/country-side.jpg'; // Add images for team members
import teamMember2 from '../../assets/about-intro.jpg';
import testimonial1 from '../../assets/about-intro.jpg'; // Add images for testimonials
import testimonial2 from '../../assets/about-intro.jpg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import MapIcon from '@mui/icons-material/Map';

const About = () => {
    const jobTitles = ["Tuk-Tuk or Van Driver & Guide Service"];
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",

    };
    const teamMembers = [
        {
            name: 'SOM',
            title: 'TukTuk driver in Cambodia',
            Experience:'12+ Years',
            photo: teamMember1
        },
        {
            name: 'Ran',
            title: 'TukTuk driver in Cambodia',
            Experience:'9+ Years',
            photo: teamMember2
        },
        {
            name: 'Mike Johnson',
            title: 'CFO',
            Experience:'9+ Years',
            photo: teamMember2
        }
    ];

    fetch("https://v1.nocodeapi.com/shaikaleem/netlify/ArELmZsbynfmYJQM/sites", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return (
        <>
            <div className="container-fluid about-banner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-text">
                            <h1>Welcome to Cambodia Tuk Tuk!</h1>
                            <p>Your trusted travel partner in Cambodia</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h2 className="text-center">About Me!</h2>
                <div className="row about-intro">
                    <div className="col-12 col-md-6 my-3">
                        <img src={aboutIntro} alt="Sokpheak" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 description">
                        <h4>Greetings from Cambodia! I'm SOKPHEAK!</h4>
                        <p>
                            I'm SOKPHEAK, but you can call me "Pheak." I live in the beautiful city of Siem Reap, Cambodia.
                            My team and I have been proudly showcasing our stunning country to tourists for many years. We
                            take immense pride in our 5-star ratings, our commitment to safety, and our exceptional customer
                            service.
                        </p>
                        <p>We would be delighted to welcome you and serve as your private drivers during your visit. Whether you prefer a Tuk Tuk, a car, or any other vehicle, we have you covered. Our services include easy and reliable airport transfers, as well as custom itineraries around Angkor Wat, Siem Reap, and other areas of Cambodia.</p>
                        <p>We are incredibly flexible—whether you have a planned itinerary or need suggestions, we can help create a custom trip plan tailored to your preferences. Let us make your visit to Cambodia an unforgettable experience!</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h2 className="text-center">Our Mission</h2>
                        <p className="text-center">To provide exceptional travel experiences that showcase the beauty and heritage of Cambodia, while ensuring the highest standards of safety and customer service.</p>
                    </div>
                </div>


            </div>
            <div className="container-fluid">
                <div className="row my-5 choose-banner  p-5">
                    <h2 className="text-center ">Why Choose Us</h2>
                    <div className="col-12">
                        <ul className="why-choose-us-list text-light">

                            <li ><span><PersonOutlineIcon /></span> Personalized and flexible service</li>
                            <li><span><SchoolIcon /></span> Experienced and knowledgeable guide</li>
                            <li><span><SecurityIcon /></span> Commitment to safety and comfort</li>
                            <li><span><StarIcon /></span> 5-star customer ratings</li>
                            <li><span><MapIcon /></span> Custom itineraries tailored to your preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* teaming section */}
            <div className="container-fluid team-section">
                <div className="container">
                    <section className="">
                        <h2>Our Team</h2>
                        <div className="team-container">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-member">
                                    <img src={member.photo} alt={`${member.name}'s photo`} className="team-photo" />
                                    <h3>{member.name}</h3>
                                    <p>{member.title}</p>
                                    <p><b>Exprience : </b>{member.Experience}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
            <div className="container-fluid">
                <div className="row my-5">
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h2 className="text-center">Customer Testimonials</h2>
                        <div className="row testimonials">
                            <div className="col-12 col-md-12 my-3">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="feedback carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='bg-dark' aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='bg-dark' aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="testimonial">
                                                <img src={testimonial1} alt="Customer 1" className="img-fluid rounded-circle" />
                                                <blockquote>"Tuk Tuk is amazing! Pheak and his team made our trip to Cambodia unforgettable."</blockquote>
                                                <p>- Happy Customer</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial">
                                                <img src={testimonial1} alt="Customer 1" className="img-fluid rounded-circle" />
                                                <blockquote>"Tuk Tuk is amazing! Pheak and his team made our trip to Cambodia unforgettable."</blockquote>
                                                <p>- Happy Customer</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial">
                                                <img src={testimonial1} alt="Customer 1" className="img-fluid rounded-circle" />
                                                <blockquote>"Tuk Tuk is amazing! Pheak and his team made our trip to Cambodia unforgettable."</blockquote>
                                                <p>- Happy Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;