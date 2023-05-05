import { FormControl, Input, Button, Spinner, useToast, Box, Heading, FormLabel } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import "./Signup.css"

// import { getbanuserdata } from '../Redux/Admin/userauthaction'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { getlogindata } from '../Redux/UserLogin/userloginaction'

const LoginPage = () => {
  const init = {
    email: "",
    password: "",
  }

  const [data, setData] = useState(init)
  const toast = useToast()
  const dispatch = useDispatch()
  const isloading = useSelector(store => store.Loginreducer.isloading)
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  let tokendata = JSON.parse(localStorage.getItem("token")) || []
  let userId = JSON.parse(localStorage.getItem("userid")) || ""

  const navigate = useNavigate()
  const onSubmit = (e, data) => {
    e.preventDefault()

    dispatch(getlogindata(data))
    .then((res)=>{
      if(res.payload.token){
        toast({
          position: "center",
          title: 'Login successfull',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/")
        localStorage.setItem("token",JSON.stringify(res.payload.token))
      }
      else{
        toast({
          position: "center",
          title: `${res.payload.msg}`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    })
    .catch((err)=>{
      toast({
        position: "center",
        title: `${err}`,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    })
    setData(init)
  }

  return (<Box>
    <Navbar/>
  <Box width="100vw"   paddingTop={{ base: "8vh", md: "8vh", lg: "15vh" }} display="flex" justifyContent="center">
    <Box  boxShadow= "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" width={["90vw", "90vw", "80vw", "40vw"]} height={["55vh","60vh","60vh","70vh"]} textAlign="center" padding="2%">
    <Heading  as="h2" fontSize="120%">Login here</Heading>
    {
      isloading ?  <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='gree.500' size='xl' margin="auto" />:
      <form className='form' onSubmit={(e) => onSubmit(e, data)}>
      <FormControl className='form-controll'>
        <FormLabel paddingTop="5%">Enter your email</FormLabel>
        <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
        <FormLabel paddingTop="5%">Enter your password</FormLabel>
        <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
      </FormControl>
      <Button colorScheme='teal' type='submit' width="100%" marginTop="5%">
        Submit
      </Button>
    </form>
    }
   
    <Box width="100%" marginTop="50px">
      <p>Don't have an account <Link to="/signup"><p style={{color:"blue",textDecoration:"underline"}}>Create here</p></Link></p>
    </Box>
    </Box>
  </Box>
  </Box>
  )

}
export default LoginPage 