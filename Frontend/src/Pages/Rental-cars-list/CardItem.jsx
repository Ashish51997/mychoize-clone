import React from 'react';
import { ImEye } from 'react-icons/im';
import { FaRupeeSign } from 'react-icons/fa';
import styled from 'styled-components';
import Context from '../../Context/FilterContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Card = styled.div`
    border: 1px solid lightgray;
    padding: 1%;
    margin: 2% 1%;
    transition: 01s;

    :hover {
        transition: 0s;
        box-shadow: 1px 1px 20px lightgray;
    }

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
            font-weight: 600;

            :hover {
                cursor: pointer;
                text-decoration: underline;
            }
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

        & > .carFeatures > .freeKm {
            padding: 1%;
            font-size: 1.1em;
            color: red;
        }

        & > .carFeatures > .feature {
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
                transition: 0.7s;

                & > * {
                    text-decoration: none;
                    color: black;

                    :hover {
                        color: white;
                    }
                }

                :hover {
                    cursor: pointer;
                    color: white;
                    background-color: red;
                    transition: 0.1s;
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

const ModalContainer = styled.div`

    & > .open {

        & > .modal {
            /* border: 5px solid cyan; */
            border-radius: 10px;
            box-shadow: 1px 1px 5px gray;
            padding: 2%;
            display: block;
            position: fixed;
            top: 0;
            width: 50%;
            margin: 2% auto;
            background-color: white;
            z-index: 3;
            animation-name: fromTop;
            animation-duration: 0.4s;

            @keyframes fromTop {
                from {
                    top:-300px;
                    opacity:0
                }
                to {
                    top:0;
                    opacity:100
                }
            }

            & > .modalHead {
                border-bottom: 1px solid lightgray;
            }

            & > .fareDetailsHead {
                color: red;
                font-weight: 700;
                padding: 2%;
            }

            & > .fareDetails > div, .fareTotal {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2%;
            }

            & > .fareTotal {
                background-color: #e7e7e7;
                margin: 3% 0;
                font-size: 1.3em;

                & :nth-child(2) {
                    color: red;
                }
            }

            & > .modalBtns {
                display: flex;
                justify-content: space-between;

                & > div:nth-child(1) {
                    background-color: black;
                    color: white;
                }

                & > div:nth-child(2) {
                    background-color: red;
                    & > * {
                        text-decoration: none;
                        color: white;

                        :hover {
                            color: yellow;
                        }
                    }
                }

                & > div {
                    padding: 2% 5%;
                    border-radius: 3px;
                    cursor: pointer;

                    :hover {
                        filter: contrast(70%);
                        color: yellow;
                    }
                }
            }
        }

        @media (max-width: 650px) {
            width: 80%;
            margin: 2% auto;
        }
    }

    & > .close {
        display: none;
    }
`;

const CardItem = ({item}) => {
    const value = React.useContext(Context);
    const {selectedToggle, handleSelectedCar} = value;

    const [modal, setModal] = React.useState(false);

    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    // window.onclick = function(event) {
    //     console.log(event)
    // }

    const selectedCar = (item) => {
        handleSelectedCar({...item, toggleType: selectedToggle});
    } 

    return (
        <>
            <Card>
                <div className="carName">
                    <div>{item.car_name}</div>
                    <div>
                        <ImEye />
                        <span>&nbsp;&nbsp;</span>
                        <span onClick={openModal}>Fare Details</span>
                    </div>
                </div>

                <div className="carDetails">

                    {/* CAR IMAGE */}
                    <div className="carImage">
                        <img src={item.car_image} alt={item.car_image} />
                    </div>

                    {/* CAR FEATURES (BAGGAGE, SEATER CAPACITIES & FUEL, TRANSMISSION TYPE) */}
                    <div className="carFeatures">
                        <div className="feature">
                            <div><img  src="/Search Cars/bag.png" alt="bag" /> </div>
                            <div>{item.carrying_capacity}</div>
                        </div>
                        <div className="feature">
                            <div><img  src="/Search Cars/seat.png" alt="seat" /> </div>
                            <div>{item.seater}</div>
                        </div>
                        <div className="feature">
                            <div><img  src="/Search Cars/fuel.png" alt="fuel" /> </div>
                            <div>{item.fuel_type}</div>
                        </div>
                        <div className="feature">
                            <div><img  src="/Search Cars/transmission.png" alt="transmission" /> </div>
                            <div>{item.gear_type}</div>
                        </div>

                        {
                            selectedToggle === "120 km/day" ? 
                            <div className="freeKm">
                                {item.free_kms} free kms
                            </div> : false
                        }
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
                        {
                            selectedToggle === "120 km/day" ? 
                            <div>
                                1 Day(s) 9 Hour(s)
                            </div> : false
                        }
                    </div>

                    {/* PACKAGE DETAILS */}
                    <div className="carPackage">
                        <div>Rental</div>
                        <div className="price"><FaRupeeSign /> {selectedToggle === "120 km/day" ? item.limited_kms_price : item.unlimited_kms_price}</div>
                        {
                            selectedToggle === "120 km/day" ? <div>Extra kms @ <FaRupeeSign/>{item.extra_kms_price}/km</div> : false
                        }
                        <div className="bookNowBtn"><Link to='/car-details' onClick={() => selectedCar(item)}>BOOK NOW</Link></div>
                    </div>
                </div>
            </Card>

            <ModalContainer>
                <div className={modal ? "open" : "close"}>
                    <div className="modal">
                        <div className="modalHead">
                            <h3>FARE BREAKUP</h3>
                        </div>

                        <div className="fareDetailsHead">
                            <div>Fare Details</div>
                        </div>

                        <div className="fareDetails">
                            <div>
                                <div>Rental</div>
                                <div><FaRupeeSign /> {selectedToggle === "120 km/day" ? item.limited_kms_price : item.unlimited_kms_price}</div>
                            </div>
                            <div>
                                <div>Refundable Deposit</div>
                                <div><FaRupeeSign /> {item.refundable_deposit}</div>
                            </div>
                            <div>
                                <div>CGST</div>
                                <div><FaRupeeSign /> {selectedToggle === "120 km/day" ? item.limited_kms_price * 18 / 100 : item.unlimited_kms_price * 18 /100}</div>
                            </div>
                            <div>
                                <div>SGST</div>
                                <div><FaRupeeSign /> {selectedToggle === "120 km/day" ? item.limited_kms_price * 18 / 100 : item.unlimited_kms_price * 18 /100}</div>
                            </div>
                        </div>

                        <div className="fareTotal">
                            <div>Total Payable Amount</div>
                            <div><FaRupeeSign /> {selectedToggle === "120 km/day" ? item.limited_kms_price + item.refundable_deposit : item.unlimited_kms_price + item.refundable_deposit}/-</div>
                        </div>
                        
                        <div className="modalBtns">
                            <div onClick={closeModal}>CLOSE</div>
                            <div className="bookNowBtn"><Link to='/car-details' onClick={() => selectedCar(item)}>BOOK NOW</Link></div>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default CardItem;