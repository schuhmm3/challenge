
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    key="home"
                    path="/home"
                    component={Home}             
                />
            </Switch>
        </BrowserRouter>
    )
}