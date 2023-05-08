
import{
    CART_FAILURE,
    CART_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    ADD_CART_SUCCESS,
    GET_CART_PRODUCTS_SUCCESS,
    DELETE_CART_PRODUCT_SUCCESS,
    UPDATE_CART_PRODUCT_SUCCESS
} from "./actionTypes" 

  const initialState = {
    isLoading : false,
    products : JSON.parse(localStorage.getItem("cart"))||[],
    singleProduct : JSON.parse(localStorage.getItem("singleproduct"))||{},
    allcartProducts:[],
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
    case ADD_CART_SUCCESS : return {
        ...state,
        isLoading : false,
        products : payload
    }
    
    case GET_CART_PRODUCTS_SUCCESS : return {...state, isLoading :false,isError : false, allcartProducts: payload}
    case DELETE_CART_PRODUCT_SUCCESS : return {...state, isLoading:false, isError:false}
    case UPDATE_CART_PRODUCT_SUCCESS: return {...state, isLoading: false, allcartProducts: state.data.map((item) => item.id === payload.id ? payload : item)};
    
    case CART_FAILURE : return {
      ...state,
      isLoading :false,
      isError : true
  }
    default : return state
  }
}