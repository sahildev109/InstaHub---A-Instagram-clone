import { Box, VStack, Image, Button, Input, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"



const AuthForm = () => {

const navigate=useNavigate();

  const [isSignup, setisSignup] = useState(false)
  const [inp,setinp]=useState(
    {
      email:'',
      password:'',
      confirmpassword:''
    }
  )

const handleAuth=()=>{
  if(inp.email&&inp.password){
    console.log(inp)
    navigate("/")
    }else{
    alert("Fill all required fields!")
    return;
  }
}
  return (<>

    <Box border={'1px solid gray'} p={6}>
      <VStack spacing={4}>
        <Image h={24} src="./logo.png" cursor={'pointer'} ></Image>
        <Input  placeholder="E-mail" type="email" value={inp.email} 
        onChange={(e)=>setinp({...inp,email:e.target.value})}></Input>
        <Input  placeholder="Password" type="password" value={inp.password}
        onChange={(e)=>setinp({...inp,password:e.target.value})}></Input>

        {isSignup ? <Input  placeholder={'Confirm password'} value={inp.confirmpassword}
        onChange={(e)=>setinp({...inp,confirmpassword:e.target.value})}></Input> : null}

        <Button w={'full'} colorScheme="blue" size={'sm'} onClick={handleAuth}>
          {!isSignup ? "Log in" : "Sign up"}
        </Button>

        <Flex w={'full'} justifyContent={'center'} alignItems={'center'} mt={4} gap={2} >
          <Box h={"1px"} flex={2} bg={'gray'}></Box>
          <Text color={'gray'}>OR</Text>
          <Box h={"1px"} flex={2} bg={'gray'}></Box>

        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'} gap={3}>
          <Image src="./Facebook_Logo_Primary.png" h={5}></Image>
          <Text color="#53bdeb">Log in with Facebook</Text>
        </Flex>

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