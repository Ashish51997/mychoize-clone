import React from 'react';
import { Link } from 'react-router-dom';
import { ImEye } from 'react-icons/im';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid lightgray;
    padding: 1%;
    margin: 1%;

    & > .carName {
        padding: 1%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;

        & :nth-child(1) {
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        & :nth-child(2) > :nth-child(3) {
            font-size: 0.9em;
            color: red;
        }
    }

    & > .carDetails {
        padding: 1%;
        display: grid;
        grid-template-columns: 30% 20% 25% 25%;

        & > div {
            padding: 1% 5%;
            margin: 1%;
            /* border: 1px solid red; */
        }

        & > .carImage > img {
            width: 100%;
            background-color: #ececec;
        }

        & > .carFeatures > div {
            padding: 1%;
            display: flex;
            flex-direction: row;
            
            & > div:nth-child(1) {
                padding-right: 5%;
            }
        }

        & > .carJourney, .carPackage {
            text-align: center;
        }

        & > .carJourney {
            font-size: 1.3vw;

            > div:nth-child(1) {
                padding-bottom: 5%;
                border-bottom: 1px solid lightgray;
            }

            > div:nth-child(2) {
                color: #5f5f5f;
                padding: 5% 0;
            }

            @media (max-width: 900px) {
                font-size: 1em;
            }
        }

        & > .carPackage {
            > * {
                padding: 1%;
            }

            > .price {
                color: red;
                font-size: 1.3em;
                font-weight: 600;
            }

            > .bookNowBtn {
                padding: 5% 2%;
                background-color: yellow;
                transition: 1s;

                :hover {
                    cursor: pointer;
                    color: white;
                    background-color: red;
                    transition: 1s;
                }
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 50% 50%;
            
            & > div {
                padding: 5%;
                
                :nth-child(1), :nth-child(2) {
                    border-bottom: 1px solid #e49595;
                }
            }
        }

        @media (max-width: 520px) {
            grid-template-columns: 100%;
            
            & > div {
                padding: 5%;
                
                :nth-child(1), :nth-child(2), :nth-child(3) {
                    border-bottom: 1px solid #e49595;
                }
            }
        }
    }
`;

const CardItem = ({item}) => {
    return (
        <Card>
            <div className="carName">
                <div>{item.BrandName}</div>
                <div>
                    <ImEye />
                    <span>&nbsp;&nbsp;</span>
                    <Link to="/" >Fare Details</Link>
                </div>
            </div>

            <div className="carDetails">

                {/* CAR IMAGE */}
                <div className="carImage">
                    <img src={item.VehicleBrandImageName} alt={item.BrandName} />
                </div>

                {/* CAR FEATURES (BAGGAGE, SEATER CAPACITIES & FUEL, TRANSMISSION TYPE) */}
                <div className="carFeatures">
                    <div>
                        <div><img  src="/Search Cars/bag.png" alt="bag" /> </div>
                        <div>{item.LuggageCapacity} Baggage</div>
                    </div>
                    <div>
                        <div><img  src="/Search Cars/seat.png" alt="seat" /> </div>
                        <div>{item.SeatingCapacity} seater</div>
                    </div>
                    <div>
                        <div><img  src="/Search Cars/fuel.png" alt="fuel" /> </div>
                        <div>{item.FuelType}</div>
                    </div>
                    <div>
                        <div><img  src="/Search Cars/transmission.png" alt="transmission" /> </div>
                        <div>{item.TransMissionType}</div>
                    </div>
                </div>

                {/* JOURNEY DETAILS (START & END DATES) */}
                <div className="carJourney">
                    <div>
                        <div>8:00 AM 24th Jul,Sat</div>
                        <div>
                            <img  src="/Search Cars/to.png" alt="to" />
                        </div>
                        <div>4:30 PM 25th Jul,Sun</div>
                    </div>

                    {/* TOTAL JOURNEY DURATION */}
                    <div>
                        1 Day(s) 9 Hour(s)
                    </div>
                </div>

                {/* PACKAGE DETAILS */}
                <div className="carPackage">
                    <div>Rental</div>
                    <div className="price">2,765/-</div>
                    <div>Extra kms @ 7/km</div>
                    <div className="bookNowBtn">BOOK NOW</div>
                </div>
            </div>
        </Card>
    )
}

export default CardItem
