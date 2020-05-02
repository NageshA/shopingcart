import { combineReducers } from "redux";
import simpleReducer from './simpleReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
export default combineReducers({
    simpleReducer,
    cartReducer,
    productReducer
})