import { useContext, useState } from "react";
import "./contact.css";
import { contextServices } from "../contextServices";
const Contact = () => {

    const [selectedService, setSelectedService] = useState('');
    const { services } = useContext(contextServices);


    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Service: ${selectedService}\nName: ${event.target.name.value}\nEmail: ${event.target.email.value}\nMessage: ${event.target.message.value}`);
        const whatsappMessage = `Name: ${event.target.name.value}\nEmail: ${event.target.email.value} \nMessage: ${event.target.message.value} `;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+918106268423&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    };

    const selectedServiceDetails = services.find(service => service.title === selectedService);


    return (
        <div className="contact-us-container container my-5">
            <div className="row contacting">
                <div className="col-12 col-md-6">
                    <div className="contact-us-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Select Service:</label>
                                <select id="service" value={selectedService} onChange={handleServiceChange} required>
                                    <option value="">--Select a Service--</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service.title}>{service.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-6 details">
                    {selectedServiceDetails && (
                        <div className="contact-us-details lead">
                            <h4 className="pb-2">{selectedServiceDetails.title}</h4>
                            <img src={selectedServiceDetails.image} alt={selectedServiceDetails.title} />
                            <div className="row">
                                <div className="col-12 col-md-6"><p className="lead">Price: {selectedServiceDetails.price}</p></div>
                                <div className="col-12 col-md-6"><p>Location: {selectedServiceDetails.location}</p></div>

                            </div>



                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Contact;