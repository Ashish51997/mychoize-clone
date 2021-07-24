import React from 'react';
import Place from './Place';
import styled from 'styled-components';

const Available = styled.div`
    padding: 1% 5%;

    & .head {
        padding: 2% 0;
        font-weight: 700;
        border-bottom: 1px solid lightgray;

        @media (max-width: 650px) {
            font-size: 120%;
        }
    }

    & > .placeContainer {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;

        @media (max-width: 950px) {
            grid-template-columns: 33.33% 33.33% 33.33%;
        }

        @media (max-width: 750px) {
            grid-template-columns: 50% 50%;
        }

        @media (max-width: 450px) {
            grid-template-columns: 100%;
        }
    }
`;

const AvailablePlaces = () => {
    const places = [
        {
            name: "DELHI-NCR",
            address: "DELHI-NCR 71/2 D, Rama Road, Najafgarh Road Industrial Area, Moti Nagar, New Delhi, Delhi 110015"
        },
        {
            name: "MUMBAI",
            address: "Plot No - 94, Marol Co-operative, Industrial Estate, Andheri-Kurla Road"
        },
        {
            name: "PUNE",
            address: "B-Wing, Shop No.501-509, Mega Center, Near Magarpatta City, Hadapsar, Pune - 411013"
        },
        {
            name: "HYDERABAD",
            address: 'Plot No.974, Small Avenue, Road No 49(Lane adjacent to Monster.com office) Jubilee Hills, Hyderabad-500033'
        },
        {
            name: "BENGALURU",
            address: "No. 1,Bandappa Colony New Bypanahalli Extention Opposite to Mont Fort College Old Madras Road Bengaluru-560038"
        },
        {
            name: "KOLKATA",
            address: "Plot 5, Block - GP,1st Floor,Sector - V, Salt Lake,Kolkata-700 091"
        },
        {
            name: "JAIPUR",
            address: "IBC Tower, 6th Floor, K-14, Ashok Marg, C Scheme, Near Airtel Building, Jaipur - 302001"
        },
        {
            name: "CHENNAI",
            address: "SP 4, SIDCO, Thiru Vi Ka Industrial Estate Behind Olympia Technology Park, Guindy, Chennai 600032"
        },
        {
            name: "AHMEDABAD",
            address: "4th Floor, 403, 'Raindrops' Opposite Cargo Motors, C.G. Road, Ahmedabad - 380006"
        }
    ]

    return (
        <Available>
            <div>
                <h1 className="head">We are Available 24x7 @ 9512341234</h1>
            </div>

            <div className="placeContainer">
                {
                    places.map(({name,address}) => (
                        <Place name={name} address={address} key={name}/>
                    ))
                }
            </div>
        </Available>
    )
}

export default AvailablePlaces;