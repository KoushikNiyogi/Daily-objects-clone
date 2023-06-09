import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { Reducer as SearchReducer } from "./SearchPageReducer/Reducer";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import { Reducer as wishlistReducer } from "./WishlistReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
import { reducer as adminloginReducer } from "./AdminLogin/adminloginreducer";
import { ProductReducer } from "./CategoryPage/Reducer";
import { reducer as AddressReducer } from "./AddressReducer/reducer";
import { reducer as CheckoutReducer } from "./CheckoutReducer/reducer";
import { reducer as PaymentReducer } from "./PaymentReducer/reducer";

import thunk from "redux-thunk";
const RootReducer = combineReducers({
  SearchReducer: SearchReducer,
  Loginreducer,
  usersignupreducer,
  wishlistReducer,
  CartReducer,
  adminloginReducer,
  ProductReducer,
  AddressReducer,
  CheckoutReducer,
  PaymentReducer,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
