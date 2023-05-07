import axios from "axios"
import{
    SEARCH_PRODUCT_FAILURE,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS
} from "./ActionType";


export const getSearchProducts = (params)=>(dispatch)=>{
    let obj = {
        params: params,
      };
      console.log(obj);
      dispatch({ type: SEARCH_PRODUCT_REQUEST });
      axios
        .get(`http://localhost:8080/product/search`, obj)
        .then((res) => {
          localStorage.setItem("searchpage",JSON.stringify(res.data.Data))
          return dispatch({
            type: SEARCH_PRODUCT_SUCCESS,
            payload: res.data.Data,
          });
        })
        .catch((err) => dispatch({ type: SEARCH_PRODUCT_FAILURE }));
}