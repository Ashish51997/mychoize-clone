import React from 'react';
import { FaHome, FaMobileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ReachUs = () => {
    return (
        <div>
            {/* HEAD */}
            <div className="yellow">Reach Us</div>

            {/* INFO CONTAINER */}
            <div className="infoContainer">

                {/* ADDRESS */}
                <div>
                    <FaHome className="yellow" />
                    <div className="info">
                        ORIX Auto Infrastructure Services Limited. Plot No - 94, Marol Co-operative Industrial Estate, Andheri-Kurla Road, Andheri(E), Mumbai - 400059
                    </div>
                </div>

                {/* EMAIL */}
                <div>
                    <HiOutlineMail className="yellow" />
                    <div className="info">
                        selfdrive@orixindia.com
                    </div>
                </div>

                {/* MOBILE */}
                <div>
                    <FaMobileAlt className="yellow" />
                    <div className="info">
                        95 1234 1234
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReachUs
