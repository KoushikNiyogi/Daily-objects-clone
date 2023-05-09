
import * as types from "./userloginactiontype"

const initlogin ={
    isError:false,
    isloading:false,
    isAuth:false,
    token:JSON.parse(localStorage.getItem("token"))||null,
    user:JSON.parse(localStorage.getItem("user"))||[]
}
export const Loginreducer = (state = initlogin,action)=>{
     
    switch(action.type){
         case types.GETLOGINDATAREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.GETLOGINDATASUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                isAuth:true,
                token:action.payload.token,
                user:action.payload.user
            }
         }
         case types.GETLOGINDATAFALIURE:{
            return{
                ...state,
                isError:true,
                isloading:false,      
            }
        }
        case types.LOGOUTUSER:{
            return{
                ...state,
                token:null,
                isAuth:false
            }
        }
          default: return state
    }
   
}