import axios from "axios"
import{
  EDIT_PAYMENT_REQUEST,EDIT_PAYMENT_SUCCESS,EDIT_PAYMENT_FAILURE
} from "./actionTypes"

export const UpdatePaymentAction = (token,dataobj, id)=>(dispatch)=>{
  console.log("UpdatePaymentAction called");
  const headers = {
    Authorization: `${token}`
  };
  dispatch({type:  EDIT_PAYMENT_REQUEST})
  return axios({
    method: 'PATCH',
    url: `https://pajamas-bonobo.cyclic.app/cart/update/${id}`,
    data: dataobj,
    headers: headers
  })
  .then((res)=>{
    dispatch({type: EDIT_PAYMENT_SUCCESS})
    console.log(res);
  })
  .catch((err)=>{
    dispatch({type: EDIT_PAYMENT_FAILURE})
    console.log(err);
  })
  
}


// https://pajamas-bonobo.cyclic.app/cart