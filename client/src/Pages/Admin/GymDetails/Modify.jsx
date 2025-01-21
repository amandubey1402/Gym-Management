import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/AdminNavbar/Navbar'
import Modal from '../../../components/Modal/Modal'
import Modal2 from '../../../components/Modal/Modal2'
import UpdateTrainerModal from '../../../components/Modal/UpdateTrainerModal'
const Modify = () => {
    const [plan, setplan] = useState([])
    const [open, setOpen] = useState(false)
    const [newopen, setnewOpen] = useState(false)
    const [details, setdetails] = useState([])
    const [updatemodal,setupdatemodal]=useState(false)
    const [trainer, setrainer] = useState([]);
    const [updatetrainer,setupdatetrainer]=useState([])
    // const [id,setid]=useState()
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
    const Update = async (id) => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/upadtedetail/" + id, {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await resposne.json()
            setdetails(res);
        } catch (error) {
            console.log(error)
        }
        setOpen(true)
    }
    const Delete = async (id) => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/deleteplan/" + id, {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }
            })
            const res = await resposne.json()
            if (resposne.ok) {
                plans()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const GetTrainer = async () => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/gettrainer");
            const res = await resposne.json();
            setrainer(res)
        } catch (error) {
            console.log(error)
        }
    }
    const RemoveTrainer=async(id)=>{
        try {
            const response=await fetch("http://127.0.0.1:8000/api/removetrainer/"+id,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(response.ok){
                GetTrainer();
            }
        } catch (error) {
            console.log(error)
        }
        console.log(id)
    }
    const GetUpdate=async(ids)=>{
        try {
            const resposne=await fetch("http://127.0.0.1:8000/api/specifictrainer/"+ids)
            const res=await resposne.json();
        setupdatetrainer(res)
        } catch (error) {
            console.log(error)
        }
        setupdatemodal(true)
    }
    useEffect(() => {
        plans()
    }, [open, newopen])
    useEffect(() => {
        GetTrainer()
    }, [])
    return (
        <div>
            <Modal model={open} setmodel={setOpen} updates1={details} setupdates1={setdetails} />
            <Modal2 model2={newopen} setmodel2={setnewOpen} />
            <UpdateTrainerModal status1={updatemodal} status2={setupdatemodal} update1={updatetrainer} update2={setupdatetrainer} reget={GetTrainer}/>
            <div className='flex'>
                <Navbar />
                <div class=" mx-auto mt-5 p-4 rounded-lg flex flex-col">
                    <div class="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
                        <div class="text-xl font-semibold text-gray-700">Dashboard Overview</div>
                        <div class="flex items-center space-x-4">
                            <div class="text-gray-600">Welcome, <b>Admin</b></div>
                        </div>
                    </div>

                    <div className='flex flex-wrap m-auto gap-5'>
                        {
                            plan.map((name, id) => {
                                return (
                                    <div className='m-auto'>
                                        <div class="bg-gray-50 p-6 rounded-md shadow-md mt-4">
                                            <div class="flex justify-between items-center mb-4 gap-3">
                                                <h3 class="text-xl font-medium text-gray-800">Premium Plan : </h3>
                                                <span class="text-xl font-semibold text-green-600"> {" " + name.Price + "Rs"} / Month</span>
                                            </div>
                                            <ul class="list-disc pl-6 text-gray-700">
                                                <li>{name.feature1}</li>
                                                <li>{name.feature2}</li>
                                                <li>{name.feature3}</li>
                                                <li>{name.feature4}</li>
                                                <li>{name.feature5}</li>

                                            </ul>
                                            <div className="flex justify-center items-cente gap-5">
                                                <button className='bg-blue-600 px-3 py-1 rounded mt-4 text-white' onClick={(e) => Update(name.id)}>Update</button>
                                                <button className='bg-red-600 px-3 py-1 rounded mt-4 text-white' onClick={(e) => Delete(name.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-full text-center mt-5">
                        <button className='bg-blue-600 text-white px-3 py-1 rounded' onClick={(e) => { setnewOpen(true) }}>Add More Plans</button>
                    </div>
                    <div class="w-full mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
                        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Gym Trainers</h1>

                        <div class="overflow-x-auto">
                            <table class="min-w-full w-full table-auto border-collapse border border-gray-200">
                                <thead class="bg-blue-500 text-white">
                                    <tr>
                                        <th class="px-6 py-3 text-left">Name</th>
                                        <th class="px-6 py-3 text-left">Salary</th>
                                        <th class="px-6 py-3 text-left">DOB</th>
                                        <th class="px-6 py-3 text-left">Mobile No.</th>
                                        <th class="px-6 py-3 text-left">Experience</th>
                                        <th class="px-6 py-3 text-left">Experience</th>
                                        <th class="px-6 py-3 text-left">Joined</th>
                                        <th class="px-6 py-3 text-left">Edit</th>
                                        <th class="px-6 py-3 text-left">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        trainer.map((name) => {
                                            const timestamp = name.created_at
                                            const date = new Date(timestamp);
                                            const formated = date.toISOString().split('T')[0]
                                            return (
                                                <tr class="bg-gray-50 hover:bg-blue-50">
                                                    <td class="px-3 py-4">{name.name}</td>
                                                    <td class="px-3 py-4">{name.salary}</td>
                                                    <td class="px-3 py-4">{name.shift}</td>
                                                    <td class="px-3 py-4">{name.DOB}</td>
                                                    <td class="px-3 py-4">{name.mobile}</td>
                                                    <td class="px-3 py-4">{name.experience}</td>
                                                    <td class="px-3 py-4">{formated}</td>
                                                    <td class="px-3 py-4">
                                                        <button onClick={(e)=>GetUpdate(name.id)} className='bg-blue-600 px-3 py-1 rounded mt-4 text-white'>
                                                            Update
                                                        </button>
                                                    </td>
                                                    <td class="px-3 py-4">
                                                        <button onClick={(e)=>RemoveTrainer(name.id)} className='bg-red-600 px-3 py-1 rounded mt-4 text-white'>Remove
                                                        </button>
                                                    </td>
                                                </tr>

                                            )

                                        })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Modify
