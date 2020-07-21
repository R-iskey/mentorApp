import { commonSlice } from "./commonSlice";
import operations from "@store/common/operations";

type commonOpType = typeof commonSlice.actions & typeof operations;

console.log('worked');
export const commonOp: commonOpType = {
    ...commonSlice.actions,
    ...operations
}

export { default as commonSel } from "./selectors";
export default commonSlice.reducer;
