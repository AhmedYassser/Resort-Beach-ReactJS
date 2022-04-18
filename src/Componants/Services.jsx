import React, { useState } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";


export const Services = () => {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            Address: "Free Cocktails",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaHiking />,
            Address: "Endless Hiking",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaShuttleVan />,
            Address: "Free Shuttle",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaBeer />,
            Address: "Strongest Beer",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ]);

    return (
        <section className="services">
            <Title title='services' />
            <div className="services-center">
                {services.map((item, index) => {
                    const { icon, Address, info } = item
                    return <article key={index} className="service">
                        <span>{icon}</span>
                        <h6>{Address}</h6>
                        <p>{info}</p>
                    </article>

                })}
            </div>
        </section>
    )
}
