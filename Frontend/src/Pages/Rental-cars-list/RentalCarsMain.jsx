import React from 'react';
import styled from 'styled-components';
import CarList from './CarList';
import Filters from './Filters';
import { loadData } from '../../Redux/localStorage';

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
        <RentalCar>
            <Filters />
            <CarList dayDiff={dayDiff} />
        </RentalCar>
    )
}

export default RentalCarsMain;