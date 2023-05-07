import React, { useEffect } from 'react'
import {
  Box,Text,Flex,Hide,Show
} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {useNavigate, useSearchParams} from "react-router-dom"
import DashboardDrawer from '../Components/Dashboard/Drwerresponsive'
import Wishlist from "./Wishlist"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Redux/UserLogin/userloginaction'
const Dashboard = () => {
  const dispatch = useDispatch();
  const {token,isAuth,user} = useSelector(store => store.Loginreducer)
  const store = useSelector(store => store.Loginreducer)
  const [Data,setData] = React.useState("");
  const [searchparams,setSearchparams] = useSearchParams();
  const navigate = useNavigate();


  const handleLogout =()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    searchparams.delete("page")
    dispatch(logoutUser);
  }

  const handleRoute = (path)=>{
   navigate(path,{replace:true,state:"/dashboard"});
  }

  const handlesearch = (data)=>{
    setSearchparams({page:data})
  }

  useEffect(()=>{
   console.log("Running useeffect",searchparams.get("page"))
  },[searchparams])
  console.log(user);
  return (
    <Box>
    <Navbar/>
    <Box mt={"150px"}>
     <Text  fontFamily={"Trade Gothic LT Pro, sans-serif"} fontSize='5xl' fontWeight={"bold"} textAlign={"center"}>MY ACCOUNT</Text>
      <Flex direction={{base:"column", xl:"row"}} borderTop={"1px solid #ededed"} height={"100vh"}>
        <Hide below='xl'>
          {
            token ? 
           <Box w={"20%"} padding={"10px"} borderRight={"1px solid #ededed"}>
             <Text textAlign={"left"} fontSize={"2xl"} fontWeight={"bold"}>DAILYESSENTIAL USER</Text>
             <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>{user[0].name} {user[0].email}</Text>
             <Box>
              <Flex onClick={()=>handlesearch("user")} cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Personal Info<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex onClick={()=>handlesearch("order")} cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>My Orders<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex onClick={()=>handlesearch("address")} cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Address Book<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex onClick={()=>handlesearch("wishlist")} cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleLogout()}>Logout<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
             </Box>
           </Box>
           : 
           <Box w={"20%"} padding={"10px"} borderRight={"1px solid #ededed"}>
            <Text textAlign={"left"} fontSize={"2xl"} fontWeight={"bold"}>GUEST</Text>
            <Box>
              <Flex cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleRoute("/signup")}>Register<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"2xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleRoute("/login")}>Login<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
             </Box>
           </Box>
          }
        
        </Hide>
        <Hide above='xl'>
          <DashboardDrawer/>
        </Hide>
        <Box width={"80%"} margin={"auto"}>
          {
            searchparams.get("page") == "wishlist" ? <Wishlist/> : <Box></Box>
          }
        </Box>
      </Flex>
      
    </Box>
    </Box>
  )
}

export default Dashboard