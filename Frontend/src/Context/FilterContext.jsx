import React from 'react';
// import axios from 'axios';
import carList from "../db2.json";

const Context = React.createContext();
export default Context;

export const ContextProvider = ({children}) => {
    const [filters, setFilters] = React.useState({
        carTypes: [
            {name: "Economy", type: "carTypes", selected: false, id: "90ac2507-308a-47ac-83dc-121fa48903ba"},
            {name: "Compact", type: "carTypes", selected: false, id: "275b4635-192e-472f-a770-ac92097cbb6b"},
            {name: "Standard", type: "carTypes", selected: false, id: "1a42cd79-7a5d-411d-83be-c3635b535272"},
            {name: "Muv", type: "carTypes", selected: false, id: "cfa350e5-00c9-49b0-8e2a-be4691bbcff1"},
        ],

        fuelTypes: [
            {name: "Petrol", type: "fuelTypes", selected: false, id: "d6f3ec90-3d6a-4fe7-8bea-f7d15c9ff369"},
            {name: "Diesel", type: "fuelTypes", selected: false, id: "ec909319-dcca-4e05-ac45-350c1e095a54"},
        ],

        gearTypes: [
            {name: "Manual", selected: false, type: "gearTypes", id: "f8dccdab-bfee-4420-9f4e-8b71d002e7a3"},
            {name: "Automatic", selected: false, type: "gearTypes", id: "c8caaba7-f902-4330-ae75-d4e5a61e986b"},
        ],

        toggleBtns: [
            {name: "120 km/day", selected: true, type: "toggleBtns", id: "0be056b7-da35-47f1-9e48-cbd0d6efce2f"},
            {name: "Unlimited kms", selected: false, type: "toggleBtns", id: "e3fbbc47-4a8e-465a-9fcc-95e4af7a6807"},
            {name: "Subscription", selected: false, type: "toggleBtns", id: "6650fe24-57ff-48e3-9dc6-7f91a7f0d133"}
        ]
    });

    // const [init, setInit] = React.useState([]);
    const [data, setData] = React.useState(carList);

    const [selectedToggle, setToggle] = React.useState("120 km/day");

    const [count, setCount] = React.useState(0);
    // console.log(data);

    const [selectedCar, setSelectedCar] = React.useState();

    const handleFilter = (key, id, name, bool) => {
        // filters[key].map(ele => ele.id === id ? console.log(ele) : ele)
        setFilters({
            ...filters,
            [key]: filters[key].map(ele => ele.id === id ? {...ele, selected: !ele.selected} : ele)
        });

        if (key === "carTypes") {
            if (!bool) {
                setData(data.filter(ele => ele.car_type === name));
                setCount(count + 1);
            }
            // else if (count > 1) {
            //     setData(data.filter(ele => ele.car_type !== name));
            //     setCount(count- 1);
            // }
            else {
                setData(carList);
                setCount(0);
            }
        }

        else if (key === "fuelTypes") {
            if (!bool) {
                setData(data.filter(ele => ele.fuel_type === name));
                setCount(count + 1);
            }
            // else if (count > 1) {
            //     setData(data.filter(ele => ele.fuel_type !== name));
            //     setCount(count- 1);
            // }
            else {
                setData(carList);
                setCount(0);
            }
        }

        else if (key === "gearTypes") {
            if (!bool) {
                setData(data.filter(ele => ele.gear_type === name));
                setCount(count + 1);
            }
            // else if (count > 1) {
            //     setData(data.filter(ele => ele.gear_type !== name));
            //     setCount(count- 1);
            // }
            else {
                setData(carList);
                setCount(0);
            }
        }
    };

    const handleToggle = (key, id) => {
        // filters[key].map(ele => ele.id === id ? console.log(ele) : ele)
        setFilters({
            ...filters,
            [key]: filters[key].map(ele => ele.id === id ? {...ele, selected: true} : {...ele, selected: false})
        });
    };

    const handleSelectToggle = (name) => {
        setToggle(name);
    };

    const handleSelectedCar = (item) => {
        setSelectedCar(item);
    }

    // React.useEffect(() => {
    //     axios.get(`https://mychoize-backend.herokuapp.com/cars`)
    //         .then (async res => {
    //             await setData(res.data);
    //             await setInit(res.data);
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    // })

    const value = {
        count,
        filters,
        data,
        handleFilter,
        handleToggle,
        selectedToggle,
        handleSelectToggle,
        selectedCar,
        handleSelectedCar
    };

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}