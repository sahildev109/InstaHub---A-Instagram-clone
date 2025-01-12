import { Box, Flex,Text,Link, VStack } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'
import SuggestedUsersHeader from './SuggestedUsersHeader'


const SuggestedUsers = () => {
  return (<VStack py={4} gap={4}>
<SuggestedUsersHeader/>
<Flex 
fontWeight={'700'}
justifyContent={'space-between'}
alignItems={'center'}
w={'full'}>
    <Text 
    fontSize={14}
    color={'rgb(115, 115, 115)'}>Suggested for you</Text>
    <Text 
    fontSize={12}
    _hover={{
        color:'rgb(115, 115, 115)'
    }} 
    transition={'0.2s ease-in-out'}
    cursor={'pointer'}>See All</Text>
</Flex>
    <SuggestedUser username={'red-haired.shanks'} profilepic={'./pp10.png'} followers={'10B'}/>
    <SuggestedUser username={'buggy.the-clown'} profilepic={'./pp11.png'} followers={'100'}/>
    <SuggestedUser username={'kozuki.oden'} profilepic={'./pp12.png'} followers={'1B'}/>
    <SuggestedUser username={'god.ussop'} profilepic={'./pp13.png'} followers={'1.2M'}/>
   

    <Box fontSize={14} alignSelf={'start'} color={'rgb(115, 115, 115)'} mt={4}>
    © 2025 Built By{' '} <Link 
    color={'blue.800'}
    fontWeight={700}
    href='https://github.com/sahildev109' target='_blank'>
    sahildev109
    </Link>
    </Box>
   


    </VStack>
  )
}

export default SuggestedUsers