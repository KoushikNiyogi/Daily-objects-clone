import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./Wishlist/Reducer";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import thunk from "redux-thunk";
import { ProductReducer } from "./CategoryPage/Reducer";

const RootReducer = combineReducers({
    SearchReducer : SearchReducer,
    Loginreducer,usersignupreducer,ProductReducer
  });
  
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));