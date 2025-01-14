import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GoogleAuth = () => {
  return (
   <>
   
    <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'} gap={3}>
             <Image src="./google.png" h={5}></Image>
             <Text color="#53bdeb">Log in with Google</Text>
           </Flex>
   
   </>
  )
}

export default GoogleAuth