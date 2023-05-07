import React, { useEffect } from 'react'
import {wishlist} from "../Constants/Dashboard/DashboardConstants"
import WishListCard from '../Components/Dashboard/WishListCard';
import { Box } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListItems } from '../Redux/WishlistReducer/action';
const Wishlist = () => {
    const [Data,setData] = React.useState([]);
    const {token,user} = useSelector(store => store.Loginreducer);
    const store = useSelector(store => store.wishlistReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getWishListItems(token,user.userId))
    },[])
    console.log(store);
  return (
    <Box>
     {
     store.products.length==0? <Box textAlign={"center"} fontSize={"2xl"}>No products in Wishlist</Box> : store.products.map((item)=>{
       return <WishListCard product={item}/>
     })
     }
    </Box>
    
  )
}

export default Wishlist