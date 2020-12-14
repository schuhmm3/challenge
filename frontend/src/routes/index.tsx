
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
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
                <Route
                    key="home"
                    path="/"
                    component={Home}             
                />
            </Switch>
        </BrowserRouter>
    )
}