import React, { useEffect, useState } from  'react'
import styles from "../Styling/bag.module.css"
import {
    Input,
    Button,
    Box,
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

  

const ShoppingBag = () => {

    const {user} = useSelector(store=>store.Loginreducer)
    const id = user._id

    

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    const dispatch = useDispatch()


    const [address, setaddress] = useState({})
    
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
    const [myprods, setmyprods] = useState([])
    
    const[totalqty, settotalqty] = useState(0)
    const[totaldiscount, settotaldiscount] = useState(0)
    const[grandtotal, setgrandtotal] = useState(0)
    const[priceWODiscount, setpriceWODiscount] = useState(0)
   

    const PostIt = () =>{
        dispatch(addAddressAction(address, id)) 
    }

    // change below later

    const prods = [{
        "_id":1,
        "images": ["https://images.dailyobjects.com/marche/product-images/1801/black-rugged-series-apple-watchband-with-protective-bumper-case-42-44-45mm-images/Black-Rugged-Series-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1","https://images.dailyobjects.com/marche/product-images/1801/black-rugged-series-apple-watchband-with-protective-bumper-case-42-44-45mm-images/Black-Rugged-Series-Apple-WatchBand-with-Protective-Bumper-Case-1ST.jpg?tr=cm-pad_crop,v-2,w-316,h-535,dpr-1", "https://images.dailyobjects.com/marche/product-images/1801/black-rugged-series-apple-watchband-with-protective-bumper-case-42-44-45mm-images/Black-Rugged-Series-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1"],
          "title": "Black Rugged Series Apple WatchBand with Protective Bumper Case (44mm)",
          "price": 2499,
          "description": "Complement your active lifestyle with the stylish, flexible and widely adjustable Ridge Loop Apple WatchBand. Crafted with durable yarns, this dual-layered, single strap makes for a must-wear accessory for every place you go- from adventurous trips to your daily runs. The G-hook closure of the watchband easily slides in the loop and offers a secure fit along with dependable protection. Compatible with Apple Watch Series 1-8 & SE (38/40/41 & 42/44/45), it is made of a material that�s flexible ensuring easy installation and removal.",
          "discounted_price": 3699,
          "offer": "FREE DUFFLE BAG / WALLET*",
          "category": "Watch",
          "details": [
            {
              "heading": "PULL TAB NYLON WEAVE APPLE WATCHBAND",
              "content": "A new style band, made to offer soft-cushioning and enhanced protection to your watch, Pull Tab Nylon Weave Apple Watchband is sweat-absorbent, infinitely adjustable and is made to effortlessly get through your everyday wear and tear."
            },
            {
              "heading": "DEPENDABLE TACTICAL PROTECTION",
              "content": "The pull tab closure with velcro strap makes it a universal fit and offers infinite adjustability. Additionally, the breathable material keeps the watch secure on your wrist during your daily swings between places."
            }
          ],
          "color": "black"
        },{
            "_id":2,
          "images": ["https://images.dailyobjects.com/marche/product-images/1801/green-black-dual-lock-apple-watchband-with-protective-bumper-case-44mm-images/Green-Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-2n.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1","https://images.dailyobjects.com/marche/product-images/1801/green-black-dual-lock-apple-watchband-with-protective-bumper-case-44mm-images/Green-Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-4t.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1","https://images.dailyobjects.com/marche/product-images/1801/green-black-dual-lock-apple-watchband-with-protective-bumper-case-44mm-images/Green-Black-Dual-Lock-Apple-WatchBand-with-Protective-Bumper-Case-3r.jpg?tr=cm-pad_crop,v-2,w-316,h-535,dpr-1"],
          "title": "Green-Black Dual Lock Apple WatchBand with Protective Bumper Case (44mm)",
          "price": 1699,
          "description": "Complement your active lifestyle with the stylish, flexible and widely adjustable Ridge Loop Apple WatchBand. Crafted with durable yarns, this dual-layered, single strap makes for a must-wear accessory for every place you go- from adventurous trips to your daily runs. The G-hook closure of the watchband easily slides in the loop and offers a secure fit along with dependable protection. Compatible with Apple Watch Series 1-8 & SE (38/40/41 & 42/44/45), it is made of a material that�s flexible ensuring easy installation and removal.",
          "discounted_price": 2499,
          "offer": "BUY ANY 3 @ 2499 ONLY",
          "category": "Watch",
          "details": [
            {
              "heading": "PULL TAB NYLON WEAVE APPLE WATCHBAND",
              "content": "A new style band, made to offer soft-cushioning and enhanced protection to your watch, Pull Tab Nylon Weave Apple Watchband is sweat-absorbent, infinitely adjustable and is made to effortlessly get through your everyday wear and tear."
            },
            {
              "heading": "DEPENDABLE TACTICAL PROTECTION",
              "content": "The pull tab closure with velcro strap makes it a universal fit and offers infinite adjustability. Additionally, the breathable material keeps the watch secure on your wrist during your daily swings between places."
            }
          ],
          "color": "green"
        },{
            "_id":3,
          "images": ["https://images.dailyobjects.com/marche/product-images/1801/black-ribbed-silicone-apple-watchband-38-40-41mm-images/Black-Ribbed-Silicone-Apple-Watchband-VW.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1","https://images.dailyobjects.com/marche/product-images/1801/black-ribbed-silicone-apple-watchband-38-40-41mm-images/Black-Ribbed-Silicone-Apple-Watchband-2nd.jpg?tr=cm-pad_crop,v-2,w-316,h-535,dpr-1","https://images.dailyobjects.com/marche/product-images/1801/black-ribbed-silicone-apple-watchband-38-40-41mm-images/Black-Ribbed-Silicone-Apple-Watchband-5th.png?tr=cm-pad_resize,v-2,w-316,h-535,dpr-1"],
          "title": "Black Ribbed Silicone Apple WatchBand (38/40/41mm)",
          "price": 1699,
          "description": "Complement your active lifestyle with the stylish, flexible and widely adjustable Ridge Loop Apple WatchBand. Crafted with durable yarns, this dual-layered, single strap makes for a must-wear accessory for every place you go- from adventurous trips to your daily runs. The G-hook closure of the watchband easily slides in the loop and offers a secure fit along with dependable protection. Compatible with Apple Watch Series 1-8 & SE (38/40/41 & 42/44/45), it is made of a material that�s flexible ensuring easy installation and removal.",
          "discounted_price": 2199,
          "offer": "BUY ANY 3 @ 2499 ONLY",
          "category": "Watch",
          "details": [
            {
              "heading": "PULL TAB NYLON WEAVE APPLE WATCHBAND",
              "content": "A new style band, made to offer soft-cushioning and enhanced protection to your watch, Pull Tab Nylon Weave Apple Watchband is sweat-absorbent, infinitely adjustable and is made to effortlessly get through your everyday wear and tear."
            },
            {
              "heading": "DEPENDABLE TACTICAL PROTECTION",
              "content": "The pull tab closure with velcro strap makes it a universal fit and offers infinite adjustability. Additionally, the breathable material keeps the watch secure on your wrist during your daily swings between places."
            }
          ],
          "color": "black"
        }]

        useEffect(()=>{
            let prodWithqty = prods.map((item)=>({...item, qty:1}))
            setmyprods(prodWithqty) 
        },[])

        const HandleQty = (id, val)=>{
                let updateddata= myprods.filter((item)=>item._id == id? item.qty +=val:item)
                setmyprods(updateddata)
        }

        const HandleDelete = (id)=>{
              let updateddata= myprods.filter((item)=>item._id !== id)
              setmyprods(updateddata)
        }

        useEffect(()=>{
            let Qty=0
            let disc=0
            let grand=0
            let WODiscount = 0
            for(let i=0; i<myprods.length; i++){
                Qty+=myprods[i].qty
                disc+= (myprods[i].discounted_price * myprods[i].qty) - (myprods[i].price * myprods[i].qty)
                grand += myprods[i].price * myprods[i].qty
                WODiscount += myprods[i].discounted_price * myprods[i].qty
            }
            settotalqty(Qty)
            settotaldiscount(disc)
            setgrandtotal(grand)
            setpriceWODiscount(WODiscount)
        },[myprods])      
       
    
  
      const HandleSubmit =(e)=>{
          e.preventDefault()
          if(name!=="" && mobile!=="" && email!=="" && pin!=="" && city!=="" && state!==""  && country!=="" && building!=="" && area!==""){
            setaddress({name, mobile, email, pin, city, state, country, building, area, landmark, gstin})
            PostIt()

            // localStorage.setItem()
          }
          else{
            alert("Please fill all the details")
          }                  
      }

      

    const btnRef = React.useRef(null)
  return (
    <div>
        <div>
            <img src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" />
        </div>
 
 
        <div>
            <h1>SHOPPING BAG</h1>           
            <div id={styles.sidetoside}>  {/* flex */}
                <div id={styles.left}>
                    <div id={styles.leftInside}>
                        {myprods.map((item)=><div key={item._id} id={styles.indiDiv}> {/* flex */}
                                    <div id={styles.imageDiv}>
                                        <img src={item.images[0]} alt="ProdImage" />
                                    </div>
                                    <div id={styles.ProdDeets}>
                                        <p>{item.title}</p>
                                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                                            <p>{`Rs. ${item.price * item.qty}`}</p>
                                            <p style={{textDecoration: "line-through"}}>{item.discounted_price * item.qty}</p>
                                        </div>
                                        <div style={{display:"flex",width: "70%", justifyContent:"spaceBetween"}}>
                                          <div>
                                            <button disabled={item.qty==1} onClick={()=>HandleQty(item._id, -1)}>-</button>
                                            <button>{item.qty}</button>
                                            <button  onClick={()=>HandleQty(item._id, 1)}>+</button>
                                          </div>
                                          <div>
                                            <button onClick={()=>HandleDelete(item._id)}><img src="https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1" alt="delete" /></button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                        )}
                    </div>

                </div>
                <div id={styles.right}> {/* right */}
                    <div id={styles.rightInside}>
                        <div className={styles.flexIt} id={styles.blueBox}>{/* blue, flex */}
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
                        <Button mt={3} ref={btnRef} onClick={onOpen} style={{backgroundColor:"#20a87e"}}>
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
      <Input variant = 'flushed' label='' m = {3} id='first-name' placeholder='Full name *' onChange={(e)=>setname(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Mobile *'  onChange={(e)=>setmobile(e.target.value)}/>
      <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Email Address *'  onChange={(e)=>setemail(e.target.value)}/>
      <Box display='flex' justifyContent="space-evenly">
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Pincode *'  onChange={(e)=>setpin(e.target.value)}/>
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='City *' onChange={(e)=>setcity(e.target.value)} />
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='State *'  onChange={(e)=>setstate(e.target.value)}/>
        <Input variant = 'flushed' label='' m = {3} id='last-name' placeholder='Country *'  onChange={(e)=>setcountry(e.target.value)}/>
      </Box>
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

    </div>
  )
}

export default ShoppingBag