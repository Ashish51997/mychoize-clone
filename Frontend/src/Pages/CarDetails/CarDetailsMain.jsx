import React from 'react';
import styled from 'styled-components';
import Context from '../../Context/FilterContext';
import { Redirect } from 'react-router-dom';
import CarSummary from './CarSummary';
import RideDetails from './RideDetails';

const CarDetails = styled.div`

`;

const CarDetailsMain = () => {
    const value = React.useContext(Context);

    const {selectedCar} = value;
    console.log(selectedCar);

    if (!selectedCar) {
        return <Redirect to="/rent-cars" push />
    }

    return (
        <CarDetails>
            CAR DETAILS
            <CarSummary selectedCar={selectedCar} />
            <RideDetails selectedCar={selectedCar} />
        </CarDetails>
    )
}

export default CarDetailsMain;