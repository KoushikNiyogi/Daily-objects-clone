import { GETUSERFALIURE,GETUSERPENDING,GETUSERSUCCESS } from "./actiontype"

const initialState ={
    isError:false,
    isloading:false,
    user:[]
}
export const reducer = (state = initialState,{type, payload})=>{     
    switch(type){
         case GETUSERPENDING:{ return{...state,isError:false,isloading:true}}
         case GETUSERSUCCESS:{return{...state,isError:false,isloading:false,user:payload}}
         case GETUSERFALIURE:{return{...state,isError:true,isloading:false}}        
            default: return state
    }   
}