import { Routes,Route, Navigate } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/Authpage/AuthPage'
import PageLayout from './layout/PageLayout/PageLayout'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import CloudinaryUpload from './cloudinarystorage/CloudinaryUpload.jsx'
import useAuthStore from './store/useAuthStore.js'


function App() {
 const authUser=useAuthStore(state=>state.user)

  return (
    <PageLayout>

<Routes>
<Route path='/' element={authUser?<HomePage/>: <Navigate to={'/auth'} /> }></Route>
<Route path='/auth' element={!authUser?<AuthPage/>:<Navigate to={'/'} /> }></Route>
<Route path='/:username' element={<ProfilePage/>}></Route>
<Route path='/test' element={<CloudinaryUpload/>}></Route>
  </Routes>

    </PageLayout>
  )
}

export default App
