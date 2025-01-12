import { Avatar, Box, Button, Flex, Link, Text, textDecoration } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

const SuggestedUsersHeader = () => {
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
    <Avatar src='./pp1.png'  boxSize={'44px'}/>
<Text>donquixote.doflamingo</Text>

</Flex>
</Link>

<Link

as={RouterLink}
to={'/auth'}

style={{textDecoration:'none'}}


>
  <Text 
  fontSize={12}
  color={'blue.500'}
  _hover={{
    color:'white'
  }}
  transition={'0.2s ease-in-out'}> Log out</Text>
       
   
</Link>
  </Flex>
  </>
  )
}

export default SuggestedUsersHeader