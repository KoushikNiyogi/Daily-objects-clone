import axios from "axios"
import{
    CART_FAILURE,
    CART_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    ADD_CART_SUCCESS,
    GET_CART_PRODUCTS_SUCCESS,
    DELETE_CART_PRODUCT_SUCCESS,
    UPDATE_CART_PRODUCT_SUCCESS
} from "./actionTypes" 


export const getSingleProduct =(id)=>(dispatch)=>{
      console.log("im called")

      
      dispatch({ type: CART_REQUEST });
      axios({
        method: 'get',
        url: `https://pajamas-bonobo.cyclic.app/product/singleproduct/${id}`,
      })
        .then((res) => {
          console.log(res)
          dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data.Data })
          localStorage.setItem("singleproduct", JSON.stringify(res.data.Data))
        })
        .catch((err) => {
          dispatch({ type: CART_FAILURE });
          console.log(err);
        });
}

export const addProductCart = (token, item, toast) => (dispatch) => {
  const headers = {
    Authorization: `${token}`
  };
  const data = item;
  console.log(data)
  dispatch({ type: CART_REQUEST});
  axios({
    method: 'post',
    url: `https://pajamas-bonobo.cyclic.app/cart/add`,
    data: data,
    headers: headers
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_CART_SUCCESS,payload : res.data.newProduct  })
      toast({
        title: res.data.msg,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CART_FAILURE })
    });
}


export const GetAllCartProductsAction = (token,id) => (dispatch)  => {

  console.log("GetAllCartProductsAction called");  
  const userId = id;
  const headers = {
    Authorization : `${token}` 
  }

  dispatch({ type: CART_REQUEST });
  axios({
    method: 'GET',
    url: `https://pajamas-bonobo.cyclic.app/cart`,
    data:{
      userId
    },
    headers
  })
  .then((res) => {
                  if(res.data.Data==undefined){
                    dispatch({ type: GET_CART_PRODUCTS_SUCCESS,  payload: []})
                  }else{
                  dispatch({ type: GET_CART_PRODUCTS_SUCCESS,  payload: res.data.Data})}})
  .catch((err) => {
                dispatch({ type: CART_FAILURE })
                console.log(err)
  });

}


export const deleteCartProductAction =(token,id)=>(dispatch)=>{
  console.log("deleteCartProductAction called");  
  const headers = {
    Authorization : `${token}` 
  }

  dispatch({ type: CART_REQUEST });

  return axios({
    method: 'delete',
    url: `https://pajamas-bonobo.cyclic.app/cart/delete/${id}`,
    headers: headers
  })
    .then((res) => {
      dispatch({ type: DELETE_CART_PRODUCT_SUCCESS})
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
      console.log(err);
    });
}


export const UpdateCartProductAction = (token,val, id)=>(dispatch)=>{
  console.log("UpdateCartProductAction called"); 
  const headers = {
    Authorization : `${token}` 
  }
  const data = {
    quantity : val
  }
  console.log(headers,data);
  dispatch({type:  CART_REQUEST})
  return axios({
    method: 'patch',
    url: `https://pajamas-bonobo.cyclic.app/cart/update/${id}`,
    data: data,
    headers: headers
  })
  .then((res)=>{
    console.log(res);
    dispatch({type: UPDATE_CART_PRODUCT_SUCCESS})
  })
  .catch((err)=>{
    dispatch({type: CART_FAILURE})
    console.log(err);
  })
  
}


// https://pajamas-bonobo.cyclic.app/cart