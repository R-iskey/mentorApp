import { createSlice } from "@reduxjs/toolkit";
import { ICommonStore, ICurrentUser } from "@store/common/typings";
import operations from "./operations";

const initialState: ICommonStore = {
    currentUser: {
        metadata: {},
        groups: []
    } as ICurrentUser,
    isAuth: false,
    error: {}
};

const {fetchLogin, fetchCurrentUser, postNewGroup} = operations;

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchLogin.fulfilled, (state) => {
            state.isAuth = true;
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.isAuth = false;
        });
        builder.addCase(fetchCurrentUser.pending, (state) => {
            state.error = {};
            state.currentUser = {
                metadata: {},
                groups: []
            } as ICurrentUser;
        });
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        builder.addCase(fetchCurrentUser.rejected, (state, action) => {
            state.error = action.error;
        });
        builder.addCase(postNewGroup.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
    }
});
