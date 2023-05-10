import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "./adminloginactiontype";

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

const logOutUser =()=>{
  return {type : LOGOUT_SUCCESS}
}
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

export const login = (userData,toast) => (dispatch) => {

  console.log(userData)
  dispatch(loginRequest());

  return axios
    .post(`https://pajamas-bonobo.cyclic.app/admin/login`, userData)
    .then((res) => {
      console.log(res);
      toast({
        title: res.data.msg,
        status: "success",
        position: "top",
      });
      dispatch(loginSuccess(res.data.token));
      localStorage.setItem("adminToken", res.data.token);
    })
    .catch((err) => {
      dispatch(loginFailure());
      console.log(err);
    });
};

export const logoutUser = (dispatch)=>{
  dispatch(logOutUser())
}