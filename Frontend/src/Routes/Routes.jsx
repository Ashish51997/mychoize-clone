import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Carousal from "../Components/LandingPage/Landingpage"
import {Login} from "../Components/Login/Login"
import { Navbar } from '../Components/Navbar/Navbar'
import { YellowNav } from '../Components/Navbar/YellowNav'
import Profile from '../Components/User Profile/profile'
import Footer from '../Pages/Footer/FooterMain' 
import RetalCarsMain from '../Pages/Rental-cars-list/RentalCarsMain';
import CarDetailsMain from '../Pages/CarDetails/CarDetailsMain';

const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Navbar />
                    <Carousal />
                    <Footer />
                </Route>
                <Route path="/user/login">
                    <YellowNav />
                    <Login />
                    <Footer />
                </Route>
                <Route path="/car-list">
                    <YellowNav />
                    <RetalCarsMain />
                    <Footer />
                </Route>

                <Route path="/booking-details">
                    <YellowNav />
                    <CarDetailsMain />
                    <Footer />
                </Route>
                <Route path="/profile">
                    <YellowNav />
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}

export {Routes}
