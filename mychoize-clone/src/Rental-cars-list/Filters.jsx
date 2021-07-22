import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`

    & > .filterHead {
        text-align: center;
        font-size: 1.3em;
        padding: 2%;
        background-color: #333;
        color: white;
    }

    & > .filtersContainer {

        & > .filterBox {
            border: 1px solid gray;
            border-radius: 5px;
            margin: 5% 0;

            & > .filterName {
                background-color: #f1f1f1;
                padding: 2% 5%;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                /* > div:nth-child(2) {
                    font-size: 2em;
                    color: gray;    
                } */
            }

            & > .filters {
                display: flex;
                flex-wrap: wrap;
                padding: 5%;

                & > .unselected {
                    padding: 1% 3%;
                    margin: 1%;
                    border: 1px solid gray;
                    border-radius: 5px;
                }

                & > .selected {
                    background-color: gray;
                    color: white;
                    padding: 1% 3%;
                    margin: 1%;
                    border: 1px solid gray;
                    border-radius: 5px;
                }

                & > *:hover {
                    cursor: pointer;
                    background-color: #aaaaaa;
                }
            }
        }
    }

    /* @media (max-width: 650px) {
        display: none;
    } */
`;

const Filters = () => {
    const flag = 0;

    return (
        <FiltersContainer>
            <div className="filterHead">Search by Filter</div>

            <div className="filtersContainer">

                <div className="filterBox">
                    <div className="filterName">
                        <div>Car Type</div>
                        {/* <div>-</div> */}
                    </div>
                    <div className="filters">
                        <div className={flag ? "selected" : "unselected"}>Economy</div>
                        <div className={flag ? "selected" : "unselected"}>Compact</div>
                        <div className={flag ? "selected" : "unselected"}>Standard</div>
                        <div className={flag ? "selected" : "unselected"}>Muv</div>
                    </div>
                </div>

                <div className="filterBox">
                    <div className="filterName">
                        <div>Fuel Type</div>
                        {/* <div>-</div> */}
                    </div>
                    <div className="filters">
                        <div className={flag ? "selected" : "unselected"}>Petrol</div>
                        <div className={flag ? "selected" : "unselected"}>Diesel</div>
                    </div>
                </div>

                <div className="filterBox">
                    <div className="filterName">
                        <div>Gear Type</div>
                        {/* <div>-</div> */}
                    </div>
                    <div className="filters">
                        <div className={flag ? "selected" : "unselected"}>Manual</div>
                        <div className={flag ? "selected" : "unselected"}>Automatic</div>
                    </div>
                </div>

            </div>
        </FiltersContainer>
    )
}

export default Filters
