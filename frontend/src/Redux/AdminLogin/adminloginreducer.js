import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./adminloginactiontype";

let initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: localStorage.getItem("adminToken")||"",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
     case LOGOUT_SUCCESS:return{
      ...state,
      isAuth:false,
      token:""
     }
      default:
      return state;
  }
};
