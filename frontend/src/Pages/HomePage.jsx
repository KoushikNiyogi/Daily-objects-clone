import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'




const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Box width="90%" margin="auto">
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
            <Heading as="h2" className='h2' fontSize="140%">SHOP CATEGORIES</Heading>
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
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
      </Box>
      <Box width="100%" >
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
      </Box>
      <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} rowGap="4%" columnGap="4%" marginTop="4%">
        <Box width={["100%", "100%", "50%", "50%"]}>
          <Image width="100%" src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" />
        </Box>
        <Box width={["100%", "100%", "50%", "50%"]}>
          <Image width="100%" src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" />
        </Box>
      </Box>

      <Box width="100%" display={["block", "block", "flex", "flex"]} justifyContent="space-around" padding="2%" className='item-card-box' gap="2%">
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/paws_and_claws_revised-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/tetro-play-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
        <Box width={["100%", "100%", "33%", "33%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/skater-subculture-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          <Heading as="h2" className='h2' fontSize="140%">08:01 COLLECTION</Heading>
          <Text>A collection featured to preserve all brief encounters on your everyday journey.</Text>
        </Box>
      </Box>
      <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} alignItems="center" rowGap="4%" columnGap="4%" marginTop="4%" >
        <Box width={["100%", "100%", "45%", "45%"]} textAlign="left" padding="4%">
          <Heading as="h2" className='h2' fontSize="140%">OUR STORY</Heading>
          <Text>
            Founded in 2012, DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry #lessordinary.
            You can look forward to a carefully-crafted range of products, made from long-lasting materials, with designs that stand out and make your life easy. With DailyObjects, let your lifestyle reflect your sensibilities as you go on to make your every day #lessordinary.
          </Text>
        </Box>
        <Box width={["100%", "100%", "45%", "45%"]}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </Box>
      </Box>
      <Box width="100%" padding="4%">
        <Heading as="h2" className='h2' fontSize="140%">FEATURED IN</Heading>
        <Box width="100%">
             <Image src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,dpr-1"/>
        </Box>
      </Box>
      <Box>
        <Heading as="h2" className='h2' fontSize="140%">HONEST REVIEWS</Heading>
        <Box>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,dpr-1"/>
        </Box>
      </Box>
      <Footer/>
    </Box>

  )
}

export default HomePage
