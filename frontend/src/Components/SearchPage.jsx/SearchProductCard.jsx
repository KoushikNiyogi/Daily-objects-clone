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
import { useNavigate } from 'react-router-dom';
const SearchProductCard = ({ item }) => {
  const image1 = item.images[0];
  const image2 = item.images[1];
  const [image, setImage] = React.useState(image1);
  const Navigate = useNavigate();

  const navigate = (id)=>{
   Navigate(`/products/${id}`)
  }

const addToWishlist = ()=>{

}

  return (
    <Card maxW='sm' onClick={()=>navigate(item._id)}>
      <CardBody>
        <Flex justifyContent={"flex-end"}>
          <SlHeart onclick={(e)=>{
              e.stopPropagation();
              addToWishlist()
          }}/>
        </Flex>
        <Box>
          <Image
            src={image}
            onMouseEnter={() => setImage(image2)}
            onMouseOut={() => setImage(image1)}
          />
        </Box>
        <Stack mt='6' spacing='3'>
          <Text fontSize={"sm"}>
           {item.title}
          </Text>
          <Flex><Text fontSize={"md"} color={"black"}>Rs.{item.price}</Text> <Text ml={"10px"} textDecoration={"line-through"} fontSize={"sm"}>{item.discounted_price}</Text></Flex>
          item.offer!=undefined&&<Text fontSize={"md"} color={"red"}>{item.offer}</Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SearchProductCard