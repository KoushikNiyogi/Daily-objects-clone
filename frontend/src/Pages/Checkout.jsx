import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import styles from '../Styling/checkout.module.css'
import { useNavigate } from "react-router-dom";
import {useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


const Checkout = () => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||[])
  var orderSummary = JSON.parse(localStorage.getItem("orderSummary"))
  const {totalqty, totaldiscount, grandtotal, priceWODiscount} = orderSummary

  const {address} = useSelector(store=>store.AddressReducer)
  // const {user} = useSelector(store=>store.CheckoutReducer) //not using checkout reducer as of now
  
  const Navigate = useNavigate();
  
  

  const{name, city,area, state, pin} = user[0].address;
  

  const HandleContinue=()=>{    
      Navigate("/payments")    
  }
 
  console.log(name,city,state,pin)
  return <Box>
  <h1 id={styles.heading}>CHECKOUT</h1> 
  <Flex id={styles.flex}>

<Box id={styles.left}>
          <p id={styles.shipping}>SHIPPING ADDRESS</p>
          <Text>{"name"}</Text>
          <Text>{`${"area"}, ${"city"}`}</Text>          
          <Text>{`${"city"}, ${"state"} ${"pin"} `}</Text>
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
  }

export default Checkout