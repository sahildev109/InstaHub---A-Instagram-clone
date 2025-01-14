import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
const [showPass,setshowPass]=useState(false)
  const [inp,setinp]=useState(
      {
        email:'',
        password:'',
      }
    )

  return (
<>
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

         <Button w={'full'} colorScheme="blue" size={'sm'} >
                  Log in
                </Button>
</>
  )
}

export default Login