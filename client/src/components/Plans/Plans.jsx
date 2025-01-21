import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import MemberModal from '../Modal/MemberModal';
const Plans = () => {
    const nav = useNavigate()
    const [plan, setplan] = useState([]);
    const [planid,setplanid]=useState()
    const [open,setopen]=useState(false)
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
    const Choose = async (a) => {
        if (sessionStorage.getItem("user_id")) {
            setopen(true)
            setplanid(a)
        }
        else {
            nav('/login')
        }
    }
    useEffect(() => {
        plans()
    }, [])
    const limit = plan.slice(0, 3)
    return (
        <div className='w-full h-full bg-gray-900 'id='plans' >
            {
                open?<MemberModal show={open} hide={setopen} planid={planid} />:null
            }
            
            <h1 className='text-center text-6xl text-white italic pt-10 mb-8'>Our Plans</h1>
            <div className='flex justify-center gap-5 items-center p-5'>
                {
                    limit.map((name, id) => {
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
                                    <button class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={(e) => Choose(name.id)}>Get Started</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                limit.length < plan.length ? <div className="w-[calc(100%-4%)] pb-5 flex justify-end">
                    <a href="" className='text-white'>More Plans</a>
                </div> : null
            }

        </div>
    )
}

export default Plans
