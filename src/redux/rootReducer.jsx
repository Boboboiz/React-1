import { combineReducers } from "redux";
// import { demoReducer } from "./demoReducer";
// import { cartReducer } from "./cartReducer";
// import categoryReducer from "./categoryReducer"
// import productReducer from "./productReducer"
import userReducer from './userReducer'
//export {rootReducer} = export const rootReducer = combineReducerscers({});
const rootReducer = combineReducers({
    // demoReducer, // ES6 object literal
    // cartReducer
    // categoryReducer,
    // productReducer,
    userReducer
});

export default rootReducer