import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Carousal from "../Components/LandingPage/Landingpage"
import {Login} from "../Components/Login/Login"
import { Navbar } from '../Components/Navbar/Navbar'
import { YellowNav } from '../Components/Navbar/YellowNav'

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
            </Switch>
        </div>
    )
}

export {Routes}
