import{
    SEARCH_PRODUCT_FAILURE,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS
} from "./ActionType";

const initialState = {
    isLoading : false,
    products : JSON.parse(localStorage.getItem("searchpage"))||[],
    isError : false
}


export const Reducer = (state = initialState,{type,payload})=>{
  switch(type){
    case SEARCH_PRODUCT_REQUEST : return {
        ...state,
        isLoading : true
    }
    case SEARCH_PRODUCT_SUCCESS : return {
        ...state,
        isLoading : false,
        products : payload
    }
    case SEARCH_PRODUCT_FAILURE : return {
        ...state,
        isLoading :false,
        isError : true
    }
    default : return state
  }
}