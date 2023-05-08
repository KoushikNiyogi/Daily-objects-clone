import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS } from "./actionTypes"
import axios from 'axios'
//put the url

export const addAddressAction = (token,address, id) => (dispatch) =>{
    console.log("addAddressAction called");
    const headers = {
        Authorization: `${token}`
      }; 
    dispatch({type : ADDRESS_REQUEST_PENDING})
    return axios({
        method: 'PATCH',
        url: `https://pajamas-bonobo.cyclic.app/user/update/${id}`,
        data: address,
        headers: headers
      })
    .then((res)=>{
        dispatch({type: POST_ADDRESS_SUCCESS})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type : ADDRESS_REQUEST_FAILURE})
        console.log(err)
    })
}




