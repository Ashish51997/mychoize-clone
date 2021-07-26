import React from 'react';
import styled from 'styled-components';
import Context from '../Context/FilterContext';

const ToggleBtn = styled.div`
    width: 60vw;
    margin: auto;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    background-color: #d1d1d1;

    & > div, .unselected {
        padding: 1% 7%;
        border-radius: 30px;
        transition: 0.5s;

        &:hover {
            cursor: pointer;
            background-color: #ece687;
            color: red;
        }
    }

    & .selected {
        background-color: red;
        color: white;

        &:hover {
            cursor: pointer;
            color: yellow;
            background-color: red;
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
    const value = React.useContext(Context);
    const {filters, handleToggle, handleSelectToggle} = value;

    const handleChange = (type, id, name) => {
        // console.log(type,id)
        handleToggle(type, id);
        handleSelectToggle(name);
    }

    return (
        <ToggleBtn>
            {
                filters.toggleBtns.map(ele => <div className={ele.selected ? "selected" : "unselected"} key={ele.id} onClick={() => handleChange(ele.type, ele.id, ele.name)}>{ele.name}</div>)
            }
            {/* <div className="selected">120 kms/day</div>
            <div className="unselected">Unlimited Kms</div>
            <div className="unselected">Subscription</div> */}
        </ToggleBtn>
    )
}

export default ToggleButton;