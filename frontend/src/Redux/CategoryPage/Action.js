import axios from "axios"
import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS, } from "./ActionTypes"


export const getProducts = (params)=> async(dispatch) => {
    let obj = {
        params: params,
      };
      console.log(obj);
      dispatch({ type: GET_PRODUCTS_REQUEST });
      axios
        .get(`https://pajamas-bonobo.cyclic.app/product/`, obj)
        .then((res) => {
            console.log(res)
          localStorage.setItem("categorypage",JSON.stringify(res.data.Data))
          return dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res.data.Data,
          });
        })
        .catch((err) => dispatch({ type: GET_PRODUCTS_FAILURE }));
    }




export const filterProduct = (params) => (dispatch) => {
    console.log(params)
}


