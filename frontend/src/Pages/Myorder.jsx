import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCartProductsAction } from '../Redux/CartReducer/action';
import WishListCard from '../Components/Dashboard/WishListCard';
import OrderCard from '../Components/Dashboard/OrderCard';

const Myorder = () => {
    const [state, setState] = useState(false);
    const { allcartProducts } = useSelector(store => store.CartReducer)
    const { user, token } = useSelector(store => store.Loginreducer)
    const dispatch = useDispatch();

    const handleClick = (value) => {
        setState(value)
    }
    useEffect(()=>{
        dispatch(GetAllCartProductsAction(token, user[0]._id))
    },[state])


    console.log(allcartProducts)
    return (
        <Box>
            <Text fontSize={"4xl"}>MY ORDER</Text>
            <Flex justifyContent={"center"} mb={"20px"}>
                <Button onClick={() => handleClick(false)} mr={"20px"}>IN-PROGRESS</Button>
                <Button onClick={() => handleClick(true)}>COMPLETED</Button>
            </Flex>
            <Box>
                {
                    allcartProducts.length == 0 ? <Box textAlign={"center"} fontSize={"2xl"}>No Orders</Box> : allcartProducts.map((item) => {
                        if(item.payment == state){
                          return <OrderCard product={item} />
                        } 
                    })
                }
            </Box>
        </Box>
    )
}

export default Myorder