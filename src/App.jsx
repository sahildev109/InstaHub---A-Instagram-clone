import { Routes,Route } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/Authpage/AuthPage'
import PageLayout from './layout/PageLayout/PageLayout'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import CloudinaryUpload from './cloudinarystorage/CloudinaryUpload.jsx'


function App() {
 

  return (
    <PageLayout>

<Routes>
<Route path='/' element={<><HomePage/></>}></Route>
<Route path='/auth' element={<AuthPage/>}></Route>
<Route path='/:uid' element={<ProfilePage/>}></Route>
<Route path='/test' element={<CloudinaryUpload/>}></Route>
  </Routes>

    </PageLayout>
  )
}

export default App
