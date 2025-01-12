
import { Box, Text ,Flex} from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import SideBar from "../../Component/SideBar/SideBar";



const PageLayout = ({children}) => {
  const { pathname }=useLocation();
  return (<>
<Flex>
{pathname!=='/auth'? (
      <SideBar/>):null
    }
    
   <Box mx={'auto'} flex={1} w={{base:'calc(100%-70px)',md:'calc(100%-240px)'}}>
    {children}
   </Box>
   </Flex>
   </>
  )
}

export default PageLayout