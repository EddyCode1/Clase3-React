import {Routes, Route} from 'react-router-dom'
import { AuthPage } from '../../features/auth/page/AuthPage.jsx'


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
    </Routes>
  )
}
