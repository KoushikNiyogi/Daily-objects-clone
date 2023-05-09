import react, { useState, useEffect } from "react"
import { CategoryNav } from "../Components/CategoryNav"
// import ProductList from "../Components/ProductList"
import Productcard from "../Components/Admin/AdminComponents/Card/Productcard"
import { ProductList } from "../Components/ProductList"
import CombinedFilter_sort from "../Components/SearchPage.jsx/CombinedFilter_sort"
import { Button } from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from '../Redux/CategoryPage/Action';



export const Categorypage = ()=> {
  const dispatch=useDispatch();

 

  useEffect(() => {
    dispatch(getProducts({category: []}))
  }, []);

  return(
    <div>
      
       <CategoryNav/>

      <ProductList/>
    </div>
   


  )

}