'use client'
import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'

const MobileNav = ({ isMobileOpen, handleToggle }) => {
  return (
    <div
      className={`md:hidden bg-[#0E101A] min-h-screen w-3/4 fixed top-0 right-0 flex justify-center items-center 
      ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 px-8`}
    >
      <div className='flex flex-col space-y-12'>
        {/* Title */}
        <div>
          <p className='text-white text-xs border-b pb-2 border-white border-opacity-50'>NAVIGATION</p>
        </div>

        {/* Navigation Links */}
        <ul className='gap-5 flex flex-col text-3xl'>
          <li>
            <Link href="/about" className='nav-link text-white font-light' onClick={handleToggle}>About</Link>
          </li>
          <li>
            <Link href="/experience" className='nav-link text-white font-light' onClick={handleToggle}>Experience</Link>
          </li>
          <li>
            <Link href="/blog" className='nav-link text-white font-light' onClick={handleToggle}>Blog</Link>
          </li>
          <li>
            <Link href="/#contact" className='nav-link text-white font-light' onClick={handleToggle}>Contact</Link>
          </li>
        </ul>

        {/* Social Links */}
        <ul className='flex gap-5 text-sm'>
          <li>
            <a href="https://www.linkedin.com/in/nitish-kr-singh1/" className='text-white'>LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/" className='text-white'>Github</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1dOahp9PVkeAiWlRMp6IMqa8iEREzwWDo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-white'>Resume</a>
          </li>
        </ul>
      </div>
      
      {/* Close Icon */}
      <XMarkIcon
        className='w-8 h-8 text-white absolute top-5 right-5 cursor-pointer'
        onClick={handleToggle}
      />
    </div>
  )
}

export default MobileNav
