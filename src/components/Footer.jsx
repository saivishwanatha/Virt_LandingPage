
import React from 'react'

const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
  ];
  
  const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
  ];
  
  const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
  ];

const Footer = () => {
  return (
    <footer className='border-t border-neutral-300 mt-20 backdrop-blur-md bg-neutral-900 opacity-50 z-50 bg-transparent'>
        <div className="grid lg:grid-cols-3 grid-cols-2 ">
            <div className="flex flex-col m-3 items-center">
            <h3 className='text-lg font-bold mb-2'> Resource Links</h3>
            <ul >
                {resourcesLinks.map((item, index) => (
                    <li key={index} className='text-sm p-2'><a href={item.href}>{item.text}</a></li>
                ))}
            </ul>
            </div>
            <div className="flex flex-col m-3 items-center">
            <h3 className='text-lg font-bold mb-2'> Platform Links</h3>
            <ul >
                {platformLinks.map((item, index) => (
                    <li key={index} className='text-sm p-2'><a href={item.href}>{item.text}</a></li>
                ))}
            </ul>
            </div>
            <div className="flex flex-col m-3 items-center">
            <h3 className='text-lg font-bold mb-2'> Community Links</h3>
            <ul >
                {communityLinks.map((item, index) => (
                    <li key={index} className='text-sm p-2'><a href={item.href}>{item.text}</a></li>
                ))}
            </ul>
            </div>
           
        </div>
       <div className='text-center p-3 cursor-none'>Developed by  🚂</div> 

    </footer>
  )
}

export default Footer
