import React from 'react';
import ToggleButton from './ToggleButton';
import styled from 'styled-components';
import CardItem from './CardItem';
import Context from '../../Context/FilterContext';
import {v4 as uuid} from "uuid";
// import { Redirect } from 'react-router-dom';

const List = styled.div`
    padding: 2%;
`;

const CarList = ({dayDiff}) => {
    const value = React.useContext(Context);
    const {data} = value;
    // const {selectedToggle} = value;

    // if (selectedToggle === "Subscription") {
    //     return <Redirect push to="/subscriptions" />
    // }

    // console.log("DATA" ,data)
    
    return (
        <div>
            {/* FILTER TOGGLE */}
            <ToggleButton />
            
            {/* LIST CONTAINER */}
            <List>
                {
                    data.map((item) => (
                        <CardItem item={item} key={uuid()} dayDiff={dayDiff}/>
                        // console.log(item);
                    ))
                }
            </List>
        </div>
    )
}

export default CarList
