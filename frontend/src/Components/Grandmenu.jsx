import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

const Grandmenu = ({title}) => {

    const grandmenu = {
        Topwear:["T-Shirt","Formal Shirts","Casual Shirts","Jackets"],
        Indian:["Kurta & Kurta Sets","Sherwani","Dhotis"],
        Bottomwear:["Jeans","Casual trousers","Formal Trousers","Shorts"],
        Footwear:["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers"]
    }
  return (<Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            {title=="Indian" ? title+" "+"&" +" "+"Festive Wear" :title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
      {
        grandmenu[title].map(ele=><h1>{ele}</h1>)
      }
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Grandmenu
