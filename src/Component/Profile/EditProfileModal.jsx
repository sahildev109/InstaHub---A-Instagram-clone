import {
  	Avatar,
  	Button,
  	Center,
  	Flex,
  	FormControl,
  	FormLabel,
  	Heading,
  	Input,
  	Modal,
  	ModalBody,
  	ModalCloseButton,
  	ModalContent,
  	ModalHeader,
  	ModalOverlay,
  	Stack,
  } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import usePreviewImage from "../../hooks/usePreviewImage";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";
const EditProfile = ({ isOpen, onClose }) => {
    const { selectedFile, handleImageChange, setSelectedFile }=usePreviewImage();
    const fileInputRef = useRef(null);
	const toast = useShowToast();
    const [inp,setinp]=useState({
      fullName:'',
      username:'',  
      bio:''
    })
const {editProfile, isUpdating}=useEditProfile();

    const user=useAuthStore((state)=>state.user)
    const handleEditProfile= async()=>{
     try {
		console.log(inp);
		await editProfile(inp,selectedFile);
		setSelectedFile(null);
		onClose()
	 } catch (error) {
		toast("Error", error.message, "error");
		
	 }
    }
  	return (


  		<>
  			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  				<ModalOverlay />
  				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
  					<ModalHeader />
  					<ModalCloseButton />
  					<ModalBody>
  						{/* Container Flex */}
  						<Flex bg={"black"}>
  							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
  								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
  									Edit Profile
  								</Heading>
  								<FormControl>
  									<Stack direction={["column", "row"]} spacing={6}>
  										<Center>
  											<Avatar size='xl' src={selectedFile||user.profilePicURL} border={"2px solid white "} />
  										</Center>
  										<Center w='full'>
  											<Button w='full' onClick={()=>  fileInputRef.current.click()}>Edit Profile Picture</Button>
  										</Center>
                      <Input type="file" 
                      ref={fileInputRef}
                      display="none" onChange={handleImageChange}/>
  									</Stack>
  								</FormControl>
  
  								<FormControl>
  									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
  									<Input placeholder={"Full Name"} size={"sm"} type={"text"} value={inp.fullName || user.fullName} onChange={((e)=>setinp({...inp,fullName:e.target.value}))} />
  								</FormControl>
  
  								<FormControl>
  									<FormLabel fontSize={"sm"}>Username</FormLabel>
  									<Input placeholder={"Username"} size={"sm"} type={"text"} value={inp.username || user.username} onChange={((e)=>setinp({...inp,username:e.target.value}))} />
  								</FormControl>
  
  								<FormControl>
  									<FormLabel fontSize={"sm"}>Bio</FormLabel>
  									<Input placeholder={"Bio"} size={"sm"} type={"text"} value={inp.bio || user.bio} 
                    onChange={((e)=>setinp({...inp,bio:e.target.value}))}/>
  								</FormControl>
  
  								<Stack spacing={6} direction={["column", "row"]}>
  									<Button
  										bg={"red.400"}
  										color={"white"}
  										w='full'
  										size='sm'
  										_hover={{ bg: "red.500" }}
                      onClick={onClose}
  									>
  										Cancel
  									</Button>
  									<Button
  										bg={"blue.400"}
  										color={"white"}
  										size='sm'
  										w='full'
  										_hover={{ bg: "blue.500" }}
                      onClick={handleEditProfile}
					  isLoading={isUpdating}
  									>
  										Submit
  									</Button>
  								</Stack>
  							</Stack>
  						</Flex>
  					</ModalBody>
  				</ModalContent>
  			</Modal>
  		</>
  	);
  };
  
  export default EditProfile;