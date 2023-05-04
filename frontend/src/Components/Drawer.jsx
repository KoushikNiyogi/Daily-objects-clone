import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, Link, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
import Submenu from './Submenu';
const HamMenu = () => {
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
              <Submenu title="jeans"/>
              <Submenu title="jeans"/>
              <Submenu title="jeans"/>
              <Submenu title="jeans"/>
              <Submenu title="jeans"/>
              <Submenu title="jeans"/>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}

export default HamMenu
