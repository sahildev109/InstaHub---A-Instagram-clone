import { Box, Text, Tooltip,Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, useDisclosure, Textarea, ModalFooter, Button, Flex, CloseButton, Image } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from "react-router-dom"
import { CreatePostLogo } from '../../assets/constants'
import { BsFillImageFill } from 'react-icons/bs'
import { useRef, useState } from 'react'
import usePreviewImage from '../../hooks/usePreviewImage'
import useShowToast from '../../hooks/useShowToast'
import useAuthStore from '../../store/useAuthStore'
import usePostStore from '../../store/usePostStore'
import useUserProfileStore from '../../store/useUserProfileStore'
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import axios from "axios";
import { auth, firestore } from '../../firebase/firebase'

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
	const [caption, setCaption] = useState("");
	const imageRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage();
	const showToast = useShowToast();
  const {isLoading, handleCreatePost} = useCreatePost();

  const handlePostCreation = async () => {
   try {
    await handleCreatePost(selectedFile, caption);
   setSelectedFile("");
   setCaption("");  
    onClose();
   } catch (error) {
    showToast("Error", error.message, "error");
   }
  }

  return (
   <>
   
   <Tooltip
          
          hasArrow
          label={"Home"}
          placement="right"
          ml={1}
          openDelay={600}
          display={{base:'block',lg:'none'}}
          >
            <Link
            as={RouterLink}
            onClick={onOpen}
            _hover={{
              bg:'whiteAlpha.300'
            }}
            transition={'0.2s ease-in-out'}
            borderRadius={6}
            w={{base:10,lg:'full'}}
            p={2}
           py={{base:2,lg:3}}
            display={'flex'}
            gap={4}
            alignItems={'center'}
            justifyContent={'flex-start'}
            >
           <CreatePostLogo size={24}/>
            <Box display={{base:'none',lg:'block'}}>
    
        <Text >Create</Text>
      </Box>
            </Link>
          </Tooltip>

          <Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />

				<ModalContent bg={"black"} border={"1px solid gray"}>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Textarea
							placeholder='Post caption...'
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
						/>

						<Input type='file' hidden ref={imageRef} onChange={handleImageChange} />

						<BsFillImageFill
							onClick={() => imageRef.current.click()}
							style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
							size={16}
						/>
						{selectedFile && (
							<Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"}>
								<Image src={selectedFile} alt='Selected img' />
								<CloseButton
									position={"absolute"}
									top={2}
									right={2}
									onClick={() => {
										setSelectedFile(null);
									}}
								/>
							</Flex>
						)}
					</ModalBody>

					<ModalFooter>
						<Button mr={3}  onClick={handlePostCreation} isLoading={isLoading}>
							Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
   
   </>
  )
}

export default CreatePost

function useCreatePost() {
	const showToast = useShowToast();
	const [isLoading, setIsLoading] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const createPost = usePostStore((state) => state.createPost);
	const addPost = useUserProfileStore((state) => state.addPost);
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const { pathname } = useLocation();

	const handleCreatePost = async (selectedFile, caption) => {
		if (isLoading) return;
		if (!selectedFile) throw new Error("Please select an image");
		setIsLoading(true);
		const newPost = {
			caption: caption,
			likes: [],
			comments: [],
			createdAt: Date.now(),
			createdBy: authUser.uid,
		};

		try {
			const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
			const userDocRef = doc(firestore, "users", authUser.uid);

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_PRESET_NAME); 
        formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); 
        formData.append("folder", `user_posts/${authUser.username}/${postDocRef.id}`);
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData
          );

          let url=response.data.secure_url;
			
			await updateDoc(postDocRef, { imageURL: url });

			newPost.imageURL = url;

			if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

			if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });

			showToast("Success", "Post created successfully", "success");
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleCreatePost };
}