import { Box, Button, Container, Flex, Input, InputGroup, InputRightAddon, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import usePostComment from '../../hooks/usePostComment'
import useAuthStore from '../../store/useAuthStore'
import useLikePost from '../../hooks/useLikePost'

import { timeAgo } from '../../utils/timeAgo'
import CommentsModal from '../Comment/CommentModal'

const PostFooter = ({ isProfilePage,post,creatorProfile}) => {
  const {isOpen,onOpen, onClose}=useDisclosure();

const [comment, setComment] = useState("");
const commentRef=useRef(null)
const authUser=useAuthStore(state=>state.user)
const {isLiked, likes, handleLikePost, isUpdating }=useLikePost(post);

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
     onClick={handleLikePost}
     >
      {isLiked?(<UnlikeLogo/>):(<Box
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
      cursor={'pointer'}
      onClick={()=>commentRef.current.focus()}>
        <CommentLogo />
      </Box>
    </Flex>
    {likes?(<Box fontSize={14} fontWeight={'bold'}>
       <Text>{likes} {likes===1?'like':'likes'}</Text> 
    </Box>):null}
    {isProfilePage?
    <Text color={'gray'} fontSize={12} fontWeight={600}>
      posted {timeAgo(post.createdAt)}
    </Text>:null}
   {isProfilePage? null:(<>
    <Box py={2}>
<Text fontWeight={'bold'}
fontSize={'14px'} >
{creatorProfile.username}
 {'  '}
<Text as={'span'} fontWeight={400}>
{post.caption}
</Text>

</Text>

</Box>
{post.comments.length>0&&<Text cursor={'pointer'}
as={'span'}
fontSize={'14px'}
color={'rgb(115, 115, 115)'}
onClick={onOpen}>
  View all {post.comments.length} comments
</Text>}
   </>)}
{authUser&&<Flex w={'full'} alignItems={'center'} justifyContent={'space-between'} fontSize={"14px"} gap={2}>
<InputGroup>
<Input variant={'flushed'} placeholder='Add comment....' value={comment} onChange={(e)=>setComment(e.target.value)} 
ref={commentRef}

/>
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

   {isOpen&&<CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>}
   </>
  )
}

export default PostFooter