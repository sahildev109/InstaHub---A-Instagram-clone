import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignUpWEmail from '../../hooks/useSignUpWEmail'

const Signup = () => {

const [showPass,setshowPass]=useState(false)

const [inp,setinp]=useState(
    {
      fullName:'',
      username:'',
      email:'',
      password:'',
     
    }
  )
const {loading,error,signup}=useSignUpWEmail()
  return (
    <>

    <Input  placeholder="Username" type="text" value={inp.username} 
            onChange={(e)=>setinp({...inp,username:e.target.value})}></Input>

    <Input  placeholder="Full Name" type="text" value={inp.fullName} 
            onChange={(e)=>setinp({...inp,fullName:e.target.value})}></Input>
    
    <Input  placeholder="E-mail" type="email" value={inp.email} 
            onChange={(e)=>setinp({...inp,email:e.target.value})}></Input>

<InputGroup>

            <Input  placeholder="Password" type={showPass?'text':'password'} value={inp.password}
            onChange={(e)=>setinp({...inp,password:e.target.value})}></Input>
            <InputRightElement>
            <Button bg={'transparent'} _hover={{bg:'transparent'}} onClick={()=>setshowPass(!showPass)}>
{showPass?<ViewIcon/>:<ViewOffIcon/>}

            </Button>
            </InputRightElement>

</InputGroup>
{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
 
            <Button w={'full'} colorScheme="blue" size={'sm'} onClick={()=>signup(inp)} isLoading={loading}>
                              Sign up
                            </Button>
    </>
  )
}

export default Signup