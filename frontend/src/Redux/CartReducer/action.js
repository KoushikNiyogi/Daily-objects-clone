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
        url: `http://localhost:${process.env.REACT_APP_BASE_URL}/product/singleproduct/${id}`,
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
  dispatch({ type: CART_REQUEST });
  axios({
    method: 'post',
    url: `http://localhost:${process.env.REACT_APP_BASE_URL}/cart/add`,
    data: data,
    headers: headers
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_CART_SUCCESS })
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


export const GetAllCartProductsAction = (id) => (dispatch)  => {
  console.log("GetAllCartProductsAction called");  
  dispatch({ type: CART_REQUEST });
  const userId = id
  axios({
    method: 'GET',
    url: `https://pajamas-bonobo.cyclic.app/cart`,
    data: userId,
  })
  .then((res) => {
                  console.log(res)
                  dispatch({ type: GET_CART_PRODUCTS_SUCCESS,  payload: res.data.Data})})
  .catch((err) => {
                dispatch({ type: CART_FAILURE })
                console.log(err)
  });

}

export const deleteCartProductAction =(id)=>(dispatch)=>{
  console.log("deleteCartProductAction called");  
  dispatch({ type: CART_REQUEST });
  axios({
    method: 'DELETE',
    url: `https://pajamas-bonobo.cyclic.app/cart/delete/${id}`,
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

export const UpdateCartProductAction = (dataobj, id)=>(dispatch)=>{
  console.log("UpdateCartProductAction called"); 
  dispatch({type:  CART_REQUEST})
  return axios.patch(`https://pajamas-bonobo.cyclic.app/cart/update/${id}`, dataobj)
  .then((res)=>{
    dispatch({type: UPDATE_CART_PRODUCT_SUCCESS})
    console.log(res);
  })
  .catch((err)=>{
    dispatch({type: CART_FAILURE})
    console.log(err);
  })
  
}


// https://pajamas-bonobo.cyclic.app/cart