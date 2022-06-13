import { combineReducers } from "redux";
import { increementNum } from "./myfun";
import { loginStatus } from "./login";
 export const rootraducer = combineReducers({
    increementNum,loginStatus
})