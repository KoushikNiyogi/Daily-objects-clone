import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  InputGroup,
  InputRightAddon,
  Input,
  Text,
  Spinner,
  SimpleGrid,
  Flex,
  Button
} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { BiSearch } from "react-icons/bi"
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchProducts } from '../Redux/SearchPageReducer/Action';
import SearchProductCard from '../Components/SearchPage.jsx/SearchProductCard';
import CombinedFilter_sort from '../Components/SearchPage.jsx/CombinedFilter_sort';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const SearchPage = () => {
  const [state, setState] = React.useState("");
  const [filter,setFilter] = useState(false);
  const [searchparams, setSearchparams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading, isError, products } = useSelector(store => store.SearchReducer);
  const [dummy,setdummy] = useState(false);
  

  const handleSearch = () => {
     
     if(state!=""){
      setSearchparams({q:state});
     }
  }

  useEffect(()=>{
    localStorage.removeItem("searchpage");
    setdummy(!dummy);
  },[])
  console.log(process.env.REACT_APP_BASE_URL)
  useEffect(()=>{
    let param = {};
    if (searchparams.getAll("color").length != 0) {
      param["color"] = searchparams.getAll("color")
    }
    if (searchparams.get("sort") != undefined) {
      param["sort"] = searchparams.get("sort")
    }
    if (searchparams.get("price_gt") != undefined && searchparams.get("price_lt") != undefined) {
      param["price_gt"] = searchparams.get("price_gt")
      param["price_lt"] = searchparams.get("price_lt")
    }
    if (state != "") {
      param["q"] = state
    }
    if(location.search!=""&&Object.keys(param).length!=0){
      console.log("im running")
      dispatch(getSearchProducts(param));
    }
  },[location.search])
  return (
    <Box>
      <Navbar/>
    <Box>
      <Stack width={"70%"} margin={"150px auto"} spacing={4}>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <Text fontWeight={"bold"} color={"#6ccbf8"} fontSize={"lg"}>Search</Text>
        <InputGroup size='lg'>
          <Input type='search' borderWidth={"0 0 2px"} _focus={{ outline: "none" }} placeholder='Search Product' value={state} onChange={(e) => setState(e.target.value)} />
          <InputRightAddon children={<BiSearch />} onClick={() => {
            handleSearch()
            }} />
        </InputGroup>
      </Stack>

      <Box>

        {
          isLoading ? <Spinner color={"blue"} size={"400px"} zIndex={"3"} /> :
            <Box>
              <Flex justifyContent={"flex-end"} marginRight={"20px"}>
                <Button onClick={()=>setFilter(prev=>!prev)}>Filter </Button>
              </Flex>
              <Flex direction={{base:"column-reverse",lg:"row"}}>
              <SimpleGrid w={{base:"100%",lg:filter ? "80%" : "100%"}} transition={"0.5s"} id='product_grid' columns={{ base: 1, md: 2, lg: 4 }} gap={"10px"} padding={"10px"}>
                {
                  products.length != 0 && products.map((item) => {
                    return <SearchProductCard key={item.id} item={item} />
                  })
                }
              </SimpleGrid >
              { filter&&<CombinedFilter_sort filter={filter}/>}
              </Flex>
              
            </Box>
        }
      
      </Box>
    </Box>
    <Footer/>
    </Box>
  )
}

export default SearchPage