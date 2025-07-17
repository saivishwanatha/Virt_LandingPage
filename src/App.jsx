import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Flow from './components/Flow'
import Pricing from './components/Pricing'

import Footer from './components/Footer'
import Reviews from './components/Reviews'




const App = () => {
  return (
    <>
   <Navbar/>
   <div className=' max-w-7xl mx-auto pt-20 px-6 h-screen'>
   <Hero/>
   <Feature/>
   <Flow/>
   <Pricing/>
  <Reviews/>
  <Footer/>
   </div>
  
   
    </>

  )
}

export default App
