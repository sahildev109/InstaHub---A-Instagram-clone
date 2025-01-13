import { Avatar, AvatarGroup, Box, Button, Flex, Text } from '@chakra-ui/react'

import React from 'react'

const ProfileHeader = () => {
  return (
 <Flex gap={{base:5,md:'90px'}} direction={{base:'column',md:'row'}}>
  <Flex alignItems={'center'}>
  <AvatarGroup justifySelf={'center'} alignSelf={'flex-start'}>
    
  <Avatar src='pp1.png' boxSize={{base:'80px',md:'150px'}}/>
  <Flex ml={10} gap={4} fontSize={12} display={{base:'flex',md:'none'}}>
<Flex direction={'column'}
alignItems={'center'}>
  <Text fontWeight={'bold'}>4</Text>
  <Text>posts</Text>
  </Flex>
  <Flex direction={'column'}
alignItems={'center'}>
  <Text fontWeight={'bold'}>50M</Text>
  <Text>followers</Text>
  </Flex>
  <Flex direction={'column'}
alignItems={'center'}>
  <Text fontWeight={'bold'}>10</Text>
  <Text>following</Text>
  </Flex>

  </Flex>
  </AvatarGroup>
  </Flex>
  <Flex
  direction={'column'}
  gap={{base:2,md:4}}>
    <Flex gap={{base:2,md:5}} direction={{base:'column',md:'row'}}>
<Text fontSize={{base:14,md:20}}>
donquixote.doflamingo
</Text>
<Button fontSize={14}
h={'32px'}
w={'105px'}
px={4}
py={0}
border={'1px solid white'}
borderRadius={8}
background={'transparent'}>
Edit profile
</Button>
    </Flex>
<Flex gap={8} fontSize={16} display={{base:'none',md:'flex'}}>
  <Text><Text as={'span'} fontWeight={'bold'}>4 </Text>posts</Text>
  <Text><Text as={'span'} fontWeight={'bold'}>50M </Text> followers</Text>
  <Text><Text as={'span'} fontWeight={'bold'}>10 </Text> following</Text>
</Flex>
<Text fontSize={14} fontWeight={'bold'}>Donquixote Doflamingo </Text>
<Text fontSize={14}>Kids who have never seen peace and kids who have never seen war have different values!</Text>
  </Flex>
 </Flex>
  )
}

export default ProfileHeader