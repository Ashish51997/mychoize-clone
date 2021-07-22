import React from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.div`
    width: 60vw;
    margin: auto;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    background-color: #d1d1d1;

    & > div {
        padding: 1% 7%;
        border-radius: 30px;

        &:hover {
            cursor: pointer;
            color: red;
        }
    }

    & .selected {
        background-color: red;
        color: white;

        &:hover {
            cursor: pointer;
            color: yellow;
        }
    }

    @media (max-width: 1000px) {
        font-size: 1.6vw;
    }

    @media (max-width: 650px) {
        width: 95%;
        font-size: 2.5vw;
    }
`;

const ToggleButton = () => {
    return (
        <ToggleBtn>
            <div className="selected">120 kms/day</div>
            <div className="unselected">Unlimited Kms</div>
            <div className="unselected">Subscription</div>
        </ToggleBtn>
    )
}

export default ToggleButton;