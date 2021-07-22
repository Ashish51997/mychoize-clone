import React from 'react';
import styled from 'styled-components';
import CarList from './CarList';
import Filters from './Filters'

const RentalCar = styled.div`
    padding: 1% 3%;
    display: grid;
    grid-template-columns: 20% 80%;

    @media (max-width: 650px) {
        grid-template-columns: 100%;
    }
`;

const RentalCarsMain = () => {
    document.title = "Cars on Rent";

    return (
        <RentalCar>
            <Filters />
            <CarList />
        </RentalCar>
    )
}

export default RentalCarsMain
