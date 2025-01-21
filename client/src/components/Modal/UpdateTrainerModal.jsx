import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
const UpdateTrainerModal = ({ status1, status2, update1, update2,reget }) => {
    const handle = (e) => {
        let { name, value } = e.target
        update2({ ...update1, [name]: value })
    }
    const Update = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/updatetrainer/" + update1.id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(update1)
            });
            if(response.ok){
                reget()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Dialog open={status1} onClose={status2} className="relative z-10">
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
                                            <h2 class="text-2xl font-bold mb-4 text-center">Add Plan</h2>
                                            <div class="mb-4">
                                                <label for="full_name" class="block text-sm font-medium text-gray-700">Salary</label>
                                                <input type="text" onChange={handle} id="full_name" name="salary" value={update1.salary} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                                            </div>

                                            <div class="mb-4">
                                                <label for="email" class="block text-sm font-medium text-gray-700">Shift</label>
                                                <input type="text" onChange={handle} id="email" name="shift" value={update1.shift} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                                            </div>

                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    onClick={() => { status2(false); Update() }}
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    type="button"
                                                    data-autofocus
                                                    onClick={() => status2(false)}
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
        </div>
    )
}

export default UpdateTrainerModal
