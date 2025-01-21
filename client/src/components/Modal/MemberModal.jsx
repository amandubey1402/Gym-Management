import React, { useState } from 'react'
import { useNavigate ,Link } from 'react-router-dom'

const MemberModal = ({hide,planid}) => {
  const [check,setcheck]=useState(false)
    const nav = useNavigate()
    const handle=(e)=>{
      if(e.target.checked){
        setcheck(true)
      }
      else{
        setcheck(false)
      }
    }
    const submit=async(e)=>{
      e.preventDefault();
      try {
        const resposne=await fetch("http://127.0.0.1:8000/api/member",{
          method:"POST",
          headers:{
            "Content-Type":"Application/json"
          },
          body:JSON.stringify({userid:sessionStorage.getItem("user_id"),planid:planid})
        })
        const res=await resposne.json()
        if(resposne.ok){
          alert(res)
          hide(false)
        }
        else{
          alert(res);
          hide(false);
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <div class="bg-gray-800 py-10">
        <button id="openModalBtn" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 ml-5 hover:bg-blue-600">View Gym Plan</button>

<div id="gymPlanModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
  <div class="bg-white rounded-lg p-6 w-96">
    <div class="modal-header mb-4">
      <h2 class="text-2xl font-semibold text-gray-800">Gym Plan Details</h2>
    </div>
    <div class="modal-body mb-4">
      <p class="text-gray-600">Here are the details of your customized gym plan:</p>
      <ul class="list-disc pl-5 text-gray-700">
        <li>Cardio: 30 minutes, 3 times a week</li>
        <li>Strength Training: 45 minutes, 2 times a week</li>
        <li>Stretching & Recovery: 20 minutes daily</li>
        <li>Nutrition Tips: High protein diet with balanced carbs</li>
      </ul>

      <div class="checkbox-container mt-4">
        <input type="checkbox" onChange={handle} id="agreeCheckbox" class="mr-2"/>
        <label for="agreeCheckbox" class="text-gray-700">Payment method is only in cash at GYM</label>
        <div id="error" class="text-red-600 text-sm mt-2 hidden">You must agree to the gym plan to proceed.</div>
      </div>
    </div>
    <div class="modal-footer flex justify-between mt-6">
      <button id="submitBtn" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"  disabled={!check} onClick={submit}>Submit</button>
      <button id="closeModalBtn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" onClick={(e)=>hide(false)}>Close</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default MemberModal
