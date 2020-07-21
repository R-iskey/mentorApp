import { push } from "connected-react-router";
import { Dispatch } from "react";

const gotoPage = (page: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(push(page));
    }
};

export default {
    gotoPage
};
