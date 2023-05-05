import React from 'react'
import { SlHeart } from "react-icons/sl";
import {
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Card,
  CardBody
} from "@chakra-ui/react"
const SearchProductCard = ({ item }) => {
  const image1 = item.images[0];
  const image2 = item.images[1];
  const [image, setImage] = React.useState(image1);
  return (
    <Card maxW='sm'>
      <CardBody>
        <Flex justifyContent={"flex-end"}>
          <SlHeart />
        </Flex>
        <Box>
          <Image
            src={image}
            onMouseEnter={() => setImage(image2)}
            onMouseOut={() => setImage(image1)}
          />
        </Box>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SearchProductCard