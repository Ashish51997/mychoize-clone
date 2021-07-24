import React from 'react'
import { Switch, Route } from 'react-router-dom';
import RentalCarsMain from '../Pages/Rental-cars-list/RentalCarsMain';
import ContactMain from '../Pages/Contact-us/ContactMain';
import FooterMain from '../Pages/Footer/FooterMain';
import ErrorPage from '../ErrorPage';
import CarDetailsMain from '../Pages/CarDetails/CarDetailsMain';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <RentalCarsMain />
                <FooterMain />
            </Route>

            <Route path="/rent-cars">
                <RentalCarsMain />
                <FooterMain />
            </Route>

            <Route path="/contact-us">
                <ContactMain />
                <FooterMain />
            </Route>

            <Route path="/car-details">
                <CarDetailsMain />
                <FooterMain />
            </Route>

            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Routes;