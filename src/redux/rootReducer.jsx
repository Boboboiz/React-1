import { combineReducers } from "redux";
import { demoReducer } from "./demoReducer";
import { cartReducer } from "./cartReducer";
//export {rootReducer} = export const rootReducer = combineReducerscers({});
const rootReducer = combineReducers({
    demoReducer, // ES6 object literal
    cartReducer
});

export default rootReducer