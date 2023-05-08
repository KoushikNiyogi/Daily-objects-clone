
import{
    CART_FAILURE,
    CART_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    ADD_CART_SUCCESS
} from "./actionTypes" 

  const initialState = {
    isLoading : false,
    products : JSON.parse(localStorage.getItem("cart"))||[],
    singleProduct : JSON.parse(localStorage.getItem("singleproduct"))||null,
    isError : false
}

export const reducer = (state = initialState,{type,payload})=>{
  console.log(payload)
  switch(type){
    case CART_REQUEST : return {
        ...state,
        isLoading : true
    }
    case GET_SINGLE_PRODUCT_SUCCESS : return {
        ...state,
        singleProduct : payload,
        isLoading : false,
    }
    case CART_FAILURE : return {
        ...state,
        isLoading :false,
        isError : true
    }
    case ADD_CART_SUCCESS : return {
        ...state,
        isLoading : false,
        products : payload
    }
    default : return state
  }
}