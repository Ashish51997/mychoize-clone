import React from 'react';
import styled from 'styled-components';
import Context from '../../Context/FilterContext';

const FiltersContainer = styled.div`
    position: sticky;
    top: 0;
    height: fit-content;
    padding-top: 5%;

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

    @media (max-width: 650px) {
        position: static;
    }
`;

const Filters = () => {
    const value = React.useContext(Context);
    const {filters, handleFilter} = value; 
    const  {carTypes, fuelTypes, gearTypes} = filters;
    // console.log(carTypes,fuelTypes,gearTypes);

    const handleChange = (type, id, name, bool) => {
        // console.log(type,id, name, bool);
        handleFilter(type, id, name, bool);
    }

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
                        {
                            carTypes.map(ele => <div className={ele.selected ? "selected" : "unselected"} key={ele.id} onClick={() => handleChange(ele.type, ele.id, ele.name, ele.selected)}>{ele.name}</div>)
                        }
                    </div>
                </div>

                <div className="filterBox">
                    <div className="filterName">
                        <div>Fuel Type</div>
                        {/* <div>-</div> */}
                    </div>
                    <div className="filters">
                        {
                            fuelTypes.map(ele => <div className={ele.selected ? "selected" : "unselected"} key={ele.id} onClick={() => handleChange(ele.type, ele.id, ele.name, ele.selected)}>{ele.name}</div>)
                        }
                    </div>
                </div>

                <div className="filterBox">
                    <div className="filterName">
                        <div>Gear Type</div>
                        {/* <div>-</div> */}
                    </div>
                    <div className="filters">
                        {
                            gearTypes.map(ele => <div className={ele.selected ? "selected" : "unselected"} key={ele.id} onClick={() => handleChange(ele.type, ele.id, ele.name, ele.selected)}>{ele.name}</div>)
                        }
                    </div>
                </div>

            </div>
        </FiltersContainer>
    )
}

export default Filters
