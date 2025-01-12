import { Flex ,Container, Box} from "@chakra-ui/react"
import FeedPosts from "../../Component/FeedPosts/FeedPosts"
import SuggestedUsers from "../../Component/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
  return (
   <>
 <Container border={'2px solid green'} maxW={'container.lg'} >
<Flex gap={'10%'}>

<Box flex={2} border={'1px solid blue'} p={'2%'}  >
 <FeedPosts/>
</Box>
<Box flex={1}   border={'1px solid red'} display={{base:'none',md:'block'
}}  >
<SuggestedUsers/>
</Box>

</Flex>


 </Container>
   </>
  )
}

export default HomePage