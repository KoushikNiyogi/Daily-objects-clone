import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, Link, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
import Submenu from './Submenu';
const HamMenu = (props) => {
  const techarr = props.techarr
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

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
              <Submenu title="TECH" techarr={techarr}/>
              <Submenu title="BAGS & WALLETS" techarr={techarr}/>
              <Submenu title="WORK & ESSENTIALS" techarr={techarr}/>
              <Submenu title="GIFTING" techarr={techarr}/>
              <Submenu title="COLLECTION" techarr={techarr}/>
              <Submenu title="SHOP BY APPLE" techarr={techarr}/>
              <Submenu title="NEW ARRIVAL" techarr={techarr}/>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}

export default HamMenu
