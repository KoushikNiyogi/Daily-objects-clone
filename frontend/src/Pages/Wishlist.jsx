import React, { useEffect } from 'react'
import {wishlist} from "../Constants/Dashboard/DashboardConstants"
import WishListCard from '../Components/Dashboard/WishListCard';
const Wishlist = () => {
    const [Data,setData] = React.useState([]);
    useEffect(()=>{

    },[])
  return (
    <div>
     {
     wishlist.map((item)=>{
       return <WishListCard product={item}/>
     })
     }
    </div>
  )
}

export default Wishlist