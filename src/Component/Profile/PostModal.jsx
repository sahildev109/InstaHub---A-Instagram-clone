import { Avatar, Box, Button, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from '../../store/useUserProfileStore'
import useAuthStore from '../../store/useAuthStore'
import usePostStore from '../../store/usePostStore'
import useShowToast from '../../hooks/useShowToast'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebase'
import Caption from '../Comment/Caption'

const PostModal = ({isOpen,onClose,post}) => {
  const {userProfile}=useUserProfileStore()
const authUser=useAuthStore(state=>state.user)
const toast = useShowToast();
const [isDeleting, setIsDeleting] = useState(false);
	const deletePost = usePostStore((state) => state.deletePost);
	const decrementPostsCount = useUserProfileStore((state) => state.deletePost);

const handleDeletePost = async () => {


  if (!window.confirm("Are you sure you want to delete this post?")) return;
  if (isDeleting) return;

  try {
   
    const userRef = doc(firestore, "users", authUser.uid);
    await deleteDoc(doc(firestore, "posts", post.id));

    await updateDoc(userRef, {
      posts: arrayRemove(post.id),
    });

    deletePost(post.id);
    decrementPostsCount(post.id);
    toast("Success", "Post deleted successfully", "success");
  } catch (error) {
 toast("Error", error.message, "error");
  } finally {
    setIsDeleting(false);
  }
};



  return (
<>
<Modal isOpen={isOpen} onClose={onClose} size={{ base:'2xl',md:'5xl' }}
    >
        <ModalOverlay />
        <ModalContent  borderRadius={'lg'} >
         
          <ModalCloseButton pt={3}/>
          <ModalBody bg={'black'} borderRadius={'lg'} p={0}  overflow={'hidden'}>
            <Flex w={{base:'90%',sm:'70%',md:'full'}} mx={'auto'} flexDirection={{base:'column',md:'row'}} maxH={'90vh'} minH={'50vh'} >
              <Box flex={1.5}
            display="flex" 
            alignItems="center" 
            justifyContent="center"
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}>
                  <Image alignSelf={'center'} src={post.imageURL} alt='hello'/>
              </Box>
              
              <Flex flexDirection={'column'} flex={1}  pt={3}>
<Flex alignItems={'center'} justifyContent={'space-between'} pl={6}>
  <Flex alignItems={'center'} gap={2}>
  <Avatar src={userProfile.profilePicURL} boxSize={'32px'} />
  <Text fontSize={14} fontWeight={'bold'}>{userProfile.username}</Text>
  </Flex>
  
{authUser?.username === userProfile.username &&<Button bg={'transparent'} _hover={{color:'red', bg:'transparent'}} transition={'0.2s ease-in-out'} mr={10} w={'min-content'} onClick={handleDeletePost}> 
< MdDelete size={20} cursor={'pointer'} />
</Button>}

</Flex>
<Divider my={4} bg={'gray.500'} />
<Flex w={'full'} flexDirection={'column'} gap={4} overflowY={'auto'} maxH={'350px'} pl={6}>
  {post.caption&&<Caption post={post}/>}
{post.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

</Flex>
<Divider my={4} bg={'gray.500'}/>
<Flex px={6} flexDirection={'column'}  flexGrow={1}>
<PostFooter isProfilePage={true} post={post}/>
</Flex>
              </Flex>
             
            </Flex>
              
          </ModalBody>
        </ModalContent>
      </Modal>
</>
  )
}

export default PostModal