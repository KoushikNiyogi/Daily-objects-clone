import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import styles from '../Styling/checkout.module.css'
import { useNavigate } from "react-router-dom";
import {useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


const Checkout = () => {

  const {address} = useSelector(store=>store.AddressReducer)
  const {user} = useSelector(store=>store.Loginreducer)
  const navigate = useNavigate();
  
  const [userAddress, setuserAddress] = useState("")

  
  useEffect(()=>{
    if(!address){      
      setuserAddress(user.address)
    }
    else{
      setuserAddress(address)
    }

  }, [])
  
  const{name, city,area, state, pin} = userAddress
  

  return <Box>
  <h1 id={styles.heading}>CHECKOUT</h1> 
  <Flex id={styles.flex}>

<Box  w={["100%","100%","70%"]} borderRadius="10px" p="3vh" fontSize={{lg:"20px",md:"10px",base:"20px"} }fontWeight={500} id={styles.left}>
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>SHIPPING ADDRESS</p>
          <Text as="p">{name}</Text>
          <Text as="p">{`${area}, ${city}`}</Text>          
          <Text as="p">{`${city}, ${state} ${pin} `}</Text>
          <Button width="80%" style={{ margin: "1rem 0",backgroundColor: "#20a87e" }} size='lg'  >Change</Button>
    </Box>
    {/* const[name, setname] = useState("")
    const[mobile, setmobile] = useState("")
    const[email, setemail] = useState("")
    const[pin, setpin] = useState("")
    const[city, setcity] = useState("")
    const[state, setstate] = useState("")
    const[country, setcountry] = useState("")
    const[building, setbuilding] = useState("")
    const[area, setarea] = useState("")
    const[landmark, setlandmark] = useState("")
    const[gstin, setgstin] = useState("") */}



   <Box  w={{ lg: "100%", md: "100%", base:"100%"}} boxSizing="border-box" className={styles.summary} id={styles.right}>
      <Box  w={{ lg: "100%", md: "100%", base:"100%"}} >
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>ORDER SUMMARY</p>
        <Box className={styles.summaryItem}>
        <p>Item Total (--- Items)</p> <p>Rs ---</p>
        </Box>
        <Box className={styles.summaryItem}>
          <p>Discount</p> <p>Rs ---</p>
        </Box>
        <Box className={styles.summaryItem}>
          <p>Shipping</p> <p>Free</p>
        </Box>
        <hr />
        <Box className={styles.summaryItem}>
          <Box>
            <p>Grand Total</p>
            <p>(Inclusive of Taxes)</p>
          </Box>
          <Box style={{ textAlign: "right" }}>
            <p>Rs.---</p>
            <p>You Saved Rs.----</p>
          </Box>
        </Box>
      
        <Button width={"100%"} style={{ margin: "1rem 0", backgroundColor: "#20a87e"}} size='lg' onClick={() => navigate("/payments")}>CHECKOUT</Button>
      </Box>
    </Box>

    </Flex>

    </Box>
  }

export default Checkout