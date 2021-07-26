import React from 'react';
import styled from 'styled-components';
import Context from '../../Context/FilterContext';
import { Redirect } from 'react-router-dom';
import CarSummary from './CarSummary';
import RideDetails from './RideDetails';

const CarDetails = styled.div`
    margin: 2% 5%;
    display: grid;
    grid-template-columns: 30% 70%;
`;

const CarDetailsMain = () => {
    document.title = "Booking Summary";

    const value = React.useContext(Context);

    const {selectedCar} = value;
    // console.log(selectedCar);

    if (!selectedCar) {
        return <Redirect to="/rent-cars" push />
    }

    return (
        <CarDetails>
            <CarSummary item={selectedCar} />
            <RideDetails item={selectedCar} />
        </CarDetails>
    )
}

export default CarDetailsMain;