import React from 'react'
import code from '../assets/code.jpg'
import { FaCircleCheck } from "react-icons/fa6";


const checklistItems = [
    {
      title: "Code merge made easy",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Review code without worry",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "AI Assistance to reduce time",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Share work in minutes",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ]
  

const Flow = () => {
  return (
    <div >
     <h1 className='mt-10 lg:text-6xl md:text-5xl tracking-wider text-center'>Accelerate your 
        {" "}
        <span className=' bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text'>coding workflow!</span>
    </h1>
    <div className="flex flex-wrap w-full  mt-16">
        <div className="lg:w-1/2 w-full">
            <img src={code} alt="coding image" />
        </div>
    
        <div className=" lg:w-1/2 mt-16">
        {checklistItems.map((items, index) => (
            <>
            <div className='flex  mb-10'>
            <div className=' text-green-500 h-10 w-10 items-center justify-center'><FaCircleCheck />
            </div>
            
            <div>
            <h1 className=' lg:text-l items-center justify-center' key={index}>{items.title}</h1>
            <p className=' text-neutral-500' key={index}>{items.description}</p>
            </div>
            </div>
            </>
            
        ))}
    </div>
    </div>
    </div>
  )
}

export default Flow
