import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const  Login= () => {
  const nav=useNavigate()
  const [data,setdata]=useState({
    email:"",password:""
  })
  const handle=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setdata({...data,[name]:value})
  }
  const submit=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://127.0.0.1:8000/api/UserLogin",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(data)
    })
    const res=await response.json();
    if(response.ok){
      alert("Login Successfull")
      sessionStorage.setItem("user_id",res.id)
      sessionStorage.setItem("role",res.role)
      nav('/')
    }
    else{
      alert(res)
    }
  }
  return (

<div class="bg-gray-800 h-screen flex items-center justify-center">

  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

    <form action="#" method="POST">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={handle}
          id="email"
          name="email"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
        <input
          type="password"
          value={data.password}
          onChange={handle}
          id="password"
          name="password"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <button 
      onClick={submit}
        type="submit"
        class="w-full bg-blue-500 text-white mb-4 font-semibold p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
    <div className="w-full text-center">

    <Link to='/SignUp' className='text-blue-600'>Create an Account </Link>
    </div>
  </div>


    </div>
  )
}

export default Login
