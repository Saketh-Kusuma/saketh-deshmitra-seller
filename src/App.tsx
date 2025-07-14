import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OTPPage from './pages/OTPPage'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
  <Routes>
      {/* ...other routes... */}
      <Route path='/' element={<Home />}/>
      <Route path="/OTPPage" element={<OTPPage />} />
      <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default App;
