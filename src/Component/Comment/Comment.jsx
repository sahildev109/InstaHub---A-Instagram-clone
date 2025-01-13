import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({profilepic,username,comment,postedon} ) => {
  return (
   <>
   <Flex gap={2}>
    <Avatar src={profilepic} boxSize={'32px'}/>
    <Flex flexDir={'column'}>
        <Flex fontSize={14} gap={2}>
        <Text fontWeight={'bold'}>{username}</Text>
        <Text>{comment}</Text>
        </Flex>
        <Text fontSize={12} color={'gray'}>{postedon}</Text>
    </Flex>
   </Flex>
   
   </>
  )
}

export default Comment