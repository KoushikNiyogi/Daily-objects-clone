import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
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
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
export const login = (userData) => (dispatch) => {
  dispatch(loginRequest());

  return axios
    .post(`https://reqres.in/api/login`, userData)
    .then((res) => {
      dispatch(loginSuccess(res.data.token));
      console.log(res)
    })
    .catch((err) => {
      dispatch(loginFailure());
      console.log(err);
    });
};