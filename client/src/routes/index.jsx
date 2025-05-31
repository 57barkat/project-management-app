import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import SignUp from '../pages/signup';
import SignIn from '../pages/signIn';





const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />


      </Routes>
    </Router>
  )
}

export default AppRoutes
