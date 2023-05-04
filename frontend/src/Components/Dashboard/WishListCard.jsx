import React from 'react'
import {useNavigate} from "react-router-dom"
import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
    Button,
    Flex
} from "@chakra-ui/react"
const WishListCard = ({product}) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
       navigate("/products/1")
    }
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  onClick={()=>handleClick()}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={product.images[1]}
    alt={product.title}
  />

  <Stack>
    <CardBody>
      <Heading size='sm'>{product.title}</Heading>

      <Flex><Text fontSize={"sm"}>Rs.{product.price}</Text> <Text ml={"10px"} textDecoration={"line-through"} fontSize={"sm"}>{product.discounted_price}</Text></Flex>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Add to Cart
      </Button>
    </CardFooter>
   </Stack>
  </Card>
  )
}

export default WishListCard