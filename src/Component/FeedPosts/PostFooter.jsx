import { Box, Button, Container, Flex, Input, InputGroup, InputRightAddon, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import usePostComment from '../../hooks/usePostComment'
import useAuthStore from '../../store/useAuthStore'

const PostFooter = ({username, isProfilePage,post}) => {
const [isliked,setisliked]=useState(false)
const [likes,setlikes]=useState(10)
const [comment, setComment] = useState("");
const authUser=useAuthStore(state=>state.user)
const handleLike=()=>{
  const likeState=!isliked
    setisliked(likeState)
    likeState?setlikes(likes+1):setlikes(likes-1)
 
}

const {isCommenting,handlePostComment}=usePostComment();
const handleComment= async()=>{

  await handlePostComment(post.id, comment);
		setComment("");
}



  return (
   <>
   <Box w={'full'} mb={5} mt={'auto'} >
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
    
   {isProfilePage? null:(<>
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
   </>)}
{authUser&&<Flex w={'full'} alignItems={'center'} justifyContent={'space-between'} fontSize={"14px"} gap={2}>
<InputGroup>
<Input variant={'flushed'} placeholder='Add comment....' value={comment} onChange={(e)=>setComment(e.target.value)} />
<InputRightElement>
<Button 
fontWeight={'bold'}
color={'blue.500'}
_hover={{color:'white'}}
bg={'transparent'}
onClick={handleComment}
isLoading={isCommenting}>
  Post
</Button>
</InputRightElement>
</InputGroup>
</Flex>}

   </Box>
   </>
  )
}

export default PostFooter