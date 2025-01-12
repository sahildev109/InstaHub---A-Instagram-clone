import { Box, Button, Container, Flex, Input, InputGroup, InputRightAddon, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

const PostFooter = ({username}) => {
const [isliked,setisliked]=useState(false)
const [likes,setlikes]=useState(10)

const handleLike=()=>{
  const likeState=!isliked
    setisliked(likeState)
    likeState?setlikes(likes+1):setlikes(likes-1)
 
}



  return (
   <>
   <Container p={0} w={'full'} mb={5}>
    <Flex p={0}
   gap={4}
   py={2}
   >
    <Box cursor={'pointer'}
     onClick={handleLike}
     >
      {isliked?(<UnlikeLogo/>):(<Box
      color={'rgb(245, 245, 245)'}
      _hover={{
        color:'rgb(115, 115, 115)'
      }}>
        <NotificationsLogo/>
      </Box>)} 
      </Box>
      

      <Box
      color={'rgb(245, 245, 245)'}
      _hover={{
        color:'rgb(115, 115, 115)'
      }} 
      cursor={'pointer'}>
        <CommentLogo />
      </Box>
    </Flex>
    {likes?(<Box fontSize={14} fontWeight={'bold'}>
       <Text>{likes} {likes===1?'like':'likes'}</Text> 
    </Box>):null}
    
   <Box py={2}>
<Text fontWeight={'bold'}
fontSize={'14px'} >
{username} {'  '}
<Text as={'span'} fontWeight={400}>
“Power isn’t determined by your size, but the size of your heart and dreams.”
</Text>

</Text>

</Box>
<Text cursor={'pointer'}
as={'span'}
fontSize={'14px'}
color={'rgb(115, 115, 115)'}>
  View all 1,000 comments
</Text>
<Flex w={'full'} alignItems={'center'} justifyContent={'space-between'} fontSize={"14px"} gap={2}>
<InputGroup>
<Input variant={'flushed'} placeholder='Add comment....' />
<InputRightElement>
<Button 
fontWeight={'bold'}
color={'blue.500'}
_hover={{color:'white'}}
bg={'transparent'}>
  Post
</Button>
</InputRightElement>
</InputGroup>
</Flex>

   </Container>
   </>
  )
}

export default PostFooter