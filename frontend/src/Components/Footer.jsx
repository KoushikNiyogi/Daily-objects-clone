

import React from 'react'
import Ftable from './Table'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BsFacebook } from "react-icons/bs"
import { ImPinterest2 } from "react-icons/im"
const Footer = () => {
    const knowus = [
        {
            name: "About DailyEssentials"
        },
        {
            name: "Blog"
        }
    ]
    const network = [
        {
            name: "Contact Us"
        },
        {
            name: "Corporate Gifting"
        }
    ]
    const helpdesk = [
        {
            name: "Terms Of Use"
        },
        {
            name: "Warrent Policy"
        },
        {
            name: "Shipping Policy"
        },
        {
            name: "Cancellation Policy"
        },
        {
            name: "Return & Exchange Policy"
        },
        {
            name: "Privacy & Secure Policy"
        },

    ]
    const images = [
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
        {
            url: "https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,dpr-1"
        },
    ]
    const ifirst = [
        {
            name: "iPhone 14 Covers"
        },
        {
            name: "iPhone 13 Covers"
        },
        {
            name: "iPhone 11pro Covers"
        },
        {
            name: "iPhone 12pro Covers"
        },
        {
            name: "One Plus Nord Covers"
        },
        {
            name: "iPhone XS MAX Covers"
        },
        {
            name: "iPhone Covers"
        },

    ]
    const isecond = [
        {
            name: "Apple Watch Straps"
        },
        {
            name: "Amazefit Watch Straps"
        },
        {
            name: "Sillicone Watch Straps"
        },
        {
            name: "Samsung Watch Straps"
        },
        {
            name: "Noice Watch Straps"
        },
        {
            name: "boAt Watch Straps"
        },
        {
            name: "Smart Watch Straps"
        },

    ]
    const ithird = [
        {
            name: "Tote Bags"
        },
        {
            name: "Laptop Covers"
        },
        {
            name: "Pouches"
        },
        {
            name: "Crossbody Bags"
        },
        {
            name: "MackBook Sleeves"
        },
        {
            name: "Pass-Port Covers"
        },
        {
            name: "Messenger Bags"
        },

    ]
    return (
        <Box >
            <Flex border="0.1px solid gray" flexDirection={["column", "column", "row", "row"]}>
                <Box display="flex" gap={["5%", "5%", "0", "0"]} width={["100%", "100%", "60%", "60%"]} height={["280px", "280px", "300px", "300px"]} justifyContent="space-around" paddingTop="5%">
                    <Ftable title="KNOW US" item={knowus} />
                    <Ftable title="HELPDESK" item={helpdesk} />
                    <Ftable title="NETWORK" item={network} />
                </Box>
                <Box width={["100%", "100%", "40%", "40%"]} height={["280px", "280px", "300px", "300px"]} >
                    <Flex height="50%" border="0.1px solid gray" flexDirection="column" justifyContent="center" paddingLeft="16%">
                        <Heading fontSize="140%">FOLLOW US ON</Heading>
                        <Flex width="70%" justifyContent="space-between" alignItems="center" paddingTop="2%">
                            <FaInstagram size="40" />
                            <BsFacebook size="40" />
                            <FaTwitter size="40" />
                            <FaYoutube size="40" />
                            <ImPinterest2 size="40" />
                        </Flex>

                    </Flex>
                    <Flex height="50%" border="0.1px solid gray" flexDirection="column" justifyContent="center" paddingLeft={["8%", "8%", "10%", "16%"]}>
                        <Heading fontSize="140%">DOWNLOAD OUR APP</Heading>
                        <Flex width="70%" justifyContent="space-between" alignItems="center" paddingTop="2%">
                            <Image src='https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1' />
                            <Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" />
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            <Box height={["100px", "100px", "120px", "130px"]} width="100%" border="0.1px solid gray" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Heading fontSize="120%">100% SECURE PAYMENT</Heading>
                <Box display="flex" justifyContent="space-between" width={["100%", "100%", "80%", "60%"]} margin="auto">
                    {
                        images.map(ele => <Image width="9%" src={ele.url} />)
                    }
                </Box>
            </Box>
            <Box width="100%" height={["400px", "350px", "330px", "300px"]} paddingTop="2%">
                <Heading fontSize="140%">MOST SEARCHED ON DAILYOBJECTS</Heading>
                <Box display="flex" justifyContent="space-between" width={["100%", "100%", "80%", "70%"]} gap="3%" padding="2%" paddingTop="3%">
                    <Ftable title="CASES AND COVERS" item={ifirst} />
                    <Ftable title="STRPAS AND WATCHBANDS" item={isecond} />
                    <Ftable title="BAGS AND SLEEVES" item={ithird} />
                </Box>
            </Box>
            <Box height="100px" backgroundColor="black">
            </Box>
        </Box>
    )
}

export default Footer
