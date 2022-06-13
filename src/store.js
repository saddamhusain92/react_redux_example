import { legacy_createStore } from "redux";
import { rootraducer } from "./Raducer";
 const store = legacy_createStore(rootraducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store