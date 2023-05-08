import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS } from "./actionTypes"
import axios from 'axios'
//put the url

export const addAddressAction = (address, id) => (dispatch) =>{
    dispatch({type : ADDRESS_REQUEST_PENDING})

    return axios.patch(`https://pajamas-bonobo.cyclic.app/user          /${id}`, address)
    .then(()=>dispatch({type: POST_ADDRESS_SUCCESS}))
    .catch(()=>dispatch({type : ADDRESS_REQUEST_FAILURE}))
}




