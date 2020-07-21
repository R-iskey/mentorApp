import { RouterState } from "connected-react-router";
import { ICommonStore } from "@store/common/typings";

export interface IStore {
    // connected-redux-router stuff
    router: RouterState;
    // contains global data for whole application
    common: ICommonStore;
}
