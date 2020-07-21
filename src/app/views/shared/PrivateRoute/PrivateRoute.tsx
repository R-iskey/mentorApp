// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import { useSelector } from "react-redux";
import { commonSel } from "@store/common";
import React from "react";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({children, ...rest}: any) {
    const {isAuth} = useSelector(commonSel.commonSelector);

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
