import { Avatar, Box, Button, Flex, Link, Text, textDecoration } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/useAuthStore'

const SuggestedUsersHeader = () => {
  const user=useAuthStore(state=>state.user)
  const {handleLogout,isLoggingOut}=useLogout()
  return (
  <>
  <Flex justifyContent={'space-between'}
  fontSize={14}
  fontWeight={'bold'}
  alignItems={'center'}
  w={'full'}
  py={2}>
    <Link 
    as={RouterLink}
    to={'/donquixote.doflamingo'}
    style={{textDecoration:'none'}}>
<Flex alignItems={'center'}
gap={2}
cursor={'pointer'}
>
  <Link as={RouterLink} to={`${user.username}`}>
    <Avatar src={user.profilePicURL}  boxSize={'44px'}/>
    </Link>
  <Link as={RouterLink} to={`${user.username}`} textDecoration={'none'} _hover={{textDecoration:'none'}}>

<Text>{user.username}</Text>
</Link>
</Flex>
</Link>

<Button
onClick={handleLogout}
isLoading={isLoggingOut}
bg={'transparent'}
_hover={{bg:'transparent'}}
size={'xm'}

>
  <Text 
  fontWeight={'bold'}
  fontSize={12}
  color={'blue.500'}
  _hover={{
    color:'white'
  }}
  transition={'0.2s ease-in-out'}> Log out</Text>
       
   
</Button>
  </Flex>
  </>
  )
}

export default SuggestedUsersHeader