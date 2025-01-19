import { Avatar, Box, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { timeAgo } from '../../utils/timeAgo';
import { Link } from 'react-router-dom';

const Comment = ({comment} ) => {

  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

	if (isLoading) return <CommentSkeleton />;

  return (
   <>
   <Flex gap={2} alignItems={'center'}>
    <Link to={`/${userProfile.username}`} >
    <Avatar src={userProfile.profilePicURL} boxSize={'32px'}/>
    </Link>
    <Flex flexDir={'column'}>
        <Flex fontSize={14} gap={2}>
        <Link to={`/${userProfile.username}`} >
        <Text fontWeight={'bold'}>{userProfile.username}</Text>
        </Link>
        <Text>{comment.comment}</Text>
        </Flex>
        <Text fontSize={12} color={'gray'}>{timeAgo(comment.createdAt)}</Text>
    </Flex>
   </Flex>
   
   </>
  )
}

export default Comment

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};