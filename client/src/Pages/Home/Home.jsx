import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Plans from '../../components/Plans/Plans'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <div className='h-[100vh] w-[100%] bg-center flex justify-center bg-no-repeat bg-cover bg-black' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1437935690510-49ce2c715aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBneW18ZW58MHx8MHx8fDA%3D')" }} id='home'>
        <div>
          <Navbar />
          <div className="data w-2/5 m-5 flex h-full items-center  ">
            <h1 className='text-white text-6xl italic'>Change the way to approach the goal not the goal</h1>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Plans />
      <Footer />
    </div>
  )
}

export default Home
