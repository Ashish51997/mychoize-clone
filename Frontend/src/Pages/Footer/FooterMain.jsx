import React from 'react';
import QuickLinks from './QuickLinks';
import styled from 'styled-components';
import About from './About';
import Availability from './Availability';
import ReachUs from './ReachUs';
import Socials from './Socials';

const FooterContainer = styled.div`
    padding: 5% 5% 2%;
    background-image: url("/Footer/footer-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
    & > .footerGrids {
        display: grid;
        grid-template-columns: 20% 20% 25% 35%;
        padding-bottom: 3%;
        margin-bottom: 3%;
        border-bottom: 1px solid lightgray;

        & :nth-child(3) {
            @media (max-width: 550px) {
                display: none;
            }
        }

        & .yellow {
            color: yellow;
            padding: 1% 0;
        }

        & .link > * {
            color: white;
            text-decoration: none;
        }

        & .link:hover {
            background-color: #6d6d2b;
        }

        & .info {
            color: white;
            text-align: justify;
            padding: 2% 0;
        } 

        & .infoContainer > div {
            display: grid;
            grid-template-columns: 7% 93%;
            align-items: baseline;

            @media (max-width: 670px) {
                grid-template-columns: 10% 90%;
            }
        }

        @media (max-width: 1000px) {
            grid-template-columns: 50% 50%;
            grid-row-gap: 5%;
            padding-bottom: 10%;
        }

        @media (max-width: 550px) {
            grid-template-columns: 100%;
            grid-row-gap: 5%;
            padding-bottom: 25%;
        }
    }
`;

const FooterMain = () => {
    return (
        <FooterContainer>
            <div className="footerGrids">
                <QuickLinks />
                <About />
                <Availability />
                <ReachUs />
            </div>

            <div>
                <Socials />
            </div>
        </FooterContainer>
    )
}

export default FooterMain