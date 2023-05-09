import React, { useEffect, useState } from "react"
import styles from '../Styling/payment.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import {
    Box, 
    Button,
    Flex,
    Input,  
    Center,
    Text
  } from '@chakra-ui/react'  

import {UpdatePaymentAction} from "../Redux/PaymentReducer/action"
import { GetAllCartProductsAction } from "../Redux/CartReducer/action";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
  

function Payments() {

  var orderSummary = JSON.parse(localStorage.getItem("orderSummary"))
  const {totalqty, totaldiscount, grandtotal, priceWODiscount} = orderSummary
  const [cart,setCart] = useState([]);

  const {user,token} = useSelector(store=>store.Loginreducer)
  const {allcartProducts} = useSelector(store=>store.CartReducer)
 
    const[number, setnumber] = useState("")
    const[valid, setvalid] = useState("")
    const[cvv, setcvv] = useState("")
    const[name, setname] = useState("")

    const dispatch = useDispatch()

    const Navigate = useNavigate(); 
    const toast = useToast()


    const updatePayment = async()=>{
      await allcartProducts.length!=0&&allcartProducts.map((item)=>{
        dispatch(UpdatePaymentAction(token,item._id))
      })
    }

    

    const HandleSubmit =(e)=>{
        e.preventDefault()
        if(number=="" || valid=="" || cvv=="" || name==""){
          toast({
            title: 'Please fill all the details.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Payment Successfull.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          updatePayment()  
          Navigate("/")        
        }                
    }

    useEffect(()=>{
      dispatch(GetAllCartProductsAction(token,user[0]._id))
    },[])
    console.log(allcartProducts)
    return (
      <Box>
        <Navbar/>
        <Box>
            <Center><Text id={styles.heading} fontSize={{ base: '25px', md: '35px', lg: '35px' }} fontWeight={"bold"}  mb={5}>CHECKOUT</Text></Center>
        <Flex id={styles.flex}>
              
      <form onSubmit={HandleSubmit} id={styles.left}> 
      <p style={{ fontSize: "1rem", fontWeight: "bold" }}>ADD CARD DETAILS</p>
      <Input variant = 'flushed' type="number" label='' m = {3} id='Card-Number' placeholder='Card Number *' onChange={(e)=>setnumber(e.target.value)}/>
      
      <Box display='flex' justifyContent="space-evenly">
        <Input variant = 'flushed' label='' m = {3} id='Valid' placeholder='Valid (MM/YY) *'  onChange={(e)=>setvalid(e.target.value)}/>
        <Input variant = 'flushed' type="password" label='' m = {3} id='CVV' placeholder='CVV *' onChange={(e)=>setcvv(e.target.value)} />        
      </Box>
      <Input variant = 'flushed' label='' m = {3} id='Name' placeholder='Name on Card *'  onChange={(e)=>setname(e.target.value)}/>
      
      
      <p>We do not store your card details with us</p>

    <Center>
        <Button type="submit" style={{ margin: "1rem 0",backgroundColor: "#20a87e" }}>CONTINUE</Button>
   
    </Center>
    </form>

    <div id={styles.summary}>
                        <div>
                            <h2 style={{ fontSize: "1rem", fontWeight: "bold" }}>ORDER SUMMARY</h2>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>{`Item Total (${totalqty} Items)`}</p>
                                <p>{`Rs. ${priceWODiscount}`}</p>
                            </div>
                            <div className={styles.flexIt} style={{color:"rgb(231, 125, 143)"}}> {/* flex */}
                                <p>Discount</p>
                                <p>{`Rs. ${totaldiscount}`}</p>
                            </div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Shipping</p>
                                <p style={{color:"rgb(231, 125, 143)"}}>FREE</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Grand Total</p>
                                <p>{`Rs. ${grandtotal}`}</p>
                            </div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>(Inclusive of Taxes)</p>
                                <p style={{color:"rgb(231, 125, 143)"}}>{`You Saved Rs.${totaldiscount}`}</p>
                            </div>
                        </div>                        
                    </div>



   </Flex> 
   </Box>
   <Footer/>
   </Box>
    )
  }

 export default Payments