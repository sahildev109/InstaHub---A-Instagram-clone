import { Box,Flex,Text,VStack,Link, Avatar } from "@chakra-ui/react"
import { InstagramLogo, InstagramMobileLogo,SearchLogo,NotificationsLogo,CreatePostLogo } from "../../assets/constants"
import { Link as RouterLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { Tooltip } from '@chakra-ui/react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/useAuthStore";
import SideBarItems from "./SideBarItems";




const SideBar = () => {
 
  const {handleLogout,isLoggingOut}=useLogout()
  

  
  return (
   <>
   <Box h={'100vh'}
        borderRight={'1px solid gray'}
        w={{base:'70px', lg:'240px'}}
        py={10}
        px={4}
        position={'sticky'}
        top={0}
        left={0}
        >
        
        <Flex w={'full'}
                h={'full'}
                direction={'column'}
                gap={10}
                >
                    <Link as={RouterLink}
                           to={'/'} 
                           pl={2}
                          display={{base:'none',lg:'block'}}
                          >
<InstagramLogo/>
            </Link>
                    <Link as={RouterLink}
                           to={'/'} 
                           
                          
                        w={10}
                        p={2}
                        
                           borderRadius={6}
                           display={{base:'block',lg:'none'}}
                           _hover={{
                            bg:'whiteAlpha.300'

                           }} 
                           
                          >
<InstagramMobileLogo/>
            </Link>
            
<SideBarItems/>

<Tooltip
      hasArrow
      label='Log out'
      placement="right"
      ml={1}
      openDelay={600}
      display={{base:'block',lg:'none'}}
      >
        <Flex
        cursor={'pointer'}
       onClick={handleLogout}
        _hover={{
          bg:'whiteAlpha.300'
        }}
        transition={'0.2s'}
        borderRadius={6}
        w={{base:10,lg:'full'}}
        p={2}
       py={{base:2,lg:3}}
        display={'flex'}
        gap={4}
        alignItems={'center'}
        justifyContent={'flex-start'}
        mt={'auto'}
        >
       <TbLogout2 size={24}/>
        <Box display={{base:'none',lg:'block'}}>

    <Text >Log out</Text>
  </Box>
        </Flex>
      </Tooltip>      
        </Flex>

   </Box>
   </>
  )
}

export default SideBar