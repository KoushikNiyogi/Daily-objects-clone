import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  RadioGroup,
  Stack,
  Radio,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Box, Text, Flex, Hide, Show
} from "@chakra-ui/react"
import { RiArrowRightSFill } from "react-icons/ri"
import { useNavigate,useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../Redux/UserLogin/userloginaction'

export default function DashboardDrawer() {
  const [Data, setData] = React.useState("");
  const navigate = useNavigate();
  const [searchparams, setSearchparams] = useSearchParams();
  const store = useSelector(store => store.Loginreducer)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    searchparams.delete("page")
    dispatch(logoutUser);
  }

  const handleRoute = (path) => {
    navigate(path,{replace:true,state:"/dashboard"});
  }

  const handlesearch = (data) => {
    setSearchparams({ page: data })
  }
  return (
    <>
      <Button colorScheme='blue' onClick={onOpen} maxW={"150px"} padding={"20px"}>
        Menu
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {
              store.token!=null?
                <Box w={"100%"} padding={"10px"} >
                  <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>DAILYESSENTIAL USER</Text>
                  <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>Koushik 9380135532</Text>
                  <Box>
                    <Flex onClick={() => handlesearch("user")} cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Personal Info<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex onClick={() => handlesearch("order")} cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>My Orders<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex onClick={() => handlesearch("address")} cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Address Book<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex onClick={() => handlesearch("wishlist")} cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={() => handleLogout()}>Logout<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                  </Box>
                </Box>
                :
                <Box w={"100%"} padding={"10px"} borderRight={"1px solid #ededed"}>
                  <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>GUEST</Text>
                  <Box>
                    <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={() => handleRoute("/signup")}>Register<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                    <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"} w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={() => handleRoute("/login")}>Login<Text fontSize={"xl"} ></Text><RiArrowRightSFill /></Flex>
                  </Box>
                </Box>
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

