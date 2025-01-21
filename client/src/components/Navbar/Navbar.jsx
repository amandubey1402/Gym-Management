import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const signout = () => {
    sessionStorage.removeItem("user_id")
    sessionStorage.removeItem("role")
    window.location.reload()
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
  return (
    <div className='fixed w-full z-20 bg-gray-800 opacity-90' >
      <nav class="bg-gay-800">
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
                  <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Home</a>
                  <a href="#about" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">About</a>
                  <a href="#services" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Services</a>
                  <a href="#plans" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Plans</a>
                  <a href="#contact" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Contact</a>
                  {
                    sessionStorage.getItem("role") == "Admin" ?
                      <a href="/admin" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Admin</a> : null
                  }
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {
                sessionStorage.getItem("user_id") ? null :
                  <Link to="/Login" type="button" class="relative rounded-lg bg-blue-500 p-1 text-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Join Now
                  </Link>
              }


              {
                sessionStorage.getItem("user_id") && sessionStorage.getItem("role") != "Admin" ?
                  <div class="relative ml-3">
                    <div>
                      <button onClick={show} type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      </button>
                    </div>

                    <div class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                      <a href="/Profile" class="block px-4 py-2 text-sm hover:bg-gray-400 text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                      {
                        sessionStorage.getItem("user_id") ?
                          <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={signout}>Sign out</a> :
                          <a href="/Login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign In</a>

                      }
                    </div>
                  </div> : null
              }
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
    
    </div>
  )
}

export default Navbar
