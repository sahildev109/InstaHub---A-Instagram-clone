import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"

import { useState } from "react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import { timeAgo } from "../../utils/timeAgo"
import { Link } from "react-router-dom"
import useFollowUser from "../../hooks/useFollowUser"


const PostHeader = ({post , creatorProfile}) => {
    const {isUpdating, isFollowing, handleFollowUser}=useFollowUser(creatorProfile.uid)
   
   
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
    <Link to={`/${creatorProfile.username}`}>
    <Avatar src={creatorProfile.profilePicURL} size={'sm'}/>
    </Link>
    <Link to={`/${creatorProfile.username}`}>
    <Text>{creatorProfile.username}</Text>
    </Link>
    <Text color={'rgb(115 115 115)'}>• {timeAgo(post.createdAt)}</Text>
    

</Flex>

<Box color={'blue.500'}
cursor={'pointer'}
_hover={
   {
    color:'white'
   }
}
transition={'0.2s ease-in-out'}>
    <Button size={'sm'} onClick={handleFollowUser} isLoading={isUpdating} color={'blue.500'} bg={'transparent'} _hover={{color:'white'}}>
        {isFollowing? 'Unfollow':'Follow'}
    </Button>
</Box>

   </Flex>
  )
}

export default PostHeader