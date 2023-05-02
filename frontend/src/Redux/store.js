import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";


const RootReducer = combineReducers({
    
  });
  
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));