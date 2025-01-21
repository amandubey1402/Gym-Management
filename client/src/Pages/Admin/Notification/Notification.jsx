import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/AdminNavbar/Navbar';
import ApprovalModal from '../../../components/Modal/ApprovalModal';

const Notification = () => {
  const [show, setshow] = useState([])
  const [open, setopen] = useState(false)
  const [id, setid] = useState()
  const GetApprovals = async () => {
    try {
      const resposne = await fetch("http://127.0.0.1:8000/api/trainers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const res = await resposne.json();
      if (resposne.ok) {
        setshow(res)
      }
      else {
        console.log("unable to fetch data")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const approve = (ids) => {
    setid(ids)
    setopen(true)
  }
  const reject = async (id) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/deletenotification/" + id, {
        method: "GET",
        headers: {
          "Content-type": "Application/json"
        }
      })
      if (response.ok) {
        GetApprovals();
      }
      else {
        console.log("unable to reject")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetApprovals()
  }, [])
  return (

    <div className='flex'>
      {
        open ?
          <ApprovalModal modal={setopen} user={id} tariners={GetApprovals} /> : null
      }
      <Navbar />
      <div className="p-4 w-full">
        <div class="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
          <div class="text-xl font-semibold text-gray-700">Dashboard Overview</div>
          <div class="flex items-center space-x-4">
            <div class="text-gray-600">Welcome, <b>Admin</b></div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Pending Trainer List</h2>
          {show.length > 0 ?
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">DOB</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Mobile</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Experience</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Requested Date</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Approve</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Reject</th>
                </tr>
              </thead>
              <tbody>
                {show.map((row, i) => {
                  const timestamp = row.created_at
                  const date = new Date(timestamp);
                  const formated = date.toISOString().split('T')[0]
                  return (
                    <tr key={row.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                      <td className="px-4 py-2 border border-gray-300">{row.DOB}</td>
                      <td className="px-4 py-2 border border-gray-300">{row.mobile}</td>
                      <td className="px-4 py-2 border border-gray-300">{row.experience}</td>
                      <td className="px-4 py-2 border border-gray-300">{formated}</td>
                      <td className="px-4 py-2 border border-gray-300">
                        <button className='bg-green-600 rounded text-white p-2' onClick={(e) => approve(row.id)}>
                          Approve
                        </button></td>
                      <td className="px-4 py-2 border border-gray-300">
                        <button className='bg-red-600 rounded text-white p-2' onClick={(e) => reject(row.id)}>Reject</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
            : <div className='flex justify-center items-center h-[50vh]'>
              <h1 className='text-4xl'>
                No Notification Yet
              </h1>
            </div>
              }
      </div>
    </div>
  );
};

export default Notification;
