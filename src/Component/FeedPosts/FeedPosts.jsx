import { Container } from "@chakra-ui/react"
import Post from "./Post"


const FeedPosts = () => {
  return (
    <Container maxW={'container.sm'}>
  <Post username={'monkey.d.luffy'} profilepic={'./pp3.png'} postimg={'./pp2.png'}/>
  <Post username={'nami'} profilepic={'./pp4.png'} postimg={'./pp5.png'}/>
  <Post username={'roronoa_zoro'} profilepic={'./pp6.png'} postimg={'./pp7.png'}/>
  <Post username={'prince_sanji'} profilepic={'./pp8.png'} postimg={'./pp9.png'}/>
  
    </Container>
  )
}

export default FeedPosts