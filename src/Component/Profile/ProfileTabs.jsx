import { Box, Flex, Text } from '@chakra-ui/react'
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { GrBookmark } from "react-icons/gr";

const ProfileTabs = () => {
  return (
  <Flex w={'full'} justifyContent={'center'} alignItems={'center'} fontSize={12} gap={12} >
<Flex justifyContent={'center'} alignItems={'center'} gap={2} borderTop={'1px solid white'} py={3}cursor={'pointer'}>
  <Box>
<BsGrid3X3/>
  </Box>
  <Text>POSTS</Text>
</Flex>
<Flex justifyContent={'center'} alignItems={'center'} gap={1} py={3} cursor={'pointer'}>
  <Box>
<GrBookmark/>
  </Box>
  <Text>SAVED</Text>
</Flex>
<Flex justifyContent={'center'} alignItems={'center'} gap={1} py={3} cursor={'pointer'}>
  <Box>
<FaRegHeart/>
  </Box>
  <Text>LIKED</Text>
</Flex>

  </Flex> 
  )
}

export default ProfileTabs