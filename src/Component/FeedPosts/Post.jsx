import { Box, Flex, Image } from "@chakra-ui/react"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"


const Post = ({username,profilepic,postimg}) => {
  return (
   <Box px={4}>
   <PostHeader username={username} profilepic={profilepic}/>
   <Flex

   borderRadius={4}
   overflow={'hidden'}
   >
    <Image  
    w={'full'}
    src={postimg} />
   </Flex>
   <PostFooter username={username}/>


   </Box >
  )
}

export default Post