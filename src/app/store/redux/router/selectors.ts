import { IStore } from "../../typings/IStore";

const routerSelector = (state: IStore) => state.router.location;

export default {
    routerSelector
}
