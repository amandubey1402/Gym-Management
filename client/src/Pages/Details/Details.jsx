import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Details = () => {
    const [plan, setplan] = useState([])
    const [people, setpeople] = useState([])
    const plans = async () => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/getplan", {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await resposne.json()
            setplan(res)
        } catch (error) {
            console.log(error)
        }
    }
    const People = async () => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/Person", {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await resposne.json()
            console.log(res)
            setpeople(res)
        } catch (error) {
            console.log(error)
        }
    }
    const show = () => {
        const att = document.querySelector('[role = "menu"]');
        if (att.style.display == "none") {
            att.style.display = "block";
        }
        else {
            att.style.display = "none"
        }
    }
    useEffect(() => {
        plans()
        People()
    }, [])
    return (
        <div className="bg-gray-900">
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex shrink-0 items-center">
                                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Home</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">About</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Trainers</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Members</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Contact</a>
                                    {
                                        sessionStorage.getItem("role") == "Admin" ?
                                            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Admin</a> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Link to={sessionStorage.getItem("user_id") ? "/Pay" : "/Login"} type="button" class="relative rounded-lg bg-blue-500 p-1 text-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                Join Now
                            </Link>

                            <div class="relative ml-3">
                                <div>
                                    <button onClick={show} type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        {/* <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span> */}
                                        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                <div class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    {/* <!-- Active: "bg-gray-100 outline-none", Not Active: "" --> */}
                                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-400 text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                    {
                                        sessionStorage.getItem("user_id") ?
                                            <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={signout}>Sign out</a> :
                                            <a href="/Login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign In</a>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div>
            </nav>
            <div>
                <div className="flex flex-wrap py-5 gap-5 justify-evenly m-auto">
                    {
                        plan.map((name, i) => {
                            return (
                                <div class="max-w-sm w-full bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                                    <div class="bg-blue-700 text-white text-center py-4">
                                        <h2 class="text-xl font-semibold">Premium Gym Plan</h2>
                                        <p class="text-2xl font-bold mt-2">${name.Price}/month</p>
                                    </div>
                                    <div class="p-6">
                                        <h3 class="text-lg font-semibold mb-3">Plan Features:</h3>
                                        <ul class="list-disc pl-5 space-y-2">
                                            <li class="flex items-center text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {name.feature1}
                                            </li>
                                            <li class="flex items-center text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {name.feature2}
                                            </li>
                                            <li class="flex items-center text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {name.feature3}
                                            </li>
                                            <li class="flex items-center text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {name.feature4}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bg-gray-700 py-4 px-6 text-center">
                                        <button class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className='w-full text-center text-white'>
                <h1 className='text-5xl p-3'>Person</h1>
                </div>
                <table class="m-auto w-[calc(100%-4%)] border-collapse bg-gray-700 text-white">
                    <thead>
                        <tr className='bg-blue-700'>
                            <th class="px-4 py-2 text-left border-b">Name</th>
                            <th class="px-4 py-2 text-left border-b">jion at</th>
                            <th class="px-2 py-2 text-left border-b">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            people.map((name, i) => {
                                const timestamp = name.created_at
                                        const date = new Date(timestamp);
                                        const formated = date.toISOString().split('T')[0]
                                return(
                                <tr>
                                    <td class="px-4 py-2 border-b">{name.first_name}</td>
                                    <td class="px-4 py-2 border-b">{formated}</td>
                                    <td class="px-2 py-2 border-b">{name.role}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Details
