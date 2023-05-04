import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS } from "./actionTypes"
import axios from 'axios'
//put the url

export const addAddressAction = (dataobj, id) => (dispatch) =>{
    dispatch({type : ADDRESS_REQUEST_PENDING})

    return axios.patch(`theurl${id}`, dataobj)
    .then(()=>dispatch({type: POST_ADDRESS_SUCCESS}))
    .catch(()=>dispatch({type : ADDRESS_REQUEST_FAILURE}))
}