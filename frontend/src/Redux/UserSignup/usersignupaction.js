import React from 'react'
import axios from "axios"
import * as types from "./usersignupactiontype"
const usersignupaction = (params) =>(dispatch) => {
    dispatch({type:types.POSTDATAREQUEST})
    return axios.post("https://blue-amused-meerkat.cyclic.app/user/register",params)
    .then(r=>dispatch({type:types.POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.POSTDATAFAILURE}))
}

export default usersignupaction
