import { IStore } from "../../typings/IStore";
import { createSelector } from "@reduxjs/toolkit";

const commonSelector = (state: IStore) => state.common;

const userProfileInfoSelector = createSelector([commonSelector], common => common.currentUser.metadata);

const userGroupsSelector = createSelector([commonSelector], common => common.currentUser.groups);

const commonSel = {
    commonSelector,
    userProfileInfoSelector,
    userGroupsSelector
}

export default commonSel;
