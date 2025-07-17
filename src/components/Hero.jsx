import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className=' text-center lg:text-7xl sm:text-6xl tracking-wide'> VirtualR build tools 
        {" "}
        <span className='bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent'>for Developers!</span>
      </h1>
      <p className='mt-10 text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring your VR app ideas to life with our intutive development tools. Get started today and turn your imagination into immersive reality!!</p>
      <div className="flex items-center justify-center mt-10">
        <a href="£">
          <button className=' bg-gradient-to-r from-orange-400 to-orange-900 p-3 rounded-lg '> start for free</button>
        </a>
        <a href="@">
          <button className=' border border-r-2 rounded-lg p-3 ml-4 '>Documentation</button>
        </a>
      </div>
      <div className="flex items-center mt-20 mx-auto">
        <video autoPlay muted loop className='border border-orange-400 shadow-orange-700 w-1/2 rounded-lg'>
          <source src={video1}/>
        </video>
        <video autoPlay muted loop className='border border-orange-400 shadow-orange-700 w-1/2 rounded-lg ml-8'>
          <source src={video2}/>
        </video>
      </div>
    </div>
  )
}

export default Hero

