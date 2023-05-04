import {
    Flex, Stack, HStack, VStack, useDisclosure, IconButton, Input, Image, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Heading,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
import { CgShoppingCart } from "react-icons/cg"
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import React, { useRef } from 'react'
import Submenu from './Submenu';
import HamMenu from './Drawer';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navmenu = ["Men", "Women", "Kids", "Home & Living", "Studio"]
    return (<Box className='main-navstack' display="flex" height={{ base: "8vh", md: "8vh", lg: "12vh" }} position="fixed" overflow="hidden" justifyContent={["space-between", "space-between", "space-between", "space-around"]}>
        <HStack width={{ base: "20%", md: "8%", lg: "6%" }}>
            <Link to="/">
                <Image src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1" />
            </Link>
        </HStack>


        <Flex display={["none", "none", "none", "flex"]} className='nav-menu' width="60%" >
            <Heading as="h4">Tech</Heading>
            <Heading as="h4">Bags & Wallets</Heading>
            <Heading as="h4">Work Essentials</Heading>
            <Heading as="h4">Gifting</Heading>
            <Heading as="h4">Collections</Heading>
            <Heading as="h4">Shop By Apple</Heading>
            <Heading as="h4">New Arrivals</Heading>
        </Flex>
        <Box display={["none", "none", "none", "flex"]} width="15%" justifyContent="space-between">
            <CgShoppingCart className='cart-box' />
            <FaUserAlt className='cart-box' />
            <Search2Icon className='cart-box' />
        </Box>
        <Box display={["flex", "flex", "flex", "none"]}>
            <HamMenu />
        </Box>

    </Box>
    )
}

export default Navbar
