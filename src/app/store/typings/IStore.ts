import { RouterState } from "connected-react-router";
import { ICommonStore } from "@store/common/typings";

export interface IStore {
    router: RouterState;
    common: ICommonStore;
}
