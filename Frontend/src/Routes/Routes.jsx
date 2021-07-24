import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Carousal from "../Components/LandingPage/Landingpage"
import {Login} from "../Components/Login/Login"

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Carousal />
                </Route>
                <Route path="/user/login">
                    <Login />
                </Route>
            </Switch>
            
        </div>
    )
}

export {Routes}
