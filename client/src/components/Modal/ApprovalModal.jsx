import React, { useEffect, useState } from 'react';

const ApprovalModal = ({ modal, user,tariners }) => {
    const [data,setadta]=useState({})
    const [approve, setapprove] = useState({
        salary: "", shift: ""
    })
    let combined={
        ...data,...approve
    }
    const Approve = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/specific/"+user,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const res=await response.json();
        setadta(res)
    }
    const handle = (e) => {
        let { name, value } = e.target
        setapprove({ ...approve, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const send=await fetch("http://127.0.0.1:8000/api/trainer",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(combined)
        })
        console.log(send)
        if(send.ok){
            try {
                const response = await fetch("http://127.0.0.1:8000/api/deletenotification/" + user, {
                  method: "GET",
                  headers: {
                    "Content-type": "Application/json"
                  }
                })
                if (response.ok) {
                    tariners();
                }
                else {
                  console.log("unable to reject")
                }
              } catch (error) {
                console.log(error)
              }
        }
        else[
            alert("Something went wrong")
        ]
        modal(false)
    }
    useEffect(()=>{
        Approve()
    },[])
    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Form Submitted Successfully!</h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label for="full_name" class="block text-sm font-medium text-gray-700">Shift</label>
                        <input type="text" onChange={handle} id="full_name" value={approve.Shift} name="shift" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Salary</label>
                        <input type="text" onChange={handle} id="email" value={approve.Salary} name="salary" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            data-autofocus
                            onClick={() => modal(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ApprovalModal;
