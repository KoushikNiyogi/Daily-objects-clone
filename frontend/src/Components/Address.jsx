
import React, { useState } from "react"
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
  

function AddressForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    const dispatch = useDispatch()
  
    const [dataobj, setdataobj] = useState({})
    
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
    
   //where to get id from 
  

    const PostIt = () =>{
      dispatch(addAddressAction(dataobj, {/*id */})) 
    }

    const HandleSubmit =(e)=>{
        e.preventDefault()
        setdataobj({name, mobile, email, pin, city, state, country, building, area, landmark, gstin})
        PostIt()        
    }

    const btnRef = React.useRef(null)
    return (
      <>
  
        <Button mt={3} ref={btnRef} onClick={onOpen}>
          CHECKOUT
        </Button>
  
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
</>
    )
  }

 export default AddressForm