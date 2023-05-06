

import axios from "axios"
import * as types from "./userloginactiontype"

  export const getlogindata = (data)=>(dispatch)=>{

    dispatch({type:types.GETLOGINDATAREQUEST})
    return axios.post("http://localhost:8080/user/login",data)
    .then(r=>{
       localStorage.setItem("user",JSON.stringify(r.data.user))
       return dispatch({type:types.GETLOGINDATASUCCESS,payload:r.data})})
    .catch(e=>dispatch({type:types.GETLOGINDATAFALIURE}))
    }
   
    export const logoutUser = (dispatch)=>{
      localStorage.removeItem("token");
      dispatch({type:types.LOGOUTUSER})
    }


