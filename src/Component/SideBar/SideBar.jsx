import { Box,Flex,Text,VStack,Link, Avatar } from "@chakra-ui/react"
import { InstagramLogo, InstagramMobileLogo,SearchLogo,NotificationsLogo,CreatePostLogo } from "../../assets/constants"
import { Link as RouterLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { Tooltip } from '@chakra-ui/react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/useAuthStore";




const SideBar = () => {
  const user=useAuthStore(state=>state.user)
  const {handleLogout,isLoggingOut}=useLogout()
  const items=[
    {
      icon:<AiFillHome size={24}/>,
      text:'Home',
      link:'/'
    },
    {
      icon:<SearchLogo size={24}/>,
      text:'Search',
      link:'/'
          },
    {
      icon:<NotificationsLogo size={24}/>,
      text:'Notification',
      link:'/'
          },
    {
      icon:<CreatePostLogo size={24}/>,
      text:'Create',
      link:'/'
          },
    {
      icon:<Avatar size={'xs'} src="./pp1.png"/>,
      text:'Profile',
      link:`/${user.username}`
          }
  ]

  const handleItems=(item,index)=>{
   return (
      <Tooltip
      key={index}
      hasArrow
      label={item.text}
      placement="right"
      ml={1}
      openDelay={600}
      display={{base:'block',lg:'none'}}
      >
        <Link
        as={RouterLink}
        to={item.link}
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
        {item.icon}
        <Box display={{base:'none',lg:'block'}}>

    <Text >{item.text}</Text>
  </Box>
        </Link>
      </Tooltip>
    )
  }
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
            
<Flex direction={'column'} gap={{base:5,lg:4}}>

{items.map(handleItems)}

</Flex>

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