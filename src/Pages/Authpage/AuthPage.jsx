import { Flex, Spacer } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center,Text,Link } from '@chakra-ui/react'
import AuthForm from '../../Component/AuthForm/AuthForm.jsx'

const AuthPage = () => {
  return (
    <Center minH={'100vh'}
    
   
    >
   
        <Container maxW={'container.md'} p={0}>
          <Flex justifyContent={'center'} alignItems={'center'} gap={2}>

<Box display={{base:'none',md:'block'}}   >
<Image src='/auth.png' h={650} />
</Box>

<VStack>
<AuthForm></AuthForm>
<Text my={3}>Get the app.</Text>
<Flex gap={4}>
  <Link href='https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share' isExternal>
  <Image src='./playstore.png' h={10} ></Image>
  </Link>
  <Link href='https://apps.microsoft.com/detail/9NBLGGH5L9XT?hl=en&gl=IN&ocid=pdpshare' isExternal>
  <Image src='./microsoft.png' h={10} ></Image>
  </Link>

</Flex>
</VStack>

</Flex>
        </Container>
    </Center>
  )
}

export default AuthPage