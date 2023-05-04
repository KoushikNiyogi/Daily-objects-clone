import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS} from "./actionTypes";

const initialState = {
    isLoading : false,
    isError: false,
    address : {}    
}

export const reducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case ADDRESS_REQUEST_PENDING : return {...state, isLoading:true}
        case POST_ADDRESS_SUCCESS : return {...state, isLoading:false, address : payload}
        case POST_ADDRESS_FAILURE : return {...state, isLoading:false, isError:true}
        default : return state
    }
}