import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./SearchPageReducer/Reducer";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import {Reducer as wishlistReducer} from "./WishlistReducer/reducer"
import {reducer as CartReducer} from "./CartReducer/reducer"
import thunk from "redux-thunk";


const RootReducer = combineReducers({
    SearchReducer : SearchReducer,
    Loginreducer,usersignupreducer,wishlistReducer,CartReducer
  });
  
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));