import React from 'react';
import {FaAngleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (
        <div>

            {/* HEAD */}
            <div className="yellow">Quick Links</div>

            {/* LINKS CONTAINER */}
            <div className="linkContainer">

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Home</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>About Us</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Blogs</Link>
                </div>

                {/* LINK */}
                <div className="link">
                    <FaAngleRight/> <Link to='/'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks;