import React from 'react';
import ToggleButton from './ToggleButton';
import styled from 'styled-components';
import CardItem from './CardItem';
import Context from '../Context/FilterContext';
import { Redirect } from 'react-router-dom';

const List = styled.div`
    padding: 2%;
`;

const CarList = () => {
    const value = React.useContext(Context);
    const {data, selectedToggle} = value;

    // if (selectedToggle === "Subscription") {
    //     return <Redirect push to="/subscriptions" />
    // }
    
    return (
        <div>
            {/* FILTER TOGGLE */}
            <ToggleButton />
            
            {/* LIST CONTAINER */}
            <List>
                {
                    data.map((item, i) => (
                        <CardItem item={item} key={i} />
                        // console.log(item);
                    ))
                }
            </List>
        </div>
    )
}

export default CarList
