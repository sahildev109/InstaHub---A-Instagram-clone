import React from 'react'
import ProfileHeader from '../../Component/Profile/ProfileHeader'
import ProfileTabs from '../../Component/Profile/ProfileTabs'
import ProfilePosts from '../../Component/Profile/ProfilePosts'
import { Box, Container, Flex } from '@chakra-ui/react'

const ProfilePage = () => {
  return (
   <>
   <Container border={'1px solid red'}
   maxW={'container.lg'}
   py={{base:0,md:5}}
   px={{base:0,md:10}}>
<Box w={'full'}
mx={'auto'}
px={{base:5,md:10}}
py={10}
>
  <ProfileHeader/>
</Box>
<Flex
w={'full'}
mx={'auto'}
borderTop={'1px solid'}
borderColor={'whiteAlpha.600'}
direction={'column'}
px={2}

>
  <ProfileTabs/>
  <ProfilePosts/>
</Flex>
   </Container>
      </>
  )
}

export default ProfilePage