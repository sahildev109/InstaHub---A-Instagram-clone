import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

import { useState } from "react"


const PostHeader = ({username,profilepic}) => {
    const [isfollowing,setisfollowing]=useState(true)
  return (
   <Flex 
   fontWeight={'bold'} 
   fontSize={'14px'} 
   py={3}
   justifyContent={'space-between'} alignItems={'center'}>
<Flex 
gap={2}
justifyContent={'center'} alignItems={'center'}
cursor={'pointer'}>
    <Avatar src={profilepic} size={'sm'}/>
    <Text>{username}</Text>
    <Text color={'rgb(115 115 115)'}>• 1w</Text>
    

</Flex>

<Box color={'blue.500'}
cursor={'pointer'}
_hover={
   {
    color:'white'
   }
}
transition={'0.2s ease-in-out'}>
    <Text onClick={()=>setisfollowing(!isfollowing)}>
        {isfollowing?'Unfollow':'Follow'}
    </Text>
</Box>

   </Flex>
  )
}

export default PostHeader