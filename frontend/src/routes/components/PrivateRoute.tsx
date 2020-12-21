import React from "react";
/** Libraries */
import { Route, Redirect } from "react-router-dom";
/** Types */
import { PrivateRouteProps } from "../types";
/** Helpers */
import { checkLocalStorage } from "helpers/localStorage";

export const PrivateRoute = ({ component, path, exact }: PrivateRouteProps ) => {
    const isLoggedIn = checkLocalStorage();

    return isLoggedIn ? (
        <Route
            path={path}
            exact={exact}
            component={component}
        />
    ) : (
        <Redirect to="/login" />
    );
}
