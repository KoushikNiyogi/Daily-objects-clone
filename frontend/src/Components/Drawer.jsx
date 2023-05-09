import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useSelector } from "react-redux"
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
import { CgShoppingCart } from "react-icons/cg"
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import Submenu from './Submenu';
const HamMenu = (props) => {
  const techarr = props.techarr
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const user = useSelector(store => store.Loginreducer.user)
  if (user) {
    console.log("hi")
  }
  else {
    console.log("np")
  }
  return (<Box>
    <IconButton icon={<HamburgerIcon />}
      //   display={{ md: "none" }}
      color="black"
      onClick={isOpen ? onClose : onOpen}
    />
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader backgroundColor="white"></DrawerHeader>
        <DrawerBody backgroundColor="white">
          <VStack alignItems="center" className="left">
         <Link to="/products"><Submenu title="TECH" techarr={techarr} /></Link> 
         <Link to="/products">  <Submenu title="BAGS & WALLETS" techarr={techarr} /></Link>
         <Link to="/products"> <Submenu title="WORK & ESSENTIALS" techarr={techarr} /></Link>
         <Link to="/products">  <Submenu title="GIFTING" techarr={techarr} /></Link>
         <Link to="/products"> <Submenu title="COLLECTION" techarr={techarr} /></Link>
         <Link to="/products">  <Submenu title="SHOP BY APPLE" techarr={techarr} /></Link>
         <Link to="/products">  <Submenu title="NEW ARRIVAL" techarr={techarr} /></Link>
          </VStack>
          <Flex width="100%" justifyContent="space-between" paddingTop="4%">
            <Link to="/dashboard"><Button><CgShoppingCart /></Button></Link>
            <Link to="/ShoppingBagPage"><Button><FaUserAlt /></Button></Link>
            <Link to="/SearchPage"><Button><Search2Icon /></Button></Link>
          </Flex>

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}

export default HamMenu
