import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./SearchPageReducer/Reducer";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import thunk from "redux-thunk";
import { ProductReducer } from "./CategoryPage/Reducer";
import {reducer as AddressReducer} from "./AddressReducer/reducer"


const RootReducer = combineReducers({
    SearchReducer : SearchReducer,
    Loginreducer,usersignupreducer,ProductReducer,
    AddressReducer
  });
  
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));