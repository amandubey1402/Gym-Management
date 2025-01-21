import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900 text-white flex justify-center h-[80vh]  items-center' id='about'>
      <div className="flex justify-around items-center">
        <div className="desc w-1/2">
          <h1 className='text-6xl italic'>Why Choose us?</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque assumenda at, officia voluptatem sapiente rem consequatur nulla minima libero quos veniam dolores beatae unde id doloribus, itaque, nisi quibusdam!</p>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque assumenda at, officia voluptatem sapiente rem consequatur nulla minima libero quos veniam dolores beatae unde id doloribus, itaque, nisi quibusdam!</p>
        </div>
        <div className="img h-[400px] w-[550px] border-black border bg-white">
          <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
