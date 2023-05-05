import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./Wishlist/Reducer";
import thunk from "redux-thunk";


const RootReducer = combineReducers({
    SearchReducer : SearchReducer
  });
  
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));