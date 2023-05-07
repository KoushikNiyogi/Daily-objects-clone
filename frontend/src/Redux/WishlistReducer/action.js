import axios from "axios"
import {
  WISHLIST_REQUEST,
  WISHLIST_FAILURE,
  ADD_WISHLIST_SUCCESS,
  GET_WISHLIST_SUCCESS
} from "./actionTypes"

export const addToWishlist = (token, item, toast) => (dispatch) => {
  const headers = {
    Authorization: `${token}`
  };
  const data = item;
  dispatch({ type: WISHLIST_REQUEST });
  axios({
    method: 'post',
    url: `http://localhost:${process.env.REACT_APP_BASE_URL}/wishlist/add`,
    data: data,
    headers: headers
  })
    .then((res) => {
      dispatch({ type: ADD_WISHLIST_SUCCESS })
      toast({
        title: res.data.msg,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: WISHLIST_FAILURE })
    });
}


export const getWishListItems = (token, item) => (dispatch) => {
  const headers = {
    Authorization: `${token}`
  };
  const data = {
    userId: item
  };
  dispatch({ type: WISHLIST_REQUEST });
  axios({
    method: 'get',
    url: `http://localhost:${process.env.REACT_APP_BASE_URL}/wishlist/`,
    data: data,
    headers: headers
  })
    .then((res) => {
      dispatch({ type: GET_WISHLIST_SUCCESS, payload: res.data.Data })
      localStorage.setItem("wishlist", JSON.stringify(res.data.Data))
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: WISHLIST_FAILURE });
      console.log(err);
    });
}


export const deleteWishlistItem = (token, id) => (dispatch) => {
  let data = {
    _id: id
  }
  return axios({
    method: "delete",
    url: `http://localhost:${process.env.REACT_APP_BASE_URL}/wishlist/delete/${id}`,
    headers: {
      Authorization: token
    },
    data: data
  })
    .then(res => console.log(res))
    .catch(res => console.log(res))
}