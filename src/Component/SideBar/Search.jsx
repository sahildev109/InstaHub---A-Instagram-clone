import { Box, Text, Tooltip,Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Flex, Button, useDisclosure } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import SuggestedUser from '../SuggestedUsers/SuggestedUser'
import { SearchLogo } from '../../assets/constants'
import { useEffect, useRef, useState } from 'react'
import useSearchUser from '../../hooks/useSearchUser'

const Search = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

   
        

    const searchRef = useRef(null);
	const { user, isLoading, getUserProfile, setUser } = useSearchUser();

	const handleSearchUser = (e) => {
		e.preventDefault();
       getUserProfile(searchRef.current.value);
        
	};
    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);

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
onClick={onOpen}
            >
           <SearchLogo size={24}/>
            <Box display={{base:'none',lg:'block'}}>
    
        <Text >Search</Text>
      </Box>
            </Link>
          </Tooltip>


         

<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
    <ModalOverlay />
    <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Search user</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder='username' 
                    ref={searchRef}
                  />
                </FormControl>

                <Flex w={"full"} justifyContent={"flex-end"}>
                    <Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
                        Search
                    </Button>
                </Flex>
            </form>
           {user && <SuggestedUser user={user} setUser={setUser} />}
            
        </ModalBody>
    </ModalContent>
</Modal>


   </>
  )
}

export default Search