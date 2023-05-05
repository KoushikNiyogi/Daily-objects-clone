import React, { useState } from "react"
import styles from '../Styling/payment.module.css'
import {
    Box, 
    Button,
    Flex,
    Input,  
    Center,
    Text
  } from '@chakra-ui/react'  

import { useDispatch, useSelector } from 'react-redux'
import { addAddressAction } from "../Redux/AddressReducer/action"
  

function Payments() {

  
    
    const[number, setnumber] = useState("")
    const[valid, setvalid] = useState("")
    const[cvv, setcvv] = useState("")
    const[name, setname] = useState("")
   
  

    

    const HandleSubmit =(e)=>{
        e.preventDefault()
        if(number=="" || valid=="" || cvv=="" || name==""){
            alert("Please fill all the details")
        }

                
    }

    
    return (
      
        <Box>
            <Center><Text id={styles.heading} fontSize={{ base: '24px', md: '40px', lg: '40px' }}  mb={5}>CHECKOUT</Text></Center>
        <Flex id={styles.flex}>
              
      <form onSubmit={HandleSubmit} id={styles.left}> 
      <p style={{ fontSize: "1rem", fontWeight: "bold" }}>ADD CARD DETAILS</p>
      <Input variant = 'flushed' label='' m = {3} id='Card-Number' placeholder='Card Number *' onChange={(e)=>setnumber(e.target.value)}/>
      
      <Box display='flex' justifyContent="space-evenly">
        <Input variant = 'flushed' label='' m = {3} id='Valid' placeholder='Valid (MM/YY) *'  onChange={(e)=>setvalid(e.target.value)}/>
        <Input variant = 'flushed' label='' m = {3} id='CVV' placeholder='CVV *' onChange={(e)=>setcvv(e.target.value)} />        
      </Box>
      <Input variant = 'flushed' label='' m = {3} id='Name' placeholder='Name on Card *'  onChange={(e)=>setname(e.target.value)}/>
      
      
      <p>We do not store your card details with us</p>

    <Center>
        <Button type="submit" style={{ margin: "1rem 0",backgroundColor: "#20a87e" }}>CONTINUE</Button>
   
    </Center>
    </form>

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
      
        
      </Box>
    </Box>



   </Flex> 
   </Box>
    )
  }

 export default Payments