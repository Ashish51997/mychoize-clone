import React from 'react';
import styled from 'styled-components';
import { FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Context from '../../Context/FilterContext';
import axios from 'axios';
import { loadData } from '../../Redux/localStorage';

const Order = styled.div`
    margin: 1%;
    border: 1px solid lightgray;

    & > .head {
        font-size: 1.3em;
        font-weight: 700;
        color: #414141;
        padding: 1%;
    }

    & > .pickupNDrop {

        & > div {
            display: grid;
            grid-template-columns: 50% 50%;
            
            & > * {
                outline: none;
                padding: 3%;
                margin: 3%;
                border-radius: 5px;
            }
        }
    }

    & > .order {
        margin: 1%;
        padding: 1%;

        & > div {
            border: 1px solid lightgray;
            padding: 1%;
            display: grid;
            grid-template-columns: 50% 50%;

            & > div:nth-child(2) {
                text-align: right;
            }
        }
    }

    & > .tripProtection {
        padding: 2% 2% 0;
        display: grid;
        grid-template-columns: 50% 50%;

        & > div:nth-child(2) {
            text-align: right;
        }
    }

    & > .insurance {
        margin: 1%;
        border: 1px solid gray;
        border-radius: 5px;

        & > .insuranceHead {
            color: #353535;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            padding: 0 3%;
            background-color: #dfdfdf;
            display: grid;
            grid-template-columns: 70% 30%;
            align-items: center;
            font-size: 1.5em;
            
            & > div > img {
                width: 100%;
            }
        }

        & > .carousel, .termsNcond {
            padding: 2%;
        }

        & > .carousel {
            text-align: center;
            display: grid;
            grid-template-columns: 33.33% 33.33% 33.33%;

            & > .carouselItem {
                background-color: #e7e7e7;
                margin: 1%;
                padding: 1%;
                border-radius: 5px;
            }
        }

        & > .termsNcond .termsLink {
            color: blue;
        } 
    }

    & > .payableAmt {

        & > .payableAmtHead {
            padding: 1% 3%;
            font-size: 1.5em;
            background-color: #dfdfdf;
            display: flex;
            justify-content: space-between;

            & :nth-child(2) {
                font-weight: 600;
                color: red;
            }
        }

        & > .proceedBtn {
            display: flex;
            justify-content: flex-end;

            & > button {
                border: none;
                outline: none;
                font-size: 1.3em;
                margin: 1%;
                padding: 1% 5%;
                background-color: red;
                color: white;
                border-radius: 3px;

                :hover {
                    cursor: pointer;
                    filter: contrast(70%);
                }

                :disabled {
                    background-color: gray;
                    cursor: not-allowed;
                }
            }
        }
    }
`;

const OrderForm = ({item, handleStep, dayDiff}) => {
    const value = React.useContext(Context);

    const token = loadData("token");
    console.log(token);

    const [cities, setCities] = React.useState([]);
    const { handleTotal } = value;

    // console.log(item)
    const [accessoryCheck, setAccessoryCheck] = React.useState(false);
    const [insuranceCheck, setInsuranceCheck] = React.useState(false);
    const [termsCheck, setTermscheck] = React.useState(false);

    const [proceed, setProceed] = React.useState(false);


    const handleAccessory = () => {
        accessoryCheck ? handleTotal(- item.extra_luggage_carrier_price) : handleTotal(+ item.extra_luggage_carrier_price);
        setAccessoryCheck(!accessoryCheck);
    }

    const handleInsurance = () => {
        insuranceCheck ? handleTotal(- item.insurance_price) : handleTotal(+ item.insurance_price);
        setInsuranceCheck(!insuranceCheck);
    }

    const handleTerms = () => {
        setTermscheck(!termsCheck);
        setProceed(!proceed);
    }

    const postdData = () => {
        const {pickdate} = loadData("date");
        const {dropdate} = loadData("date");

        const booking_history = [
                {
                    startDate: pickdate,
                    endDate: dropdate,
                    insuranceAmt: insuranceCheck ? true : false
                }
            ]            

        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
          }
        axios.patch(`https://mychoize-backend.herokuapp.com/users`, config, booking_history)
            .then (res => {
                console.log('posted');
            })
            .catch (err => {
                console.log(err.message);
            })
    }

    const handleNext = (num) => {
        postdData();
        handleStep(num);
    }

    React.useEffect(() => {
        axios.get(`https://mychoize-backend.herokuapp.com/cities`)
            .then (res => {
                console.log(res.data.data);
                setCities(res.data.data);
            })
            .catch (err => {
                console.log(err);
            })
    },[]);

    return (
        <Order>
            <div className="head">
                <div>CAR PICKUP & DROP LOCATION</div>
            </div>

            <div className="pickupNDrop">
                <div>
                    <select>
                        <option>Car Pickup location</option>
                        {
                            cities?.map(ele => (
                                <option>{ele.addresses}</option>
                            ))
                        }
                    </select>
                    <select>
                        <option>Car Drop location</option>
                        {
                            cities?.map(ele => (
                                <option>{ele.addresses}</option>
                            ))
                        }
                    </select>
                </div>

                {/* <div>
                    <textarea rows="5" disabled />
                    <textarea rows="5" disabled />
                </div> */}
            </div>

            <div className="order">

                <div className="rental">
                    <div>RENTAL</div>
                    <div><FaRupeeSign />
                        {
                            item.toggleType === "120 km/day" ? (item.limited_kms_price * dayDiff) : item.unlimited_kms_price
                        }
                    </div>
                </div>

                <div className="refundableAmt">
                    <div>Refundable Deposit</div>
                    <div><FaRupeeSign />{item.refundable_deposit}</div>
                </div>

                <div className="cgst">
                    <div>CGST</div>
                    <div><FaRupeeSign />
                        {
                            item.toggleType === "120 km/day" ? (item.limited_kms_price * dayDiff) * 18 / 100 : item.unlimited_kms_price * 18 / 100
                        }
                    </div>
                </div>

                <div className="sgst">
                    <div>SGST</div>
                    <div><FaRupeeSign />
                        {
                            item.toggleType === "120 km/day" ? (item.limited_kms_price * dayDiff) * 18 / 100 : item.unlimited_kms_price * 18 / 100
                        }
                    </div>
                </div>

                <div className="insurance">
                    <div>Insurance</div>
                    <div>Included</div>
                </div>

                <div className="roadAssistance">
                    <div>Road Side Assistance</div>
                    <div>Included</div>
                </div>

                <div className="fuel">
                    <div>Fuel</div>
                    <div>Not Included</div>
                </div>

                <div className="accessories">
                    <div><b>+Add Accessories</b></div>
                    <div><FaRupeeSign /> {accessoryCheck ? item.extra_luggage_carrier_price : 0}</div>
                    <div>
                        <input type="checkbox" checked={accessoryCheck} onChange={handleAccessory} />
                        <label>Lugguage Carrier</label>
                    </div>
                </div>
            </div>

            <div className="tripProtection">
                <div>
                    <input type="checkbox" checked={insuranceCheck} onChange={handleInsurance} />
                    <label><b>Trip Protection Plan</b></label>
                </div>
                {
                    insuranceCheck ? 
                    <div>
                        <FaRupeeSign /> {item.insurance_price}
                    </div> : false
                }
            </div>

            <div className="insurance">
                <div className="insuranceHead">
                    <div>Travel Insurance Coverage</div>
                    <div>
                        <img src="/Car-Details/reliance_logo.png" alt="reliance_logo" />
                    </div>
                </div>
                
                <div className="carousel">
                    <div className="carouselItem">
                        <div>
                            <img src="/Car-Details/per_accident.png" alt="personal_accident" />
                        </div>
                        <div>
                            <b>Personal Accident</b>
                            <div>(upto 5 lacs)</div>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div>
                            <img src="/Car-Details/emergency_evac.png" alt="personal_accident" />
                        </div>
                        <div>
                            <b>Emergency Medical Expenses</b>
                            <div>(upto 1lacs)</div>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div>
                            <img src="/Car-Details/emergency_med.png" alt="personal_accident" />
                        </div>
                        <div>
                            <b>Emergency Evacuation & Repatriation</b>
                            <div>(upto 5000)</div>
                        </div>
                    </div>
                </div>

                <div className="termsNcond">
                    <input type="checkbox" checked={termsCheck} onChange={handleTerms} />
                    <label>I agree to the <Link className="termsLink">Terms & Conditions</Link> and confirm that my age is above 18 years and less than 70 years</label>
                </div>
            </div>

            <div className="payableAmt">
                <div className="payableAmtHead">
                    <div>Payable Amount</div>
                    <div><FaRupeeSign /> {item.totalSum}</div>
                </div>
                <div className="proceedBtn">
                    {/* <button disabled={!proceed}>Proceed</button> */}
                    <button onClick={() => handleNext(2)}>Proceed</button>
                </div>
            </div>

            

        </Order>
    )
}

export default OrderForm;