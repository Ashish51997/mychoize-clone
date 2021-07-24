import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram }  from 'react-icons/fa';

const SocialsContainer = styled.div`
    color: white;
    padding: 0 3%;
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;

    & > .iconsContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        > :nth-child(1) {
            background-color: #2828a8;
        }

        > :nth-child(2) {
            background-color: #00aeff;
        }

        > :nth-child(3) {
            background-color: orange;
        }

        > .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            margin: 1%;
            font-size: 1.3em;
            border-radius: 50%;
            color: black;
            
            :hover {
                filter: contrast(50%);
                color: white;
            }
        }

        @media (max-width: 670px) {
            justify-content: center;

            & > .icon {
                height: 30px;
                width: 30px;
                font-size: 1em;
            }
        } 
    }

    @media (max-width: 670px) {
        text-align: center;
        grid-template-columns: 100%;
    } 
`;

const Socials = () => {
    return (
        <SocialsContainer>
            <p>© Copyright 2021, All Rights Reserved</p>

            <div className="iconsContainer">

                <div className="icon">
                    <FaFacebookF />
                </div>

                <div className="icon">
                    <FaTwitter />
                </div>

                <div className="icon">
                    <FaInstagram />
                </div>
            </div>
        </SocialsContainer>
    )
}

export default Socials
