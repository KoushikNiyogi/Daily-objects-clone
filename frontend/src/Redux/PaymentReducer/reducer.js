import{
  EDIT_PAYMENT_REQUEST,EDIT_PAYMENT_SUCCESS,EDIT_PAYMENT_FAILURE
} from "./actionTypes" 

  const initialState = {
    isLoading : false,
    isError : false
}

export const reducer = (state = initialState,{type,payload})=>{
  console.log(payload)
  switch(type){
    case EDIT_PAYMENT_REQUEST : return {
        ...state,
        isLoading : true
    }
    case EDIT_PAYMENT_SUCCESS: return {...state, isLoading: false};
    case EDIT_PAYMENT_FAILURE : return {
        ...state,
        isLoading :false,
        isError : true
    }
    default : return state
  }
}