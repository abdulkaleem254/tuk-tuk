import { createContext, useState } from "react";
import angkor from '../assets/angkor-wat.jpg';
import angkor2 from '../assets/ankgor2.jpg';
import river from '../assets/river-scenery.jpg';
import airport from '../assets/airport.jpg';
import museum from '../assets/siem-museum.jpg';
import tour from '../assets/night-tour.jpg';
import airportPickup from '../assets/airport-pickup.jpg';
import cars from '../assets/cars.jpg';
import nmusuem from '../assets/national-musuem.jpg';
import oldMarket from '../assets/old-market.jpg';
import floating from '../assets/floating.jpg';
import banteay from '../assets/banteay.jpg';
const contextServices = createContext();

const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([
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
    ])
    return (
        <contextServices.Provider value={{services}}>
            {children}
        </contextServices.Provider>
    )
}
export {ServiceProvider, contextServices}