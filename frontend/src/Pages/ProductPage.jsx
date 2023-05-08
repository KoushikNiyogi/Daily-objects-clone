import { Box, Button, Divider, Flex, Text, Image, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../Components/ProductPageComponents/ImageSlider'
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart, getSingleProduct } from '../Redux/CartReducer/action';
import { useNavigate, useParams } from "react-router-dom"
import {BsTag} from "react-icons/bs"
import {GoGift} from "react-icons/go"
import ImageSliderAuto from '../Components/ProductPageComponents/ImageSliderAuto';

const Images = [
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-16-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-3-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-4-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-6-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-7-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
 "https://images.dailyobjects.com/marche/feature-banner/pangea-collection-8-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1"
]

const ProductPage = () => {
  const { products, singleProduct } = useSelector(store => store.CartReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const {token,user} = useSelector(store=>store.Loginreducer)
  const Navigate = useNavigate();
  const toast = useToast();

const handleClick = (singleProduct)=>{
  let obj = {...singleProduct}
    delete obj["_id"];
    if(token){
      dispatch(addProductCart(token,obj,toast))
    }else{
      Navigate("/login",{replace:true,state:`/products/${id}`})
    }
}

useEffect(() => {
  console.log("useeffect is running")
  dispatch(getSingleProduct(id))
  console.log("useeffect ended");
}, [])
  return (

    <Box mt={"50px"}>
      {

      singleProduct ? <Box>
      <Flex direction={{ base: "column", lg: "row" }} width={"80%"} margin={"auto"}>
        <Box backgroundColor={"#f7f7f7"}>
          <Box width="700px" height="650px">
            <ImageSlider images={singleProduct.images} />
          </Box>
        </Box>
        <Box pl={"20px"} textAlign={"start"}>
          <Text fontSize={"2xl"}>{singleProduct.title}</Text>
          <Flex alignItems={"center"}>
            <Text fontSize={"2xl"} color={"black"} fontWeight={"bold"}>Rs.{singleProduct.price}</Text>
            <Text ml={"10px"} textDecoration={"line-through"} fontSize={"xl"} color={"##989090"} fontWeight={"bold"}>{singleProduct.discounted_price}</Text>
            <Text ml={"10px"} fontSize={"md"} color={"#989090"} fontWeight={"bold"}>Inclusive of all taxes</Text>
          </Flex>
          <Text fontSize={"lg"} color={"#20a87e"} fontWeight={"bold"}>COLOR</Text>
          <Divider m={"20px 0px"} />
          <Flex direction={"column"} cursor={"pointer"}  alignItems={"flex-start"} justifyContent={"center"}>
            <Box width={"60px"} height={"60px"} border={"1px solid black"} borderRadius={"50%"} backgroundColor={singleProduct.color}></Box>
            <Text fontWeight={"bold"} mt={"10px"} fontSize={"lg"}>{singleProduct.color}</Text>
          </Flex>
          <Button mt={"10px"} padding={"0 16px"} minWidth={"500px"} color={"white"} backgroundColor={"#20a87e"} onClick={()=>handleClick(singleProduct)}>Add to Cart</Button>
          <Text mt={"10px"} fontSize={"lg"} color={"#e7787e"} fontWeight={"bold"}>EXITING OFFER</Text>
          <Flex mt={"10px"} justifyContent={"center"}>
            <BsTag size={"40px"}/>
            <Text ml={"10px"} fontSize={"lg"} color={"black"} >*Free Bi-Fold Wallet on orders above Rs. 1999 / Free Duffle Bag on orders above Rs. 2499</Text>
          </Flex>
          <Divider m={"20px 0px"} />
          <Flex justifyContent={"flex-start"}>
            <GoGift size={"60px"}/>
            <Text ml={"10px"} fontSize={"lg"} color={"black"} >Make it a gift</Text>
          </Flex>
          <Flex>
            <Flex direction={"column"} cursor={"pointer"} justifyContent={"center"}>
              <Image src={"https://images.dailyobjects.com/marche/assets/images/other/recycled-up.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1"} boxSize={"100px"}/>
              <Text size={"lg"} color={"black"}>Recycled PET</Text>
              
            </Flex>
            <Flex direction={"column"} cursor={"pointer"} justifyContent={"center"}>
              <Image src={"https://images.dailyobjects.com/marche/assets/images/other/g-hook-closure.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1"} boxSize={"100px"}/>
              <Text size={"lg"} color={"black"}>G-Hook Closure</Text>
              
            </Flex>
            <Flex direction={"column"} cursor={"pointer"} justifyContent={"center"}>
              <Image src={"https://images.dailyobjects.com/marche/assets/images/other/leather-up.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1"} boxSize={"100px"}/>
              <Text size={"lg"} color={"black"}>Leather Details</Text>
              
            </Flex>
            <Flex direction={"column"} cursor={"pointer"} justifyContent={"center"}>
              <Image src={"https://images.dailyobjects.com/marche/assets/images/other/trolly.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1"} boxSize={"100px"}/>
              <Text size={"lg"} color={"black"}>Trolley Sleeve</Text>
              
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Box m={"50px 0"}>
        <Text textAlign={"center"} fontSize={"5xl"} fontWeight={"bold"}>DETAILS</Text>
        {
          singleProduct.details.length!=0&&singleProduct.details.map((item,i)=>{
               if(i%2 == 0){
                return <Flex w={"80%"} m={"auto"}>
                   <Flex padding={"0 10px"} width={"60%"} h={"500px"} justifyContent={"center"} alignItems={"center"} bgColor={"#f7f7f7"} color={"black"}>
                     <Text fontSize={"2xl"} fontWeight={"bold"}>{item.content}</Text>
                   </Flex>
                   <Flex padding={"0 10px"} width={"40%"} h={"500px"} justifyContent={"center"} alignItems={"center"} bgColor={"#20a87e"} color={"white"}>
                    <Text fontSize={"4xl"} fontWeight={"bold"}>{item.heading}</Text>
                   </Flex>
                </Flex>
               }else{
                return <Flex w={"80%"} m={"auto"}>
                <Flex padding={"0 10px"} width={"40%"} h={"500px"} justifyContent={"center"} alignItems={"center"} bgColor={"#20a87e"} color={"white"}>
                 <Text fontSize={"4xl"} fontWeight={"bold"}>{item.heading}</Text>
                </Flex>
                <Flex padding={"0 10px"} width={"60%"} h={"500px"} justifyContent={"center"} alignItems={"center"} bgColor={"#f7f7f7"} color={"black"}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>{item.content}</Text>
                </Flex>
             </Flex>
               }
          })

        }
      </Box>

      <Box m={"50px 0"} w={"100%"} h={"600px"}>
       <ImageSliderAuto images={Images}/>
      </Box>
      </Box> : <Box></Box>
     }
    </Box>

  )
}

export default ProductPage
