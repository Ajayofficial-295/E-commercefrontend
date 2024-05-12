import { combineReducers } from "redux";
import cartReducer  from "./Reducer";
import { configureStore} from "@reduxjs/toolkit";
const rootReducer=combineReducers ({ 
    cartReducer:cartReducer

})
const Store=configureStore(({
 reducer:rootReducer    
    
}))
export default Store;