import React from 'react';
import {FaAngleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>

            {/* HEAD */}
            <div className="yellow">About MyChoize</div>

            {/* LINKS CONTAINER */}
            <div className="linkContainer">

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Deals</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Contact</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>FAQs</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Terms & Condition</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default About;