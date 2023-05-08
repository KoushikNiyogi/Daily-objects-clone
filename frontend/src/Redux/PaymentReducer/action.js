import axios from "axios"
import{
  EDIT_PAYMENT_REQUEST,EDIT_PAYMENT_SUCCESS,EDIT_PAYMENT_FAILURE
} from "./actionTypes"

export const UpdatePaymentAction = (token, id)=>(dispatch)=>{
  console.log("UpdatePaymentAction called");
  const headers = {
    Authorization: `${token}`
  };
  dispatch({type:  EDIT_PAYMENT_REQUEST})
  return axios({
    method: 'patch',
    url: `https://pajamas-bonobo.cyclic.app/cart/update/${id}`,
    data: {
      payment : true
    },
    headers: headers
  })
  .then((res)=>{
    console.log(res);
    dispatch({type: EDIT_PAYMENT_SUCCESS})
    console.log(res);
  })
  .catch((err)=>{
    dispatch({type: EDIT_PAYMENT_FAILURE})
    console.log(err);
  })
  
}


// https://pajamas-bonobo.cyclic.app/cart