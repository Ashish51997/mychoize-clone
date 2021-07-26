import React from 'react';
import Checkout from './Checkout';
import OrderForm from './OrderForm';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { loadData } from '../../Redux/localStorage'

const RideDetailsContainer = styled.div`

    & > .steps {
        padding: 3%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        & > div {
            cursor: pointer;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: red;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }

        & > .unSelectedStep {
            
        }

        & > .selectedStep {
            background-color: #bdbd12;
            color: black;
        }
    }
`;

const RideDetails = ({item}) => {
    const [step, setStep] = React.useState(1);

    const handleStep = (stepNo) => {
        setStep(stepNo);
    }

    const {pickdate} = loadData("date");
    const {dropdate} = loadData("date");

    var date1 = new Date(pickdate)
    var date2 = new Date(dropdate);
    
    // console.log(localStorage.getItem("date"));
    console.log(pickdate,dropdate);

    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var dayDiff = Number(Difference_In_Time / (1000 * 3600 * 24));

    return (
        <RideDetailsContainer>
            <div className="steps">
                <div className={step === 1 ? "selectedStep" : "unSelectedStep"} onClick={() => handleStep(1)}>1</div>
                <div className={step === 2 ? "selectedStep" : "unSelectedStep"} onClick={() => handleStep(2)}>2</div>
                <div className={step === 3 ? "selectedStep" : "unSelectedStep"} onClick={() => handleStep(3)}>3</div>
            </div>
            {
                step === 1 ? 
                <OrderForm item={item} handleStep={handleStep} dayDiff={dayDiff} /> :
                step === 2 ?
                <UserInfo handleStep={handleStep} /> :
                <Checkout handleStep={handleStep} />
            }
        </RideDetailsContainer>
    )
}

export default RideDetails
