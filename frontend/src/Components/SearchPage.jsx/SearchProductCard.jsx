import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
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
import { useDispatch, useSelector } from 'react-redux';
import {addToWishlist} from "../../Redux/WishlistReducer/action"
const SearchProductCard = ({ item }) => {
  const {isAuth,token} = useSelector(store => store.Loginreducer)
  const image1 = item.images[0];
  const image2 = item.images[1];
  const [image, setImage] = React.useState(image1);
  const Navigate = useNavigate();
  const dispatch = useDispatch();  

  const handleAddToWishlist = (item) => {
    if(token){
     dispatch(addToWishlist(token,item))
    }else{
      Navigate("/login",{replace:true,state:"/searchpage"})
    }
  }

  return (
    <Card maxW='sm' onClick={() =>  Navigate(`/products/${item.id}`)}>
      <CardBody>
        <Flex justifyContent={"flex-end"} padding={"10px"}><AiOutlineHeart className ='button' onClick={(e) => {
          e.stopPropagation();
          handleAddToWishlist(item);
        }} size={"25px"} /></Flex>

        <Box>
          <Image
            boxSize={"400px"}
            objectFit='cover'
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