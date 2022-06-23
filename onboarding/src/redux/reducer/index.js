import { combineReducers } from "redux";
import { genericReducer } from "./genericReducer";

const reducers = combineReducers({
    generic: genericReducer
})

export default reducers