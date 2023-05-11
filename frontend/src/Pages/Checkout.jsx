import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import styles from '../Styling/checkout.module.css'
import { useNavigate } from "react-router-dom";
import {useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Checkout = () => {
  const {user} = useSelector(store => store.Loginreducer);
  const [user1,setUser] = useState(JSON.parse(localStorage.getItem("user"))||[])
  var orderSummary = JSON.parse(localStorage.getItem("orderSummary"))
  const {totalqty, totaldiscount, grandtotal, priceWODiscount} = orderSummary

  const {address} = useSelector(store=>store.AddressReducer)
  // const {user} = useSelector(store=>store.CheckoutReducer) //not using checkout reducer as of now
  
  const Navigate = useNavigate();
  
  

  

  const HandleContinue=()=>{    
      Navigate("/payments")    
  }
  console.log(user1,user)
 
  return <Box>
    <Navbar/>
    <Box>
  <h1 id={styles.heading}>CHECKOUT</h1> 
  <Flex id={styles.flex}>

<Box id={styles.left}>
          <p id={styles.shipping}>SHIPPING ADDRESS</p>
          <Text>{user[0].address.name}</Text>
          <Flex justifyContent="center">
           <Text mr={"10px"}>{user[0].address.building}</Text>
           <Text>{user[0].address.area}</Text>
          </Flex>          
          <Flex justifyContent="center">
           <Text mr={"10px"}>{user[0].address.city}</Text>
           <Text>{user[0].address.state}</Text>
          </Flex>
          <Button width="80%" style={{ margin: "1rem 0",backgroundColor: "#20a87e" }} size='lg'  >Change</Button>
    </Box>
   


                    <div id={styles.summary}>
                        <div>
                            <h2>ORDER SUMMARY</h2>
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
                        <Button mt={3} style={{backgroundColor:"#20a87e"}} onClick={HandleContinue}>
                            CONTINUE
                        </Button>
                    </div>
                    

    </Flex>
    </Box>
    <Footer/>
    </Box>
  }

export default Checkout