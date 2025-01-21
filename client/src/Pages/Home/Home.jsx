import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Plans from '../../components/Plans/Plans'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Home
