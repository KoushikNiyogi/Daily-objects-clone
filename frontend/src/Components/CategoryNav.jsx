// import React from 'react'
import { useLocation, useSearchParams } from "react-router-dom";
import "./CategoryNav.css"

import React, { useEffect, useState } from 'react';
import { filterProduct } from "../Redux/CategoryPage/Action";
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from '../Redux/CategoryPage/Action';

export const CategoryNav = () => {
  const [searchParams, setSearchParam] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setcategory] = useState(initialCategory|| "")
  const location = useLocation()
  const dispatch=useDispatch();

  const handleChange = (value) => {
    setcategory(value)
    if (category != ""){
      
      setSearchParam({category:category})
     
    }
    
  }
  console.log(category)

  useEffect(()=> {
    let params = {}
    if (searchParams.getAll("color").length != 0) {
      params["color"] = searchParams.getAll("color")
    }
    if (searchParams.get("sort") != undefined) {
      params["sort"] = searchParams.get("sort")
    }
    if (searchParams.get("price_gt") != undefined && searchParams.get("price_lt") != undefined) {
      params["price_gt"] = searchParams.get("price_gt")
      params["price_lt"] = searchParams.get("price_lt")
    }
    if (category != "") {
      params["category"] = category
    }
    if(location.search!="" && Object.keys(params).length!=0){
      setSearchParam(params)
    dispatch(getProducts(params))
    }
    
   
  }, [category, location.search])

  return (
    <div>
      <div className='category-main'>

        <div>
          <img onClick={()=> handleChange("")}
          src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-71,h-70,dpr-1" alt="" />
          <h3>ALL</h3>
        </div>

        <div>
          <img onClick={()=> handleChange("Watch")}
          src="https://images.dailyobjects.com/marche/icons/category/apple-watchband-desktop-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1" alt="" />
          <h3>WATCHBANDS</h3>
        </div>

        <div>
          <img onClick={()=> handleChange("Messenger Bags")}
           src="https://images.dailyobjects.com/marche/product-images/1202/terracotta-red-bask-messenger-bag-images/Terracotta-Red-Coach-Messenger-Bag-2n.png?tr=cm-pad_resize,v-2,w-352,h-434,dpr-1,https://images.dailyobjects.com/marche/product-images/1202/terracotta-red-bask-messenger-bag-images/Terracotta-Red-Bask-Messenger-Bag-1.png?tr=cm-pad_resize,v-2,w-683,h-535,dpr-1,https://images.dailyobjects.com/marche/product-images/1202/terracotta-red-bask-messenger-bag-images/Terracotta-Red-Coach-Messenger-Bag-2n.png?tr=cm-pad_resize,v-2,w-683,h-535,dpr-1" alt="" />
          <h3>MESSENGER BAGS</h3>
        </div>

        <div>
          <img onClick={()=> handleChange("Pedal Backpack")}
           src="https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-768,h-636,dpr-1" alt="" />
          <h3>PEDAL BACKPACK</h3>
        </div>

        <div>
          <img onClick={()=> handleChange("desk")}
          src="https://images.dailyobjects.com/marche/product-images/1702/desk-trio-bundle-limited-edition-images/Desk-Trio-Bundle.png?tr=cm-pad_resize,v-2,w-768,h-636,dpr-1" alt="" />
          <h3>DESKS</h3>
        </div>
      </div>



    </div>
  )

}


