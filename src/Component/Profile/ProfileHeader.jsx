import { Avatar, AvatarGroup, Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import EditProfileModal from './EditProfileModal'
import React from 'react'
import useUserProfileStore from '../../store/useUserProfileStore'
import useAuthStore from '../../store/useAuthStore'

const ProfileHeader = () => {
  const {isOpen,onOpen,onClose}=useDisclosure();
  const {userProfile}=useUserProfileStore()
const {user}=useAuthStore();
const isAuthandUser=user&&userProfile.username===user.username
const isAuthandNotUser=user&&userProfile.username!==user.username
  return (
 <Flex gap={{base:5,md:'90px'}} direction={{base:'column',md:'row'}}>
  <Flex alignItems={'center'}>
  <AvatarGroup justifySelf={'center'} alignSelf={'flex-start'}>
    
  <Avatar src={userProfile.profilePicURL} boxSize={{base:'80px',md:'150px'}}/>
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
{userProfile.username}
</Text>
{isAuthandUser&&<Button fontSize={14}
onClick={onOpen}
h={'32px'}
w={'105px'}
px={4}
py={0}
border={'1px solid white'}
borderRadius={8}
background={'transparent'}>
Edit profile
</Button>}
{isAuthandNotUser&&<Button fontSize={14}
h={'32px'}
w={'105px'}
px={4}
py={0}
_hover={{bg:'blue.600'}}
borderRadius={8}
background={'blue.500'}>
Follow
</Button>}
    </Flex>
<Flex gap={8} fontSize={16} display={{base:'none',md:'flex'}}>
  <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.posts.length} </Text>posts</Text>
  <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.followers.length} </Text> followers</Text>
  <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.following.length} </Text> following</Text>
</Flex>
<Text fontSize={14} fontWeight={'bold'}>{userProfile.fullName} </Text>
<Text fontSize={14}>{userProfile.bio}</Text>
  </Flex>
  {isOpen&&<EditProfileModal isOpen={isOpen} onClose={onClose}/>}
 </Flex>
  )
}

export default ProfileHeader