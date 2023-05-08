import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS } from "./actionTypes"
import axios from 'axios'
//put the url

export const addAddressAction = (address, id) => (dispatch) =>{
    console.log("addAddressAction called");
    dispatch({type : ADDRESS_REQUEST_PENDING})

    return axios.patch(`https://pajamas-bonobo.cyclic.app/user          /${id}`, address)
    .then((res)=>{
        dispatch({type: POST_ADDRESS_SUCCESS})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type : ADDRESS_REQUEST_FAILURE})
        console.log(err)
    })
}




