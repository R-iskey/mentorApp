import rootReducer from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import monitorReducerEnhancer from "./enhancers/monitorPerformanceEnhancer";
import React from "react";
import { isDevelopment } from "../constants";

let store;
let history = createBrowserHistory();

export const getHistory = () => history;

export default function (options: any = {}) {
    const enhancers = [];
    const middleware = [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
        routerMiddleware(getHistory()),
    ];

    if (isDevelopment) {
        const {monitorPerformance, logReduxActions, logUselessRenders} = options;
        // Enable redux performance logger from settings
        if (monitorPerformance) {
            enhancers.push(monitorReducerEnhancer);
        }
        if (logReduxActions) {
            const logger = createLogger({
                collapsed: true,
            });
            middleware.push(logger);
        }

        if (logUselessRenders) {
            try {
                const whyDidYouRender = require("@welldone-software/why-did-you-render");
                whyDidYouRender(React, {
                    trackHooks: true,
                    trackAllPureComponents: true,
                    collapseGroups: true,
                    titleColor: "green",
                    exclude: [/^antd/],
                    diffNameColor: "darkturquoise",
                    diffPathColor: "goldenrod",
                });
            } catch (e) {
                console.log(e);
            }
        }
    }

    store = configureStore({
        reducer: rootReducer(getHistory()),
        middleware,
        devTools: isDevelopment,
        enhancers: [],
    });

    return store;
}
