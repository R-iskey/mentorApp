import { IStore } from "../typings/IStore";
import { Reducer } from "react";
import { Action } from "@reduxjs/toolkit";

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore: Function) => (
    reducer: Reducer<IStore, Action>,
    initialState: IStore,
    enhancer: any
) => {
    const monitoredReducer = (state: IStore, action: Action) => {
        const start = performance.now();
        const newState = reducer(state, action);
        const end = performance.now();
        const diff = round(end - start);

        console.log('reducer process time:', diff);

        return newState
    };

    return createStore(monitoredReducer, initialState, enhancer)
};

export default monitorReducerEnhancer;
