import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image } from '@chakra-ui/react'
import React from 'react'
import Grandmenu from './Grandmenu'
import DrawerSubmenu from './DrawerSubmenu'
import HoverCardSubMenu from './HoverCardSubMenu'

const Submenu = ({ title, techarr }) => {


  return (<Accordion allowToggle width="100%">
    <AccordionItem width="100%" border="1px solid black">
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left' width="100%">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >

        <Box>
          {
            techarr.map(ele=><Box > 
            <Image src={ele.imgurl} width="50%" />
            <HoverCardSubMenu menuarr={ele.item}/>
           </Box>)
          }
        </Box>


      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Submenu
