import React from 'react';
import styled from 'styled-components';
import AvailablePlaces from './AvailablePlaces';
import SafetyPartners from './SafetyPartners';

const ContactContanier = styled.div`
    margin: 1%;
    border: 1px solid gray;
`;
const Contact = () => {
    return (
        <ContactContanier>
            <AvailablePlaces />
            <hr/>
            <SafetyPartners />
        </ContactContanier>
    )
}

export default Contact;