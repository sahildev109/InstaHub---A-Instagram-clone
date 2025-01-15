import { Avatar, Box, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa6'
import { MdDelete } from "react-icons/md";
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';
import PostModal from './PostModal';

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


  {isOpen&&<PostModal isOpen={isOpen} onClose={onClose} postimg={postimg}/>}

    </>
  )
}

export default ProfilePost