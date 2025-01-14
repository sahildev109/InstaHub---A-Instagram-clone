import { Box, VStack, Image, Button, Input, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth"




const AuthForm = () => {



  const [isSignup, setisSignup] = useState(false)
  


  return (<>

    <Box border={'1px solid gray'} p={6}>
      <VStack spacing={4}>
        <Image h={24} src="./logo.png" cursor={'pointer'} ></Image>
       {isSignup?<Signup/>:<Login/>}

        <Flex w={'full'} justifyContent={'center'} alignItems={'center'} mt={4} gap={2} >
          <Box h={"1px"} flex={2} bg={'gray'}></Box>
          <Text color={'gray'}>OR</Text>
          <Box h={"1px"} flex={2} bg={'gray'}></Box>

        </Flex>
       <GoogleAuth/>

      </VStack>

    </Box>
    <Box border={'1px solid gray'} p={6} w={"full"}>
      <Flex w={"full"} justifyContent={"center"} alignItems={'center'} gap={1}>
        <Text >
          {isSignup ? 'Already have an account?' : "Don't have an acount?"}
        </Text>
        <Text color={'#53bdeb'} cursor={'pointer'} onClick={() => setisSignup(!isSignup)}>
          {isSignup ? 'Log in' : "Sign up"}
        </Text>

      </Flex>
    </Box>
  </>
  )
}

export default AuthForm