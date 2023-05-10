import { ADDRESS_REQUEST_FAILURE, ADDRESS_REQUEST_PENDING, POST_ADDRESS_SUCCESS } from "./actionTypes"
import axios from 'axios'
//put the url

export const addAddressAction = (token,addressobj, id) => (dispatch) =>{
    console.log(addressobj,id);
    const headers = {
        Authorization: `${token}`
      }; 
    const address = {
        address : addressobj
    }
    dispatch({type : ADDRESS_REQUEST_PENDING})

    return axios({
        method: 'PATCH',
        url: `https://pajamas-bonobo.cyclic.app/user/updateaddress/${id}`,
        data: address,
        headers: headers
      })

    .then((res)=>{
        console.log(res);
        dispatch({type: POST_ADDRESS_SUCCESS})
        if(res.data.user!=undefined){
        localStorage.setItem("user",JSON.stringify([res.data.user]))
        }
    })
    .catch((err)=>{
        dispatch({type : ADDRESS_REQUEST_FAILURE})
        console.log(err)
    })
}




