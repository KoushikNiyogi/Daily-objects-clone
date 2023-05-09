import { FormControl, FormErrorMessage, Checkbox, Input, Select, Button, Spinner, useToast, Box, FormLabel, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import "./Signup.css"
import usersignupaction from '../Redux/UserSignup/usersignupaction'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const SignupPage = () => {
  const init = {
    email: "",
    password: "",
    name: "",
    phonenumber: "",
    token: null,
    cart: [],
    wish: []
  }
  const [data, setData] = useState(init)
  const toast = useToast()
  const dispatch = useDispatch()
  const isloading = useSelector(store => store.usersignupreducer.isloading)
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name } = e.target
    let val = e.target.value
    setData({ ...data, [name]: val })
  }
  const onSubmit = (e, data) => {
    e.preventDefault()
    let payload = { ...data, token: data.name }
    dispatch(usersignupaction(payload))
      .then((res) => {
        console.log(res)
        if (res.payload.user) {
          toast({
            position: "top",
            title: `${res.payload.msg}`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate("/login")
        }
        else {
          toast({
            position: "top",
            title: `${res.payload.msg}`,
            // description: "We've created your account for you.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      })
      .catch((e) => {
        console.log(e)
        toast({
          position: "top",
          title: `${e}`,
          // description: "We've created your account for you.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
    setData(init)
  }


  return (<Box>
    <Navbar />
    <Box width="100vw" paddingTop={{ base: "8vh", md: "8vh", lg: "15vh" }} display="flex" justifyContent="center">
      <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" width={["90vw", "90vw", "80vw", "40vw"]} height={["60vh","60vh","55vh","82vh"]} textAlign="center" padding="2%">
        <Heading as="h2" fontSize="120%">Create account here</Heading>
        {
          isloading ? <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='gree.500' size='xl' margin="auto" /> :
            <form className='form' onSubmit={(e) => onSubmit(e, data)}>
              <FormControl className='form-controll' width="100%">
                <FormLabel paddingTop="3%">Enter your name</FormLabel>
                <Input name='name' value={data.name} onChange={handleChange} className='input' type='text' placeholder="Enter your name" />
                <FormLabel paddingTop="3%">Enter your email</FormLabel>
                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
                <FormLabel paddingTop="3%">Enter your phone</FormLabel>
                <Input name="phonenumber" value={data.phonenumber} onChange={handleChange} className='input' type='number' placeholder="Enter your phone number" />
                <FormLabel paddingTop="3%">Enter your password</FormLabel>
                <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
              </FormControl>
              <Button colorScheme='teal' type='submit' width="100%" marginTop="2%">
                Submit
              </Button>
            </form>
        }
        <div>
          <p>Already a user <Link to="/login"><p style={{ color: "blue", textDecoration: "underline" }}>Login here</p></Link></p>
        </div>
      </Box>
    </Box>
  </Box>
  )

}
export default SignupPage 
