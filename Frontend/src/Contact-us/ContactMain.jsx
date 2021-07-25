import React from 'react';
import styled from 'styled-components';
import AvailablePlaces from './AvailablePlaces';
import SafetyPartners from './SafetyPartners';

const ContactContanier = styled.div`
    margin: 1%;
    border: 1px solid gray;
`;
const ContactMain = () => {

    document.title = "Contact Us";
    
    return (
        <ContactContanier>
            <AvailablePlaces />
            <hr/>
            <SafetyPartners />
        </ContactContanier>
    )
}

export default ContactMain;