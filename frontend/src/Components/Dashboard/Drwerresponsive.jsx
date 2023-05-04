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
    Box,Text,Flex,Hide,Show
  } from "@chakra-ui/react"
  import {RiArrowRightSFill} from "react-icons/ri"
  import {useNavigate} from "react-router-dom"

export default function DashboardDrawer() {
    const [state,setState] = React.useState(true);
    const [Data,setData] = React.useState("");
    const navigate = useNavigate();
const { isOpen, onOpen, onClose } = useDisclosure()
const [placement, setPlacement] = React.useState('left')
const handleLogout =()=>{
    setState(false);
  }

  const handleRoute = (path)=>{
   navigate(path);
  }

return (
  <>
    <Button colorScheme='blue' onClick={onOpen}>
      Menu
    </Button>
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
        {
            state ? 
           <Box w={"100%"} padding={"10px"} >
             <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>DAILYESSENTIAL USER</Text>
             <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>Koushik 9380135532</Text>
             <Box>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Personal Info<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>My Orders<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Address Book<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleLogout()}>Logout<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
             </Box>
           </Box>
           : 
           <Box w={"100%"} padding={"10px"} borderRight={"1px solid #ededed"}>
            <Text textAlign={"left"} fontSize={"xl"} fontWeight={"bold"}>GUEST</Text>
            <Box>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"}>Wishlist<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleRoute("/signup")}>Register<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
              <Flex cursor={"pointer"} fontSize={"xl"} borderBottom={"1px solid #ededed"}  w={"90%"} margin={"auto"} justifyContent={"space-between"} padding={"20px 0"} onClick={()=>handleRoute("/login")}>Login<Text  fontSize={"xl"} ></Text><RiArrowRightSFill/></Flex>
             </Box>
           </Box>
          }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
)
}

