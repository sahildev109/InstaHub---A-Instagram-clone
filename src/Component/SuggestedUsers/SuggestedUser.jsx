import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = ({username,profilepic,followers}) => {
    const [isfollowing,setisfollowing]=useState(false)
  return (
 <>
<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
<Flex alignItems={'center'} gap={2}
cursor={'pointer'}
>
<Avatar src={profilepic} boxSize={'44px'}/>
<Box>
    <Text fontWeight={'bold'} fontSize={14}>{username}</Text>
    <Text fontSize={12} color={'rgb(115, 115, 115)'} fontWeight={600}>{followers} followers</Text>
</Box>
</Flex>
<Text fontSize={12} fontWeight={'bold'} color={'blue.500'} _hover={{color:'white'}} transition={'0.2s ease-in-out'} cursor={'pointer'} onClick={()=>{
    setisfollowing(!isfollowing)
}} >
    {isfollowing?'Unfollow':'Follow'}
</Text>
</Flex>
 
 </>
  )
}

export default SuggestedUser