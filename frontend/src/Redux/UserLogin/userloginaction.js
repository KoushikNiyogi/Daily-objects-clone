import axios from "axios"

import * as types from "./userloginactiontype"

  export const getlogindata = (data)=>(dispatch)=>{

    dispatch({type:types.GETLOGINDATAREQUEST})

    return axios.post("https://blue-amused-meerkat.cyclic.app/user/login",data)
    .then(r=>{
      console.log(r)
       return dispatch({type:types.GETLOGINDATASUCCESS,payload:r.data})
    })
    .catch(e=>dispatch({type:types.GETLOGINDATAFALIURE}))
    }
   

    
    export const logoutUser = (dispatch)=>{
      localStorage.removeItem("token");
      dispatch({type:types.LOGOUTUSER})
    }

