import axios from "axios"
import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS, } from "./ActionTypes"


export const getProducts = ()=>(dispatch) => {
    
    dispatch({ type:GET_PRODUCTS_REQUEST });
    axios
        .get(`https://pajamas-bonobo.cyclic.app/product/`)
        .then((res) => {

           return dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data.Data });
        })
        .catch((e) => {
            dispatch({ type: GET_PRODUCTS_FAILURE});
        })
}



