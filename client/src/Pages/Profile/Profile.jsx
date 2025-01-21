import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {
    const [user,setuser]=useState([])
    const [member,setmember]=useState([])
    const [expiry,setexpiry]=useState();
    const [join,setjoin]=useState()
    const GetProfile=async()=>{
        const response=await fetch("http://127.0.0.1:8000/api/specificmember/"+sessionStorage.getItem("user_id"),{
            method:"GET",
            headers:{
                "Content-Type":"Application/json"
            }
        })
        const res=await response.json();
        setuser(res.user)
        setmember(res.membership)
    } 
    useEffect(()=>{
        GetProfile()
    },[])
    useEffect(()=>{
        if (user) {
            const setdate = user.created_at;
            if (setdate) {
              const date = new Date(setdate);
              if (isNaN(date)) {
                console.error("Invalid date format:", setdate);
              } else {
                setjoin(date.toISOString().split('T')[0]);
              }
            } else {
              console.error("No field found in user data.");
            }
        }
    },[user.length])
    useEffect(()=>{
        if(join){
            let currentDate = new Date(join);
            currentDate.setMonth(currentDate.getMonth() + member.feature5);
            const last=currentDate.toISOString().split('T')[0];
            console.log(last)
            setexpiry(last)
        }
    },[join])
  return (
    <div className='bg-gray-900 text-gray-200 '>
        <Navbar/>
         <div class="container mx-auto p-6">
        <header class="flex items-center justify-between bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex items-center">
                <div>
                    <h1 class="text-2xl font-semibold">{user.first_name+" "+ user.last_name}</h1>
                    <p class="text-gray-400">Mobile No: {user.phone} | Location: {user.address}</p>
                    <p class="text-gray-500">Joined: {join}</p>
                </div>
            </div>
            <div class="text-center">
                {/* <button class="bg-blue-600 text-white py-2 px-6 rounded-full">Edit Profile</button> */}
            </div>
        </header>

        <section class="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Membership Details</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <p class="font-medium">Membership Plan:</p>
                    <p>Duration: {member.feature5} Months</p>
                    <p>Price:{member.Price}</p>
                    <p>Includes: {member.feature1+" "+member.feature2+" "+member.feature3+" "+member.feature4}</p>
                </div>
                <div>
                    <p class="font-medium">Next Payment Date:</p>
                    <p>{expiry}</p>
                </div>
            </div>
        </section>

        {/* <section class="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Trainer Information</h2>
            <div>
                <p class="font-medium">Assigned Trainer:</p>
                <p>Sarah Williams</p>
                <p>Rating: ★★★★☆ (4.5/5)</p>
                <p>Next Session: January 18, 2025 at 3:00 PM</p>
            </div>
        </section> */}

        <section class="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Account Settings</h2>
            <div>
                <p class="font-medium">Email:</p>
                <p>{user.email}</p>
                <p class="font-medium">Phone Number:</p>
                <p>{user.phone}</p>
            </div>
        </section>

        <section class="mt-6 flex justify-center">
            <button class="bg-green-600 text-white py-2 px-6 rounded-full" onClick={(e)=>{window.location.href="/"}}>Back To Home</button>
        </section>
    </div>
    </div>
  )
}

export default Profile
