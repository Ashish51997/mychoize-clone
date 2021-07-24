import React from 'react';
import { Link } from 'react-router-dom';


const Availability = () => {
    const places = [
        {to: "/", name: "Bengaluru"},
        {to: "/", name: "Delhi"},
        {to: "/", name: "Mumbai"},
        {to: "/", name: "Pune"},
        {to: "/", name: "Kolkata"},
        {to: "/", name: "Ahmedabad"},
        {to: "/", name: "Jaipur"},
        {to: "/", name: "Chennai"},
        {to: "/", name: "Hyderabad"},
        {to: "/", name: "Indore"},
        {to: "/", name: "Goa"},
        {to: "/", name: "Chandigarh"},
        {to: "/", name: "Amritsar"},
        {to: "/", name: "Haridwar"},
    ];

    return (
        <div>
            {/* HEAD */}
            <div className="yellow">We Are Available Here</div>

            {/* LINKS CONTAINER */}
            <div className="linkContainer">

                {/* LINKS */}
                {
                    places.map(({to, name}) => (
                        <div className="link" key={name}>
                            <Link to={to}>Self-Drive Cars In {name}</Link>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Availability;