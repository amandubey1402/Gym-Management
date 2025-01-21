import React from 'react'

const Navbar = () => {
    const logout=()=>{
        sessionStorage.removeItem("userid")
        sessionStorage.removeItem("role")
        window.location.reload()
    }
    return (
            <div class="bg-gray-800 min-w-64 min-h-screen text-white">
                <div class="p-5 text-2xl font-bold">Admin Panel</div>
                <ul class="mt-10">
                    <li>
                        <a href="/Admin" class="block py-3 px-5 text-gray-300 hover:bg-gray-700">Dashboard</a>
                    </li>
                    <li>
                        <a href="/Users" class="block py-3 px-5 text-gray-300 hover:bg-gray-700">Users</a>
                    </li>
                    <li>
                        <a href="/Member" class="block py-3 px-5 text-gray-300 hover:bg-gray-700">Member</a>
                    </li>
                    <li>
                        <a href="/setting" class="block py-3 px-5 text-gray-300 hover:bg-gray-700">Settings</a>
                    </li>
                    <li>
                        <a href="/Notification" class="block py-3 px-5 text-gray-300 hover:bg-gray-700">Reports</a>
                    </li>
                    <li>
                        <a href="#" class="block py-3 px-5 text-gray-300 hover:bg-gray-700" onClick={logout}>Log Out</a>
                    </li>
                </ul>
            </div>
    )
}

export default Navbar
