import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./SearchPageReducer/Reducer";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import { reducer as adminloginReducer } from "./AdminLogin/adminloginreducer";
import { ProductReducer } from "./CategoryPage/Reducer";
import {reducer as AddressReducer} from "./AddressReducer/reducer"

import thunk from "redux-thunk";
const RootReducer = combineReducers({
  SearchReducer: SearchReducer,
  Loginreducer,
  usersignupreducer,
  adminloginReducer,
  ProductReducer
  AddressReducer
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

