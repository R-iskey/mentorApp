import { combineReducers } from "@reduxjs/toolkit";

import routerReducers from "@store/router";
import commonReducer from "@store/common";

export default (history: any) => {
    return combineReducers({
        router: routerReducers(history),
        common: commonReducer,
    });
}


