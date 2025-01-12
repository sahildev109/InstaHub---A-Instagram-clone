import { Routes,Route } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/Authpage/AuthPage'
import PageLayout from './layout/PageLayout/PageLayout'
import ProfilePage from './Pages/ProfilePage/ProfilePage'


function App() {
 

  return (
    <PageLayout>

<Routes>
<Route path='/' element={<><HomePage/></>}></Route>
<Route path='/auth' element={<AuthPage/>}></Route>
<Route path='/:uid' element={<ProfilePage/>}></Route>
  </Routes>

    </PageLayout>
  )
}

export default App
