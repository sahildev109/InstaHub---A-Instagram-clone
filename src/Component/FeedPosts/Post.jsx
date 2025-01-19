import { Box, Center, Flex, Image, Skeleton, SkeletonCircle, Spinner, VStack } from "@chakra-ui/react"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import useGetUserProfileById from "../../hooks/useGetUserProfileById"



const Post = ({post}) => {
  
  const {userProfile,isLoading} = useGetUserProfileById(post.createdBy)
 if(isLoading){
   return (
    
  
    <VStack  gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap='2'>
                  <SkeletonCircle size='10' />
                  <VStack gap={2} alignItems={"flex-start"}>
                    <Skeleton height='10px' w={"200px"} />
                    <Skeleton height='10px' w={"200px"} />
                  </VStack>
                </Flex>
                <Skeleton w={"full"}>
                  <Box h={"400px"}>contents wrapped</Box>
                </Skeleton>
              </VStack>

  )}
 
 
 
  return (
   <Box px={4}>
  <PostHeader post={post} creatorProfile={userProfile}/>
   <Flex

   borderRadius={4}
   overflow={'hidden'}
   >
    <Image  
    w={'full'}
    src={post.imageURL} />
   </Flex>
   <PostFooter post={post} creatorProfile={userProfile}/>


   </Box >
  )
}

export default Post