import { Box, Text, Tooltip,Link } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { NotificationsLogo } from '../../assets/constants'

const Notification = () => {
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
            to='/'
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
           <NotificationsLogo size={24}/>
            <Box display={{base:'none',lg:'block'}}>
    
        <Text >Notification</Text>
      </Box>
            </Link>
          </Tooltip>
    
    </>
  )
}

export default Notification