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
import HamMenu from './Drawer';
import HoverCard from './HoverCard';
import Logo from "../Components/Admin/images/daily_e.png";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {token} = useSelector((store)=>store.Loginreducer);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const techarr = [
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Apple"
                },
                {
                    name: "Samsung"
                },
                {
                    name: "Xiaomi"
                },
                {
                    name: "One Plus"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeves-and-bags-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Zippered Sleevers"
                },
                {
                    name: "Macbook hardcase"
                },
                {
                    name: "Messenger Bags"
                },
                {
                    name: "Bagpacks"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/chargig-solutions.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Wireless chargers"
                },
                {
                    name: "Apple watch chargers"
                },
                {
                    name: "Cahrgers and cabels"
                },
                {
                    name: "Charger station"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/watch-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Apple Watchbands"
                },
                {
                    name: "Apple Watchbands Chargers"
                },
                {
                    name: "Universal Watchbands"
                },
                {
                    name: "Apple Watch Cases"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/stands-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Moblie"
                },
                {
                    name: "Laptop"
                },
                {
                    name: "Apple Watch"
                },
                {
                    name: "i Pad"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/organsiers-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Tech Kit"
                },
                {
                    name: "Folio"
                },
                {
                    name: "Pouches"
                },
                {
                    name: "Cables"
                },
            ]
        },
        {
            imgurl: "https://images.dailyobjects.com/marche/assets/images/other/other-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
            item: [
                {
                    name: "Screen Guards"
                },
                {
                    name: "iPad Cases"
                },
                {
                    name: "AirPod Cases"
                },
                {
                    name: "AirTag Cases"
                },
            ]
        }
    ]
    return (<Box className='main-navstack' display="flex" height={{ base: "8vh", md: "8vh", lg: "12vh" }} alignItems="center" justifyContent={["space-between", "space-between", "space-between", "space-around"]}>
        <HStack width={{ base: "20%", md: "8%", lg: "6%" }}>
            <Link to="/">
                <Image width="100%" src={Logo} />
            </Link>
        </HStack>


        <Flex display={["none", "none", "none", "flex"]} className='nav-menu' width="60%" >
            <Box>
                <HoverCard techarr={techarr} title="TECH" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="BAG & WALLETS" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="WORK & ESSENTIAL" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="GIFTING" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="COLLECION" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="SHOP BY APPLE" />
            </Box>
            <Box>
                <HoverCard techarr={techarr} title="NEW ARRIVALS" />
            </Box>

        </Flex>
        <Box display={["none", "none", "none", "flex"]} width="15%" justifyContent="space-between">
            <Link to="/ShoppingBagPage"><CgShoppingCart className='cart-box' /></Link>
            <Link to="/dashboard"><FaUserAlt className='cart-box' /></Link>
            <Link to="/SearchPage"><Search2Icon className='cart-box' /></Link>
        </Box>
        <Box display={["flex", "flex", "flex", "none"]}>
            <HamMenu techarr={techarr} />
        </Box>

    </Box>
    )
}

export default Navbar
