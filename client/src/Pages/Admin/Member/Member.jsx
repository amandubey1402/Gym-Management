import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/AdminNavbar/Navbar'

const Users = () => {
    const [user, setusers] = useState([])
    const [plan, setplans] = useState([])
    const [dates, setdates] = useState([])
    const User = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/getmember', {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await response.json();
            // if()
            setusers(res.users)
            setplans(res.plans)
            setdates(res.members)
        } catch (error) {
            console.log(error)
        }
    }
    const Delete=async(id)=>{
        try {
            const response = await fetch('http://127.0.0.1:8000/api/deletemember/'+id, {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await response.json();
            console.log(res)
            if(response.ok){
               User();
            }
            else{
                alert("soomething is wrong")
            }
           
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        User();
    }, [])
    return (
        <div className='flex bg-gray-100'>
            <Navbar />
            <div class="container mx-auto p-8 flex-1">
                <div class="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
                    <div class="text-xl font-semibold text-gray-700">Dashboard Overview</div>
                    <div class="flex items-center space-x-4">
                        <div class="text-gray-600">Welcome, <b>Admin</b></div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <h1 className='text-4xl mb-2 '>Members</h1>
                    <table class="min-w-full bg-white shadow-lg rounded-lg">
                        <thead class="bg-blue-500 text-white">
                            <tr>
                                <th class="py-3 px-6 text-left">Username</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-left">Mobile No.</th>
                                <th class="py-3 px-6 text-left">Plan</th>
                                <th class="py-3 px-6 text-left">Join At</th>
                                <th class="py-3 px-6 text-left">Expiry At</th>
                                <th class="py-3 px-6 text-center">Address</th>
                                <th class="py-3 px-6 text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user
                                    .map((name, i) => {
                                        console.log(dates)
                                        const timestamp = dates[i].created_at
                                        const date = new Date(timestamp);
                                        const formated = date.toISOString().split('T')[0]
                                        let currentDate = new Date(formated);
                                        currentDate.setMonth(currentDate.getMonth() + plan[i].feature5);
                                        const expiry=currentDate.toISOString().split('T')[0]; // Output: 2024-10-17

                                        return (
                                            <tr>
                                                <td class="py-3 px-6">{name.first_name}</td>
                                                <td class="py-3 px-6">{name.email}</td>
                                                <td class="py-3 px-6">{name.phone}</td>
                                                <td class="py-3 px-6">{plan[i].Price}</td>
                                                <td class="py-3 px-6">{formated}</td>
                                                <td class="py-3 px-6">{expiry}</td>
                                                <td class="py-3 px-6 text-center">{name.address}</td>
                                                <td class="py-3 px-6 text-center">
                                            <button class="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ml-2" onClick={(e)=>Delete(name.id)}>Delete</button>
                                        </td>
                                            </tr>
                                        )
                                    }
                                    )
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Users
