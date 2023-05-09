import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import {
    Flex,
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    useToast,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addToWishlist} from "../Redux/WishlistReducer/action"
// import "../Pages/Styles/ProductCardCss"
  
  export const ProductCard=({_id,images,item ,title , price, discounted_price,offer })=> {
    const {isAuth,token} = useSelector(store => store.Loginreducer)
    // const image1 = item.images[0];
    // const image2 = item.images[1];
    // const [image, setImage] = React.useState(image1);
    const Navigate = useNavigate();
    const dispatch = useDispatch();  
    const toast = useToast()
    
    const handleAddToWishlist = (item) => {
      let obj = {...item}
      obj["productId"] = item["_id"];
      console.log(obj);
      delete obj["_id"];
      if(token){
       dispatch(addToWishlist(token,obj,item,toast))
      }else{
        Navigate("/login",{replace:true,state:"/categorypage"})
      }
    }

    const handleclick = () => {
      Navigate(`/products/${_id}`)
    }

    return (


      <Center >
        
        <Box 
          onClick={handleclick}
          role={'group'}
          p={0}
          maxW={'330px'}
          w={'full'}
          bg={'#f6f6f6'}
          mb={"20px"}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={0}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>

              <Flex justifyContent={"flex-end"} padding={"10px"}><AiOutlineHeart className ='button' onClick={(e) => {
          e.stopPropagation();
          handleAddToWishlist(item);
        }} size={"25px"} /></Flex>

            <Image
              height={230}
              width={"100%"}
              objectFit={'cover'}
              src={images}
              // onMouseEnter={() => setImage(image2)}
              // onMouseOut={() => setImage(image1)}
            />
             
          </Box>
          <Stack pt={5} align={'center'}>
          
            <Text fontSize={'medium'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={400} fontSize={'xl'}>
               RS.{price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                Rs.{discounted_price}
              </Text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={500} fontSize={'xl'}>
              {offer}
              </Text>
            </Stack>
           
          </Stack>
        </Box>
      </Center>
    );
  }
