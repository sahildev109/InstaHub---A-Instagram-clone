import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import { timeAgo } from '../../utils/timeAgo'
import useUserProfileStore from '../../store/useUserProfileStore'

const Caption = ({post}) => {
    const userPorfile=useUserProfileStore(state=>state.userProfile)
  return (
  <>

<Flex gap={2} alignItems={'center'}>
    <Link to={`/${userPorfile.username}`} >
    <Avatar src={userPorfile.profilePicURL} boxSize={'32px'}/>
    </Link>
    <Flex flexDir={'column'}>
        <Flex fontSize={14} gap={2}>
        <Link to={`/${userPorfile.username}`} >
        <Text fontWeight={'bold'}>{userPorfile.username}</Text>
        </Link>
        <Text>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={'gray'}>{timeAgo(post.createdAt)}</Text>
    </Flex>
   </Flex>
  
  </>
  )
}

export default Caption