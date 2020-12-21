
import React from "react";
/** Libraries */
import { BrowserRouter, Switch, Route } from "react-router-dom";
/** Components */
import { PrivateRoute } from "./components/PrivateRoute";
import { About } from "pages/About";
import { Home } from "pages/Home";
import { Document } from "pages/Document";
import { Login } from "pages/Login";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    key="login"
                    path="/login"
                    component={Login}             
                />
                <PrivateRoute
                    key="home"
                    exact={true}
                    path="/"
                    component={Home}             
                />
                <PrivateRoute
                    key="about"
                    exact={true}
                    path="/About"
                    component={About}             
                />
                <PrivateRoute
                    key="document/:id"
                    exact={true}
                    path="/document/:id"
                    component={Document}             
                />
            </Switch>
        </BrowserRouter>
    )
}