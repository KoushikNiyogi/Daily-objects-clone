import { Box, Heading, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import Ftable from './Table'
import { ChevronDownIcon } from '@chakra-ui/icons'
import HoverCardSubMenu from './HoverCardSubMenu'
const HoverCard = (props) => {
   const techarr = props.techarr
   const title = props.title
  return (
    <Menu>
    <MenuButton

    >
    <Heading as="h4" fontSize="70%"> {title}</Heading> 
    </MenuButton>
    <MenuList width="100vw" display="flex" justifyContent="space-between" height="400px">
      {
        techarr.map(ele=><MenuItem width="13%" display="block" textAlign="center"> 
         <Image src={ele.imgurl} width="100%" />
         <HoverCardSubMenu menuarr={ele.item}/>
        </MenuItem>)
      }
    </MenuList>
  </Menu>
  )
}

export default HoverCard
