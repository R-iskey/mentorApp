import { push } from "connected-react-router";

const gotoPage = (page: string) => (dispatch: Function) => dispatch(push(page));

export default {
    gotoPage
};
