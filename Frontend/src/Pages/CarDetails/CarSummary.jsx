import React from 'react';
import styled from 'styled-components';
import { FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SummaryContainer = styled.div`
    margin: 1%;
    box-shadow: 1px 1px 20px lightgray; 
    padding: 5%;
    color: #444444;

    & > .head {
        text-align: center;
        color: gray;
        padding: 2%;
        font-size: 1.3em;
    } 

    & > .carDetails {
        display: grid;
        grid-template-columns: 100%;

        & > .carImage > img {
            width: 100%;
        }

        & > .carFeatures {
            display: grid;
            grid-template-columns: 50% 50%;
            
            & >  .feature {
                padding: 1%;
                display: flex;
                flex-direction: row;
            }

            @media (max-width: 900px) {
                grid-template-columns: 100%;
            }
        }

        & > .carName, .carJourney {
            text-align: center;
            padding: 2%;
            border-bottom: 1px solid lightgray;
        }

        & > .carName {
            color: gray;
            font-size: 1.2em;
        }

        & > .carPackage {
            border-bottom: 1px solid lightgray;

            & > div {
                display: flex;
                justify-content: space-between;
                padding: 2%;
            }
        }

        & > .payableAmt {
            background-color: black;
            color: white;
            font-size: 1em;
            display: flex;
            justify-content: space-between;
            padding: 5%;
            margin: 2%;

            & > div:nth-child(2) {
                color: red; 
            }
        }
    }

    & > .termsAndCond {
        border-top: 2px solid black;
        padding: 3%;

        & > .red {
            color: red;
            font-weight: 900;
        }

        & > div {
            padding: 1%;
            text-align: justify;
        }

        & .link {
            color: blue;
        }
    }
`;

const CarSummary = ({item}) => {

    return (
        <SummaryContainer>
            <div className='head'>
                <div>BOOKING SUMMARY</div>
            </div>

            <div className="carDetails">
                <div className="carImage">
                    <img src={item.car_image} alt={item.car_name} />
                </div>

                <div className="carFeatures">
                    <div className="feature">
                        <div>
                            <img  src="/Search Cars/bag.png" alt="bag" /> 
                        </div>
                            <div>&nbsp;{item.carrying_capacity}</div>
                        </div>
                        <div className="feature">
                            <div>
                                <img  src="/Search Cars/seat.png" alt="seat" /> 
                            </div>
                            <div>&nbsp;&nbsp;{item.seater}</div>
                        </div>
                        <div className="feature">
                            <div>
                                <img  src="/Search Cars/fuel.png" alt="fuel" /> 
                            </div>
                            <div>&nbsp;&nbsp;{item.fuel_type}</div>
                        </div>
                        <div className="feature">
                            <div>
                                <img  src="/Search Cars/transmission.png" alt="transmission" /> 
                            </div>
                            <div>&nbsp;&nbsp;{item.gear_type}</div>
                        </div>
                    </div>
                
                <div className="carName">
                    {item.car_name}
                </div>

                <div className="carJourney">
                    <div>
                        <div>8:00 AM 24th Jul,Sat</div>
                        <div>
                            <img  src="/Search Cars/to.png" alt="to" />
                        </div>
                        <div>4:30 PM 25th Jul,Sun</div>
                    </div>

                    {/* TOTAL JOURNEY DURATION */}
                    {
                        item.toggleType === "120 km/day" ? 
                        <div>
                            1 Day(s) 9 Hour(s)
                        </div> : false
                    }
                </div>

                <div className="carPackage">
                    <div>
                        <div>Package Type</div>
                        <div>{item.toggleType}</div>
                    </div>
                    {
                        item.toggleType  === "120 km/day" ?
                        <>
                            <div>
                                <div>Free kms for rental</div>
                                <div>{item.free_kms}</div>
                            </div>
                            <div>
                                <div>Extra km charges</div>
                                <div>@{item.extra_kms_price}/km</div>
                            </div>
                        </> : false
                    }
                </div>

                <div className="payableAmt">
                    <div>PAYABLE AMOUNT</div>
                    <div>
                        <FaRupeeSign />
                        {item.totalSum}/-
                    </div>
                </div>
            </div>

            <div className="termsAndCond">
                <div className="red">Important:</div>

                <div>As per current directive from state govt., Interstate movement of vehicles is not permitted without Govt. approved pass (including approval for return journey). For further assistance connect with us at selfdrive@orixindia.com</div>

                <div>Minimum permissible age for renting out a MyChoize car is 21 years and the driving license of the renter should be minimum one year old as on the rental start date</div>

                <div>As per government rules and regulations, few cars may be speed limited to 80 km/hr for your safety.</div>

                <div><b>Please read the policy on Inter State tax under MyChoize Terms & Conditions for eligible reimbursements <Link className="link">Know more...</Link></b></div>
            </div>
        </SummaryContainer>
    )
}

export default CarSummary;