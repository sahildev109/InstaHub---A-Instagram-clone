
import { Box, Text ,Flex, Spinner} from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import SideBar from "../../Component/SideBar/SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import NavBar from "../../Component/NavBar/NavBar";
import useAuthStore from "../../store/useAuthStore";



const PageLayout = ({children}) => {
  const { pathname }=useLocation();
 const [user,loading]=useAuthState(auth)
  const canRenderSideBar= pathname !== "/auth" && user;
  const canRenderNAvBar= pathname !== "/auth"&& !user 
  if(!user&&loading){
    return <PageLayoutSpinner/>
  }
  return (<>
<Flex flexDir={canRenderNAvBar?'column':'row'}>
{canRenderSideBar?(<SideBar/>):null
    }
    {canRenderNAvBar?(<NavBar/>):null}
   <Box mx={'auto'} flex={1} w={{base:'calc(100%-70px)',md:'calc(100%-240px)'}}>
    {children}
   </Box>
   </Flex>
   </>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};