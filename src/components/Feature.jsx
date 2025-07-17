import React from 'react'
import { FaRobot } from "react-icons/fa";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiOutlineTemplate } from "react-icons/hi";

let feature = [
    {id: 0, icon: <FaRobot />,  text: "Drag-and-Drop interface", description: "Easily design and arrange your VR envirornments into a user friendly drag-and-drop interace"},
    {id: 1, icon:<IoFingerPrintSharp />, text: "Multi-Platform compatibility", description: "Build VR applications that run seamlessly across different devices including mobile, desktop and VR headsets"},
    {id: 2, icon: <HiOutlineTemplate />, text: "Built-In Templates", description: "Jump start your VR projects with a variety of built-in templates for differentntypes of applications and envirornments "    },
    {id: 3, icon: <FaRobot />,  text: "Drag-and-Drop interface", description: "Easily design and arrange your VR envirornments into a user friendly drag-and-drop interace"},
    {id: 4, icon:<IoFingerPrintSharp />, text: "Multi-Platform compatibility", description: "Build VR applications that run seamlessly across different devices including mobile, desktop and VR headsets"},
    {id: 5, icon: <HiOutlineTemplate />, text: "Built-In Templates", description: "Jump start your VR projects with a variety of built-in templates for differentntypes of applications and envirornments "    }

]

const Feature = () => {
  return (
    <div className=' pb-20'>
    <div className=' flex flex-col mt-24 items-center justify-center'>
      <h1 className='lg:text-4xl md:text-2xl tracking-wider text-transparent bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text '>FEATURE</h1>
      <h1 className='lg:text-6xl md:text-4xl tracking-wide text-neutral-400 mt-10'>Easily Build 
        {" "}
        <span className=' bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text'>your Code!</span> </h1>
    </div>
    <div className=" grid lg:grid-cols-3 mt-20 gap-16 md:grid-cols-2">
        {feature.map((item, index) => (
            <div className="flex flex-wrap ">
                <div key={index} className=' text-orange-600 h-10 w-10 text-2xl'>{item.icon}</div>
                <div key={index} className='px-4 text-xl'>{item.text}</div>

                <div key={index} className='text-neutral-500 '>{item.description}</div>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Feature
