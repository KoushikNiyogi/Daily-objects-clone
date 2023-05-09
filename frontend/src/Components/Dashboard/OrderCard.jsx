import React from 'react'
import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    Flex
} from "@chakra-ui/react"
const OrderCard = ({product}) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
   
  >
    <Image
      objectFit='cover'
      boxSize={"150px"}
      maxW={{ base: '100%', sm: '200px' }}
      src={product.images[0]}
      alt={product.title}
    />
  
    <Stack>
      <CardBody>
        <Heading size='sm'>{product.title}</Heading>
  
        <Flex><Text fontSize={"sm"}>Rs.{product.price}</Text> <Text ml={"10px"} textDecoration={"line-through"} fontSize={"sm"}>{product.discounted_price}</Text></Flex>
      </CardBody>
     </Stack>
    </Card>
  )
}

export default OrderCard