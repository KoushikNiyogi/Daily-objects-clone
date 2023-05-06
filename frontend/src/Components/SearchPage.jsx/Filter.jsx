import { Box, Button, Input, Flex, InputGroup, InputLeftAddon, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { colors } from '../../Constants/Dashboard/SearchpageConstants'
import { useSearchParams } from 'react-router-dom';
const initialState = {
  price_lt : 0,
  price_gt : 0,
  color : []
};
const Filter = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const [filter,setFilter] = React.useState({
    price_lt : searchparams.get("price_lt"),
    price_gt : searchparams.get("price_gt"),
    color : searchparams.getAll("color")
  }||initialState);
  const [price_gt,setPrice_gt] = useState("");
  const [price_lt,setPrice_lt] = useState("");

  const handleColor = (color)=>{
    let newCategory = [...filter.color];
    if (newCategory.includes(color)) {
      newCategory = newCategory.filter((item) => item != color);
    } else {
      newCategory = [...newCategory, color]
    }
    setFilter({ ...filter, color: newCategory })
  }
  
  const handlePrice = ()=>{
    if(price_lt!=null&&price_gt!=null){
      setFilter({...filter,price_lt,price_gt});
    }
  }

  useEffect(()=>{
    let params = {};
    filter.price_gt!=null&&(params["price_gt"] = filter["price_gt"]);
    filter.price_lt!=null&&(params["price_lt"] = filter["price_lt"]);
    filter.color.length!=0&&(params["color"] = filter["color"]);
    searchparams.get("sort")!=undefined&&(params["sort"] = searchparams.get("sort"))
    searchparams.get("q")!=undefined&&(params["q"] = searchparams.get("q"))
    setSearchparams(params);

  },[filter])
  return (
    <Box transition={"0.5s"}>
      <Box mt={"50px"}>
        <Text fontSize={"xl"} fontWeight={"bold"} color="black"> PRICE RANGE</Text>
        <Flex mt={"50px"} alignItems={"center"}>
          <InputGroup maxW={"200px"}>
            <InputLeftAddon children='Rs.' />
            <Input type="number" name="price_gt" value={price_gt} onChange={(e)=>setPrice_gt(e.target.value)}/>
          </InputGroup>
          -
          <InputGroup maxW={"200px"}>
            <InputLeftAddon children='Rs.' />
            <Input type="number" name='price_lt' value={price_lt} onChange={(e)=>setPrice_lt(e.target.value)}/>
          </InputGroup>
        </Flex>
        <Button borderRadius={"20px"} bgColor={ "#20a87e" } color={"white"} mt={"20px"} onClick={()=>handlePrice()}>Search</Button>
      </Box>
      <Divider color={"black"} m={"50px 0"}/>
      <Box>
      <Text fontSize={"xl"} fontWeight={"bold"} color="black">COLORS</Text>

        {
          <SimpleGrid  mt={"50px"} minChildWidth='80px' spacing='40px'>
            {
              colors.map((item) => {
                return <Flex onClick={()=>handleColor(item.color)} cursor={"pointer"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                  <Box width={"50px"} height={"50px"} border={"1px solid black"} borderRadius={"50%"} backgroundColor={item.color}></Box>
                  <Text mt={"10px"} fontSize={"md"}>{item.title}</Text>
                </Flex>
              })
            }
          </SimpleGrid>
        }
      </Box>
      <Text textDecoration={"underline"} onClick={()=>setSearchparams({})}>RESET</Text>

    </Box>
  )
}

export default Filter