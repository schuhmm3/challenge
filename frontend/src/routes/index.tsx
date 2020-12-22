
import React from "react";
/** Libraries */
import { BrowserRouter, Switch, Route } from "react-router-dom";
/** Components */
import { PrivateRoute } from "./components/PrivateRoute";
import { routes } from "./config";
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
                {Array.isArray(routes) &&
                    routes.map((route: any, index: number) => {
                        return (
                            <PrivateRoute
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
            </Switch>
        </BrowserRouter>
    )
}