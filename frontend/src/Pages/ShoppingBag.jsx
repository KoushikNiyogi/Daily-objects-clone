import React, { useEffect, useState } from  'react'
import styles from "../Styling/bag.module.css"

import {
    Input,
    Button,
    div,
    useDisclosure,   
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'  

import { useDispatch, useSelector } from 'react-redux'
import { addAddressAction } from "../Redux/AddressReducer/action"
import { useNavigate } from 'react-router-dom'
import { GetAllCartProductsAction, UpdateCartProductAction, deleteCartProductAction } from '../Redux/CartReducer/action'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



const ShoppingBag = () => {
  
    const dispatch = useDispatch()
    const Navigate = useNavigate()


    const {user,token} = useSelector(store=>store.Loginreducer)

    const userID = user[0]._id
    const userAddress = user[0].address

    const {allcartProducts} = useSelector(store=>store.CartReducer)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')


    
    const[name, setname] = useState("")
    const[mobile, setmobile] = useState("")
    const[email, setemail] = useState("")
    const[pin, setpin] = useState("")
    const[city, setcity] = useState("")
    const[state, setstate] = useState("")
    const[country, setcountry] = useState("")
    const[building, setbuilding] = useState("")
    const[area, setarea] = useState("")
    const[landmark, setlandmark] = useState("")
    const[gstin, setgstin] = useState("")
    
    const[totalqty, settotalqty] = useState(0)
    const[totaldiscount, settotaldiscount] = useState(0)
    const[grandtotal, setgrandtotal] = useState(0)
    const[priceWODiscount, setpriceWODiscount] = useState(0)


    const HandleCheckout=()=>{
      if(!userAddress){
        onOpen() 
      }
     else{        
        Navigate("/CheckoutPage")
      }
      const orderSummary = {
        totalqty, totaldiscount, grandtotal,priceWODiscount
      }
      localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
    }

    
    
    useEffect(()=>{
      dispatch(GetAllCartProductsAction(token,userID))
    },[])              

    const HandleQty = (id, val)=>{
            console.log(val)
            dispatch(UpdateCartProductAction(token,val, id))
            .then((res)=>dispatch(GetAllCartProductsAction(token,userID)))
    }

    const HandleDelete = (id)=>{
            dispatch(deleteCartProductAction(token,id))
            .then((res)=>dispatch(GetAllCartProductsAction(token,userID)))

    }

    

      
    useEffect(()=>{
        let Qty=0
        let disc=0
        let grand=0
        let WODiscount = 0
        for(let i=0; i<allcartProducts.length; i++){
            Qty+=allcartProducts[i].quantity
            disc+= (allcartProducts[i].discounted_price * allcartProducts[i].quantity) - (allcartProducts[i].price * allcartProducts[i].quantity)
            grand += allcartProducts[i].price * allcartProducts[i].quantity
            WODiscount += allcartProducts[i].discounted_price * allcartProducts[i].quantity
        }
        settotalqty(Qty)
        settotaldiscount(disc)
        setgrandtotal(grand)
        setpriceWODiscount(WODiscount)
    },[allcartProducts])
    
    
       
    const PostIt = (address) =>{
        dispatch(addAddressAction(token,address, user[0]._id))
        .then((res)=>{
          console.log(res)
          Navigate("/CheckoutPage")
        })
        .catch((err)=>alert(err));
    }
  
  
    const HandleSubmit =(e)=>{
        e.preventDefault()
        if(name!=="" && mobile!=="" && email!=="" && pin!=="" && city!=="" && state!==""  && country!=="" && building!=="" && area!==""){
          const address = {name, mobile, email, pin, city, state, country, building, area, landmark, gstin}
          PostIt(address)
        }
        else{
          alert("Please fill all the details")
        }                  
    }     

    const btnRef = React.useRef(null)

    console.log(userID,user)

    

  return (
    <div>
      <Navbar/>
        <div>
            <img src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" />
        </div>
 
 
        <div>
            <h1>SHOPPING BAG</h1>           
            <div id={styles.sidetoside}>  {/* flex */}
                <div id={styles.left}>
                    <div id={styles.leftInside}>
                        {allcartProducts.length!=0&&allcartProducts.map((item)=><div key={item._id} id={styles.indiDiv}> {/* flex */}
                                    <div id={styles.imageDiv}>
                                        <img src={item.images[0]} alt="ProdImage" />
                                    </div>
                                    <div id={styles.ProdDeets}>
                                        <p>{item.title}</p>
                                        <div style={{display:"flex", justifyContent:"space-between", width:"50%", marginTop:"10px"}}>
                                            <p>{`Rs. ${item.price * item.quantity}`}</p>
                                            <p style={{textDecoration: "line-through"}}>{item.discounted_price * item.quantity}</p>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
                                          <div>
                                            <button disabled={item.quantity==1} onClick={()=>HandleQty(item._id, item.quantity-1)}>-</button>
                                            <button>{item.quantity}</button>
                                            <button  onClick={()=>HandleQty(item._id, item.quantity+1)}>+</button>
                                          </div>
                                          <div>
                                            <button style={{border:"none"}} onClick={()=>HandleDelete(item._id)}><img src="https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1" alt="delete" /></button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                        )}
                    </div>

                </div>
                <div id={styles.right}> {/* right */}
                    <div id={styles.rightInside}>
                        <div className={styles.flexIt} id={styles.bluediv}>{/* blue, flex */}
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/gift-icon.png?tr=cm-pad_resize,v-2" alt="gift" /></div>
                                <div><h2>MAKE IT A GIFT INR 500</h2></div>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/information-icon-updated-02.png?tr=cm-pad_resize,v-2,w-14,h-14,dpr-1" alt="info" /></div>
                            </div>     
                            <div><button>ADD+</button></div>
                        </div>
                        <div className={styles.flexIt}>
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/offers-icon-324-280px.png?tr=cm-pad_resize,v-2" alt="coupon" /></div>
                                <div><h2>COUPONS & OFFERS</h2><p style={{display:"inline"}}>SUMMERSALE</p><p>Coupon Applied</p></div>
                            </div>
                            <div><select name="" id=""><option value=""></option></select></div>
                        </div>
                        <div className={styles.flexIt}>
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/gift-card-icon-2024-1388.png?tr=cm-pad_resize,v-2" alt="gift card" /></div>
                                <div><h2>REDEEM GIFT CARD</h2></div>
                            </div>
                            <div><select name="" id=""><option value=""></option></select></div>
                        </div>
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
                        <Button mt={3} ref={btnRef} onClick={HandleCheckout} style={{backgroundColor:"#20a87e"}}>
                            CHECKOUT
                        </Button>

                    </div>
                </div>
            </div>
        </div>

        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ADD NEW ADDRESS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
      <form onSubmit={HandleSubmit}>      
      <Input variant = 'flushed' label=''  m = {3} id='first-name' placeholder='Full name *' onChange={(e)=>setname(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Mobile *'  onChange={(e)=>setmobile(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Email Address *'  onChange={(e)=>setemail(e.target.value)}/>
      <div display='flex' justifyContent="space-evenly">
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Pincode *'  onChange={(e)=>setpin(e.target.value)}/>
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='City *' onChange={(e)=>setcity(e.target.value)} />
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='State *'  onChange={(e)=>setstate(e.target.value)}/>
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Country *'  onChange={(e)=>setcountry(e.target.value)}/>
      </div>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Flat No/Building, Street Name *'  onChange={(e)=>setbuilding(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Area/Locality *'  onChange={(e)=>setarea(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Landmark' onChange={(e)=>setlandmark(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='GSTIN' onChange={(e)=>setgstin(e.target.value)}/>
      
      <p>PS. Your information is safe with us, No spam.</p>

    <Center>
    <ModalFooter>
        <Button type="submit" >ADD ADDRESS</Button>
    </ModalFooter>
    </Center>
    </form>
    </ModalBody>
    </ModalContent>
</Modal>
     <Footer/>
    </div>
  )
}

export default ShoppingBag