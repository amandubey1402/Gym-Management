import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/AdminNavbar/Navbar'

const Dashboard = () => {
    const [users, setusers] = useState([])
    const [member, setmember] = useState([])
    const [trainer, settrainer] = useState([])
 
    const GetTrainer = async () => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/gettrainer");
            const res = await resposne.json();
            settrainer(res)
        } catch (error) {
            console.log(error)
        }
    }
    const Member = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/getmember', {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await response.json();
            setmember(res.members)
            // if()
        } catch (error) {
            console.log(error)
        }
    }
    const User = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/getuser', {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await response.json();
            setusers(res)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        User()
        Member()
        GetTrainer()
    }, [])

    const reversedUsers = [...users].reverse().slice(0,4); // Spread operator to avoid mutating the original array
    return (

        <div className='bg-gray-100'>
            <div className="flex ">
                <Navbar/>
                <div className="flex-1 p-6 ">
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
                        <div className="text-xl font-semibold text-gray-700">Dashboard Overview</div>
                        <div className="flex items-center space-x-4">
                            <div className="text-gray-600">Welcome, <b>Admin</b></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6  mb-5">
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
                            <p className="text-2xl font-bold text-blue-600 mt-2">{users.length}</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-700">Members</h2>
                            <p className="text-2xl font-bold text-red-600 mt-2">{member.length}</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-700">Trainer</h2>
                            <p className="text-2xl font-bold text-green-600 mt-2">{trainer.length}</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-white shadow-lg rounded-lg p-5">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="text-left bg-gray-200">
                                    <th className="py-3 px-4">Name</th>
                                    <th className="py-3 px-4">Mobile</th>
                                    <th className="py-3 px-4">Address</th>
                                    <th className="py-3 px-4">Role</th>
                                    <th className="py-3 px-4">Join Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    reversedUsers.filter((name)=>name.role==="User")
                                    .map((name,i) => {
                                        const timestamp = name.created_at
                                        const date = new Date(timestamp);
                                        const formated = date.toISOString().split('T')[0]
                                         return(
                                            <tr className="border-b" key={i}>
                                                <td className="py-3 px-4">{name.first_name + " " + name.last_name}</td>
                                                <td className="py-3 px-4">{name.phone}</td>
                                                <td className="py-3 px-4">{name.address}</td>
                                                <td className="py-3 px-4">{name.role}</td>
                                                <td className="py-3 px-4">{formated}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full float-right relative">
                        <a href="/Users" className='absolute right-5 mt-6 mb-6 text-blue-800'>More Users</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
