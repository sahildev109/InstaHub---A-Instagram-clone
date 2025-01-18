import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import useAuthStore from '../../store/useAuthStore'
import useFollowUser from '../../hooks/useFollowUser'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'
import { Link } from 'react-router-dom'

const SuggestedUser = ({user,setUser}) => {
    const {isFollowing,isUpdating,handleFollowUser}=useFollowUser(user.uid)
    const authUser=useAuthStore(state=>state.user)
    const { isLoading, userProfile }=useGetUserProfileByUsername(user.username)
   
    const isSameUser=authUser.username===user.username

    const onFollowUser = async () => {
		await handleFollowUser();
        setUser((prevUser) => ({
            ...prevUser,
            followers: isFollowing
                ? prevUser.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...prevUser.followers, authUser],
        }));
    
	};

  return (
 <>
<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
<Flex alignItems={'center'} gap={2}
cursor={'pointer'}
>
    <Link to={`/${user.username}`}>
<Avatar src={user.profilePicURL} boxSize={'44px'}/>
</Link>
<Box>
<Link to={`/${user.username}`}>
    <Text fontWeight={'bold'} fontSize={14}>{user.username}</Text>
    </Link>
    <Text fontSize={12} color={'rgb(115, 115, 115)'} fontWeight={600}> {user.followers.length} Followers</Text>
</Box>
</Flex>
<Button  bg={'transparent'} fontSize={12} fontWeight={'bold'} color={'blue.500'} _hover={{color:'white' , bg:'transparent'}} transition={'0.2s ease-in-out'} cursor={'pointer'} onClick={onFollowUser} isLoading={isUpdating}>
  {isSameUser?'': isFollowing?'Unfollow':'Follow'}
</Button>
</Flex>
 
 </>
  )
}

export default SuggestedUser