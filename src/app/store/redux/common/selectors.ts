import { IStore } from "../../typings/IStore";

const commonSelector = (state: IStore) => state.common;

const commonSel = {
    commonSelector
}

export default commonSel;
