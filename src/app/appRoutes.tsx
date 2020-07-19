import React, { lazy } from "react";
import { Redirect, RouteProps } from "react-router";

const DashboardPage = lazy(() => import("./views/pages/Dashboard"));
const NotFoundPage = lazy(() => import("./views/pages/NotFound"));

interface IRouteProps extends RouteProps {
    path: string;
}

const appRoutes: IRouteProps[] = [
    {
        path: "/",
        component: DashboardPage,
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
