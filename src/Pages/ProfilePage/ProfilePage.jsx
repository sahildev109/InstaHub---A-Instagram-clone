import React from 'react'
import ProfileHeader from '../../Component/Profile/ProfileHeader'
import ProfileTabs from '../../Component/Profile/ProfileTabs'
import ProfilePosts from '../../Component/Profile/ProfilePosts'
import { Box, Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

const ProfilePage = () => {
  const {username}=useParams();
  const {isLoading,userProfile}=useGetUserProfileByUsername(username)  

  const userNotFound = !isLoading && !userProfile;
	if (userNotFound) return <UserNotFound />;

  return (
   <>
   <Container 
   maxW={'container.lg'}
   py={{base:0,md:5}}
   px={{base:0,md:10}}>
<Box w={'full'}
mx={'auto'}
px={{base:5,md:10}}
py={10}
>

{!isLoading && userProfile && <ProfileHeader />}
{isLoading ? <ProfileHeaderSkeleton />:null}
		

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

const ProfileHeaderSkeleton = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
};

const UserNotFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"}>
			<Text fontSize={"2xl"}>User Not Found</Text>
			<Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
				Go home
			</Link>
		</Flex>
	);
};