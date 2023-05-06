import axios from "axios"
import {
    WISHLIST_REQUEST,
    WISHLIST_FAILURE,
    ADD_WISHLIST_SUCCESS
}  from "./actionTypes"

export const addToWishlist = (token,item)=>(dispatch)=>{
    
      dispatch({ type: WISHLIST_REQUEST });
      axios({
        method: 'post',
        url: `http://localhost:8080/wishlist/add`,
        data : item,
        headers : {
            Authorization : `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => dispatch({ type: WISHLIST_FAILURE }));
}