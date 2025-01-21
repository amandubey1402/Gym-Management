import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignUp from './Pages/Register/SignUp'
import Home from './Pages/Home/Home'
import Login from './Pages/Register/Login'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import Users from './Pages/Admin/Users/Users'
import Modify from './Pages/Admin/GymDetails/Modify'
import Details from './Pages/Details/Details'
import Register from './Pages/TrainerRegister/Register'
import Notification from './Pages/Admin/Notification/Notification'
import Member from './Pages/Admin/Member/Member'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Admin' element={sessionStorage.getItem("role")=="Admin"?<Dashboard />:<Navigate to="/Login" />} />
          <Route path='/Users' element={sessionStorage.getItem("role")=="Admin"?<Users />:<Navigate to="/Login" />} />
          <Route path='/Setting'  element={sessionStorage.getItem("role")=="Admin"?<Modify />:<Navigate to="/Login" />} />
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/TrainerSignUp' element={<Register />} />
          <Route path='/Notification'  element={sessionStorage.getItem("role")=="Admin"?<Notification />:<Navigate to="/Login" />} />
          <Route path='/Member'  element={sessionStorage.getItem("role")=="Admin"?<Member/>:<Navigate to="/Login" />} />
          <Route path='/Profile'  element={sessionStorage.getItem("user_id")?<Profile/>:<Navigate to="/Login" />} />

        </Routes>
      </Router>
      {/* <Navbar/> */}
    </>
  )
}

export default App
