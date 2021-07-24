import React from 'react';
import styled from 'styled-components';

const PlaceItem = styled.div`
    margin: 3%;
    padding: 0 5%;
    font-size: 0.95em;
    text-align: justify;

    &:hover {
        box-shadow: 1px 1px 20px lightgray;
    }
`;

const Place = ({name, address}) => {
    return (
        <PlaceItem>
            <h4 className="head">{name}</h4>
            <p>{address}</p>
        </PlaceItem>
    )
}

export default Place
