'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal({ model, setmodel,updates1,setupdates1}) {
    const Update = async(id) => {
        try {
            const resposne = await fetch("http://127.0.0.1:8000/api/upadteplan/"+id, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body:JSON.stringify(updates1)
            })
            const res = await resposne.json()
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const handle=async(e)=>{
        let name,value;
        name=e.target.name;
        value=e.target.value;
        setupdates1({...updates1,[name]:value})
    }

    return (
        <Dialog open={model} onClose={setmodel} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <div class="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
                                        <h2 class="text-2xl font-bold mb-4 text-center">Update Form</h2>
                                        <form action="#" method="POST">
                                            <div class="mb-4">
                                                <label for="full_name" class="block text-sm font-medium text-gray-700">Price</label>
                                                <input type="text" onChange={handle} id="full_name" value={updates1.Price} name="Price" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="email" class="block text-sm font-medium text-gray-700">Feature1</label>
                                                <input type="text" onChange={handle} id="email" value={updates1.feature1} name="feature1" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="phone" class="block text-sm font-medium text-gray-700">Feature2</label>
                                                <input type="text" onChange={handle} id="phone" value={updates1.feature2} name="feature2" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="(555) 123-4567" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="address" class="block text-sm font-medium text-gray-700">Feature3</label>
                                                <input type="text" onChange={handle} id="address"  value={updates1.feature3} name="feature3" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="123 Main St, City, Country" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="dob" class="block text-sm font-medium text-gray-700">Feature4</label>
                                                <input type="text" onChange={handle} id="dob"  value={updates1.feature4} name="feature4" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="password" class="block text-sm font-medium text-gray-700">Feature5</label>
                                                <input type="text" onChange={handle} id="password"  value={updates1.feature5} name="feature5" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="********" />
                                            </div>


                                        </form>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                onClick={() => { setmodel(false); Update(updates1.id) }}
                                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                data-autofocus
                                                onClick={() => setmodel(false)}
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
