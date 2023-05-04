import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import Grandmenu from './Grandmenu'

const Submenu = ({title}) => {

    const submenu = ["Topwear","Indian","Bottomwear","Footwear"]
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
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Submenu
