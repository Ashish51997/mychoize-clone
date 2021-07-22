import React from 'react';
import ToggleButton from './ToggleButton';
import data from "../db.json";
import styled from 'styled-components';
import CardItem from './CardItem';

const List = styled.div`
    padding: 2%;
`;

const CarList = () => {
    return (
        <div>
            <ToggleButton />
            
            <List>
                {
                    data.data.SearchBookingModel.map((item, i) => (
                        <CardItem item={item} key={i} />
                        // console.log(item)
                    ))
                }
            </List>
        </div>
    )
}

export default CarList
