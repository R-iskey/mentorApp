import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppLayout from "./views/layouts/AppLayout";
import appRoutes from "./appRoutes";
import { Loading } from "./views/shared/Loading/Loading";

export default function RouterOutlet() {
    return (
        <Suspense fallback={<Loading tip="Loading page."/>}>
            <Switch>
                {appRoutes.map((route: any) => {
                    return (
                        <Route key={route.path} path={route.path} exact={route.exact}>
                            <AppLayout>
                                <route.component/>
                            </AppLayout>
                        </Route>
                    );
                })}
            </Switch>
        </Suspense>
    );
}
