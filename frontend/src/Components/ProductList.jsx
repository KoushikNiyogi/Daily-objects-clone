import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from '../Redux/CategoryPage/Action';
import Loading from './Loading';
import { useSearchParams } from "react-router-dom";
// import ProductCard from './ProductCard';
import { ProductCard } from './ProductCard';
import CombinedFilter_sort from './SearchPage.jsx/CombinedFilter_sort';
import { Box , Button, Flex, SimpleGrid} from '@chakra-ui/react';


export const ProductList = () => {
    const Products=useSelector((store)=>store.ProductReducer.products);
    console.log(Products);
    const dispatch=useDispatch();
    const [searchParams, setSearchParam] = useSearchParams()
    const [filter ,setFilter] = useState(false)
    let isLoading = useSelector((store)=>store.ProReducer);
    //console.log(load.isLoading);

    // useEffect(()=>{
    //  },[Products.length]);

  return (  isLoading ? <Loading /> : 
    <Box>
      <Box style={{display: "flex", justifyContent: "flex-end"}}>
      <Button style={{padding:"5px 20px", border: "2px solid black"}} onClick={()=> {
        setFilter((prev) => !prev)
      }}>
        Filter
      </Button>
      </Box>
        <Flex direction={{base:"column-reverse",lg:"row"}}>
      <SimpleGrid className='filter-product' w={{base:"100%",lg:filter ? "80%" : "100%"}} transition={"0.5s"} id='product_grid' columns={{ base: 1, md: 2, lg: 4 }} gap={"10px"} padding={"10px"} >
          {Products.length > 0 && Products.map((el)=>{
                  return <ProductCard key={el.id} {...el} />
              })
          }
        </SimpleGrid>
        { filter&&<CombinedFilter_sort filter={filter}/>}
      </Flex>
      
    </Box>
  )
};


//  wishlist 

// import React, { useEffect, useState } from 'react'
// import {
//   Box,
//   Stack,
//   InputGroup,
//   InputRightAddon,
//   Input,
//   Text,
//   Spinner,
//   SimpleGrid,
//   Flex,
//   Button
// } from "@chakra-ui/react"
// import { useDispatch, useSelector } from "react-redux"
// import { BiSearch } from "react-icons/bi"
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { getProducts } from '../Redux/CategoryPage/Action';
// import SearchProductCard from '../Components/SearchPage.jsx/SearchProductCard';
// import CombinedFilter_sort from '../Components/SearchPage.jsx/CombinedFilter_sort';

// const ProductList = () => {
//   const [state, setState] = React.useState("");
//   const [filter,setFilter] = useState(false);
//   const [searchparams, setSearchparams] = useSearchParams();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { isLoading, isError, products } = useSelector(store => store.ProductReducer);
//   const [dummy,setdummy] = useState(false);
  

//   const handleProduct = () => {

//      if(state!=""){
//       setSearchparams({q:state});
//      }
//   }

//   useEffect(()=>{
//     console.log("useeffect is running at lin 39")
//     localStorage.removeItem("productpage");
//     setdummy(!dummy);
//     console.log(dummy,"line42")
//   },[])

//   useEffect(()=>{
//     let param = {};
//     if (searchparams.getAll("color").length != 0) {
//       param["color"] = searchparams.getAll("color")
//     }
//     if (searchparams.get("sort") != undefined) {
//       param["sort"] = searchparams.get("sort")
//     }
//     if (searchparams.get("price_gt") != undefined && searchparams.get("price_lt") != undefined) {
//       param["price_gt"] = searchparams.get("price_gt")
//       param["price_lt"] = searchparams.get("price_lt")
//     }
//     if (state != "") {
//       param["q"] = state
//     }
//     if(location.search!=""&&Object.keys(param).length!=0){
//       console.log("im running")
//       dispatch(getProducts(param));
//     }
//   },[location.search])
//   return (
//     <Box>
//       <Stack width={"70%"} margin={"150px auto"} spacing={4}>

//         {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
//         <Text fontWeight={"bold"} color={"#6ccbf8"} fontSize={"lg"}>Search</Text>
//         <InputGroup size='lg'>
//           <Input type='search' borderWidth={"0 0 2px"} _focus={{ outline: "none" }} placeholder='Search Product' value={state} onChange={(e) => setState(e.target.value)} />
//           <InputRightAddon children={<BiSearch />} onClick={() => {
//             handleProduct()
//             }} />
//         </InputGroup>
//       </Stack>

//       <Box>

//         {
//           isLoading ? <Spinner color={"blue"} size={"4xl"} zIndex={"3"} /> :
//             <Box>
//               <Flex justifyContent={"flex-end"} marginRight={"20px"}>
//                 <Button onClick={()=>setFilter(prev=>!prev)}>Filter </Button>
//               </Flex>
//               <Flex direction={{base:"column-reverse",lg:"row"}}>
//               <SimpleGrid w={{base:"100%",lg:filter ? "80%" : "100%"}} transition={"0.5s"} id='product_grid' columns={{ base: 1, md: 2, lg: 4 }} gap={"10px"} padding={"10px"}>
//                 {
//                   products.length != 0 && products.map((item) => {
//                     return <SearchProductCard key={item.id} item={item} />
//                   })
//                 }
//               </SimpleGrid >
//               { filter&&<CombinedFilter_sort filter={filter}/>}
//               </Flex>

//             </Box>
//         }

//       </Box>
//     </Box>
//   )
// }

// export default ProductList






// import React from 'react'
// import { AiOutlineHeart } from "react-icons/ai";
// import {
//   Flex,
//   Box,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Card,
//   CardBody
// } from "@chakra-ui/react"
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {addToWishlist} from "../../Redux/WishlistReducer/action"
// const ProductCard = ({ item }) => {
//   const {isAuth,token} = useSelector(store => store.Loginreducer)
//   const image1 = item.images[0];
//   const image2 = item.images[1];
//   const [image, setImage] = React.useState(image1);
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();  

//   const handleAddToWishlist = (item) => {
//     if(token){
//      dispatch(addToWishlist(token,item))
//     }else{
//       Navigate("/login",{replace:true,state:"/searchpage"})
//     }
//   }

//   return (
//     <Card maxW='sm' onClick={() =>  Navigate(`/products/${item.id}`)}>
//       <CardBody>
//         <Flex justifyContent={"flex-end"} padding={"10px"}><AiOutlineHeart className ='button' onClick={(e) => {
//           e.stopPropagation();
//           handleAddToWishlist(item);
//         }} size={"25px"} /></Flex>

//         <Box>
//           <Image
//             boxSize={"400px"}
//             objectFit='cover'
//             src={image}
//             onMouseEnter={() => setImage(image2)}
//             onMouseOut={() => setImage(image1)}
//           />
//         </Box>
//         <Stack mt='6' spacing='3'>
//           <Text fontSize={"sm"}>
//             {item.title}
//           </Text>
//           <Flex><Text fontSize={"md"} color={"black"}>Rs.{item.price}</Text> <Text ml={"10px"} textDecoration={"line-through"} fontSize={"sm"}>{item.discounted_price}</Text></Flex>
//           item.offer!=undefined&&<Text fontSize={"md"} color={"red"}>{item.offer}</Text>
//         </Stack>
//       </CardBody>
//     </Card>
//   )
// }

// export default SearchProductCard
