import { Avatar, Box, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa6'
import { MdDelete } from "react-icons/md";
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';

const ProfilePost = ({postimg}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <GridItem
    
    cursor={'pointer'}
    overflow={'hidden'}
    borderRadius={4}
    position={'relative'}
    aspectRatio={1/1}
    border={'1px solid'}
    borderColor={'whiteAlpha.300'}
    onClick={onOpen}
    >
<Flex
opacity={0}
_hover={{opacity:1}}
bg={'blackAlpha.600'}
position={'absolute'}
top={0}
bottom={0}
left={0}
zIndex={1}
right={0}
alignItems={'center'} justifyContent={'center'}
transition={'0.3s ease-in-out'}

>
  <Flex gap={8} >
<Flex alignItems={'center'} gap={2}>
<AiFillHeart size={20} />
<Text fontWeight={'bold'}>10.2M</Text>
</Flex>

<Flex alignItems={'center'} gap={2}>
<FaComment size={20} />
<Text fontWeight={'bold'}>4.2M</Text>
</Flex>
  </Flex>

</Flex>
 <Image src={postimg} w={'100%'} h={'100%'} objectFit={'cover'}/>
    </GridItem>


    <Modal isOpen={isOpen} onClose={onClose} size={{ base:'2xl',md:'5xl' }}
    >
        <ModalOverlay />
        <ModalContent  borderRadius={'lg'} >
         
          <ModalCloseButton pt={3}/>
          <ModalBody bg={'black'} borderRadius={'lg'} p={0}  overflow={'hidden'}>
            <Flex w={{base:'90%',sm:'70%',md:'full'}} mx={'auto'} flexDirection={{base:'column',md:'row'}} >
              <Box flex={1.5}
            display="flex" 
            alignItems="center" 
            justifyContent="center"
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}>
                  <Image alignSelf={'center'} src={postimg} alt='hello'/>
              </Box>
              
              <Flex flexDirection={'column'} flex={1}  pt={3}>
<Flex alignItems={'center'} justifyContent={'space-between'} pl={6}>
  <Flex alignItems={'center'} gap={2}>
  <Avatar src='pp1.png' boxSize={'32px'} />
  <Text fontSize={14} fontWeight={'bold'}>donquixote.doflamingo</Text>
  </Flex>
  <Box _hover={{color:'red'}} transition={'0.2s ease-in-out'} pr={10}> 
< MdDelete size={20} cursor={'pointer'} />
</Box>
</Flex>
<Divider my={4} bg={'gray.500'} />
<Flex w={'full'} flexDirection={'column'} gap={4} overflowY={'auto'} maxH={'350px'} pl={6}>
<Comment profilepic={'./pp1.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp3.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp4.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp7.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp7.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp7.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>
<Comment profilepic={'./pp7.png'} username={'donquixote.doflamingo'} comment={'hehehehheheheh'} postedon={'1d'}/>

</Flex>
<Divider my={4} bg={'gray.500'}/>
<Flex px={6} flexDirection={'column'}  flexGrow={1}>
<PostFooter isProfilePage={true}/>
</Flex>
              </Flex>
             
            </Flex>
              
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}

export default ProfilePost