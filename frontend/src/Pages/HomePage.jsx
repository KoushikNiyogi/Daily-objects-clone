import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../Components/Navbar"


const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Box width="90%" margin="auto" paddingTop={{ base: "8vh", md: "8vh", lg: "10vh" }}>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
      </Box>
      <Box width="100%">
        <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/pangea_collection_homepage_desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
      </Box>
      <Box width="100%" paddingTop="4%">
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/watchband-homepage-desktop-02.png?tr=cm-pad_resize,v-2,dpr-1" />
      </Box>
      <Box>
        <Box width="100%" display="flex" height={["200px", "200px", "320px", "350px"]} border="1px solid red">
          <Box>
            <Heading>SHOP CATEGORIES</Heading>
            <Text>Now browse our selection of carefully curated products in sorted categories</Text>
          </Box>
          {/* <Box width="70%" height="90%">
            <Slider />
          </Box> */}
        </Box>

      </Box>
      <Box width="100%" >
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
      </Box>
      <Box width="100%" display={["block", "block", "flex", "flex"]} justifyContent="space-around" padding="2%" className='item-card-box' gap="2%">
        <Box width={["100%","100%","33%","33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%","100%","33%","33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%","100%","33%","33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
      </Box>
      <Box width="100%" >
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
      </Box>
      <Box>

      </Box>
      <Box>

      </Box>
      <Box width="100%" display={["block", "block", "flex", "flex"]} justifyContent="space-around" padding="2%" className='item-card-box' gap="2%">
        <Box width={["100%","100%","33%","33%"]}> 
          <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/paws_and_claws_revised-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%","100%","33%","33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/tetro-play-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%","100%","33%","33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/skater-subculture-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading>08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
