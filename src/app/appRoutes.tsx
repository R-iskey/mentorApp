import React, { lazy } from "react";
import { Redirect, RouteProps } from "react-router";

const ProfilePage = lazy(() => import("./views/pages/Profile"));
const RegisterPage = lazy(() => import("./views/pages/Auth/Register"));
const LoginPage = lazy(() => import("./views/pages/Auth/Login"));
const NotFoundPage = lazy(() => import("./views/pages/NotFound"));

interface IRouteProps extends RouteProps {
    path: string;
    private?: boolean;
}

const appRoutes: IRouteProps[] = [
    {
        path: "/",
        exact: true,
        render: () => <Redirect to={'/login'}/>
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true,
    },
    {
        path: "/register",
        component: RegisterPage,
        exact: true,
    },
    {
        path: "/profile",
        component: ProfilePage,
        private: true,
        exact: true,
    },
    {
        path: "/not-found",
        component: NotFoundPage,
        exact: true,
    },
    {
        path: "*",
        component: () => <Redirect to={"/not-found"}/>,
        exact: false,
    },
];

export default appRoutes;
