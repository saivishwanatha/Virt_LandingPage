import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react';

const Navitems = [
  {label : "Features", id : "1", href : "#"},
  {label : "WorkFlows", id : "2", href : "#"},
  {label : "Pricing", id : "3", href : "#"},
  {label : "Testimonials", id : "4", href : "#"}
];


const Navbar = () => {

  const  [ ismenuopen , setIsmenuopen ] = useState(false);

  const togglemenu = () => {
    setIsmenuopen(!ismenuopen);
  }

  return (
   
   
    <nav className=' sticky top-0 border-b-2 bg-neutral-950 z-40 bg-transparent bg-opacity-50 backdrop-blur-md '>
      <div className='container mx-auto px-5 relative  '>
        <div className="flex items-center justify-between">
        <div className='flex flex-shrink-0 py-3 mx-4 items-center'>
            <img className='w-10 h-15 mx-4' src= {logo} alt="" />
            <div className="text-xl">VirtualR</div>
        </div>
        
       
          <ul className=' hidden lg:flex space-x-10'>
            {Navitems.map((item, index) => (
              <li className='px-2 items-center' key={index}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>

          <div className=" hidden lg:flex items-center justify-center space-x-5">
            <a href="#" className=' border rounded-md py-1 px-3'>SignIn</a>
            <a href="#" className=' bg-gradient-to-l from-orange-400 to-orange-700 rounded-md px-3 py-1'>Create An Account</a>
          </div>
        <div className=' lg:hidden'>
          <button onClick={togglemenu}>
            {ismenuopen ? <X/> : <Menu/>}
          </button>
        </div>

        </div>
        
        {ismenuopen && <div className='flex flex-col bg-neutral-950 z-20 w-full items-center justify-center p-5'>
          <ul>
              {Navitems.map((items, index) =>
              <li key={index} className=' flex items-center justify-evenly py-3 '><a href={items.href}>{items.label}</a></li>
            )}
          
          </ul>
          <div className="flex items-center justify-center space-x-4">
            <a href='#' className='border rounded-md text-center px-4 py-2'>SignIn</a>
            <a href='#' className=' bg-gradient-to-r from-orange-300 to-orange-700 rounded-md px-4 py-2'>Create An Account</a>
          </div>
          
          </div>}
        
      </div>
      
    </nav>
   
  )
}

export default Navbar
