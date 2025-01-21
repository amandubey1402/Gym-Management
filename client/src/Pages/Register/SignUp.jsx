import React, { useState } from 'react'
import { useNavigate ,Link } from 'react-router-dom'

const SignUp = () => {
    const nav = useNavigate()
    const [destails, setdetails] = useState({
        first_name: "", last_name: "", email: "", password: "", phone: "", address: ""
    })
    let name, value
    const handle = (e) => {
        name = e.target.name
        value = e.target.value
        setdetails({ ...destails, [name]: value })
    }
    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/userdetail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",  // This ensures you get a JSON response
            },
            body: JSON.stringify(destails),
        });
        const result = await response.json();
        console.log(result.message)
        if (response.ok) {
            alert("Sign up successful : "+ result);
        } else {
            alert("Validation errors : "+result.message);
        }
    }
    return (
        <div class="bg-gray-800 py-10">
            <div class="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

                <form action="#" method="POST">
                <div className="flex justify-evenly">
                    <div class="mb-4">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
                        <input value={destails.first_name} onChange={handle} type="text" id="first_name" name="first_name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    <div class="mb-4">
                        <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
                        <input value={destails.last_name} onChange={handle} type="text" id="last_name" name="last_name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input value={destails.email} onChange={handle} type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input value={destails.password} onChange={handle} type="password" id="password" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                </div>

                <div class="mb-4 px-6">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input value={destails.phone} onChange={handle} type="tel" id="phone" name="phone" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div class="mb-4 px-6">
                    <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                    <textarea value={destails.address} onChange={handle} id="address" name="address" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" rows="3"></textarea>
                </div>

                <div class="mt-6">
                    <button onClick={submit} type="submit" class="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>
                </form>
                <div className="text-center w-full mt-4">
                    <Link className='text-blue-600' to="/Login">Already have an Account</Link>
                </div>
            </div>

        </div>
    )
}

export default SignUp
