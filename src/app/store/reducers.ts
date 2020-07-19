import { combineReducers } from "@reduxjs/toolkit";

import routerReducers from "@store/router";

export default (history: any) => {
    return combineReducers({
        router: routerReducers(history)
    });
}


