import { Flex ,Container, Box} from "@chakra-ui/react"
import FeedPosts from "../../Component/FeedPosts/FeedPosts"
import SuggestedUsers from "../../Component/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
  return (
   <>
 <Container  maxW={'container.lg'} >
<Flex gap={'10%'}>

<Box flex={2}  p={'2%'}  >
 <FeedPosts/>
</Box>
<Box flex={1} display={{base:'none',md:'block'
}}  >
<SuggestedUsers/>
</Box>

</Flex>


 </Container>
   </>
  )
}

export default HomePage