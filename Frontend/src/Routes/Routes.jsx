import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Carousal from "../Components/LandingPage/Landingpage"
import {Login} from "../Components/Login/Login"
import { Navbar } from '../Components/Navbar/Navbar'
import { YellowNav } from '../Components/Navbar/YellowNav'
import Profile from '../Components/User Profile/profile'

const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Navbar />
                    <Carousal />
                </Route>
                <Route path="/user/login">
                    <YellowNav />
                    <Login />
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
