import {combineReducers} from "redux"
import { productData} from "./ProductReducers"
import  {cartData} from "./Reducers"
export default combineReducers({
    productData,
    cartData


})