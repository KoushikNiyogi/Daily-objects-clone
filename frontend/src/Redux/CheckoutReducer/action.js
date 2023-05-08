import { GETUSERFALIURE,GETUSERPENDING, GETUSERSUCCESS } from "./actiontype"
import axios from "axios"

  export const getuserAction = ()=>(dispatch)=>{
    console.log("getuserAction called");
    dispatch({type: GETUSERPENDING})
    return axios.get(`https://pajamas-bonobo.cyclic.app//user/`)
    .then((res)=>{
      dispatch({type: GETUSERSUCCESS ,payload:res.data})
      console.log(res);
    })
    .catch((err)=>{
      dispatch({type: GETUSERFALIURE})
      console.log(err);
    })
  }
   
  


