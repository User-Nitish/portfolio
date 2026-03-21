'use client'
import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'

const MobileNav = ({ isMobileOpen, handleToggle }) => {
  return (
    <div
      className={`md:hidden bg-bgColor/95 backdrop-blur-2xl min-h-screen w-4/5 fixed top-0 right-0 flex justify-center items-center 
      ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 ease-[premium] z-50 px-8 border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]`}
    >
      <div className='flex flex-col space-y-12 w-full max-w-sm'>
        {/* Title */}
        <div className="relative">
          <p className='text-white/40 text-[10px] tracking-[0.3em] font-sans font-bold uppercase border-b pb-4 border-white/10'>NAVIGATION</p>
          <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-orange-theme"></div>
        </div>

        {/* Navigation Links */}
        <ul className='gap-8 flex flex-col text-3xl font-serif'>
          <li>
            <Link href="/about" className='mobile-nav-link text-white/70 hover:text-orange-theme transition-all duration-500 relative group py-2 block' onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className='mobile-nav-link text-white/70 hover:text-orange-theme transition-all duration-500 relative group py-2 block' onClick={handleToggle}>
              Education & Experience
            </Link>
          </li>
          <li>
            <Link href="/achievements" className='mobile-nav-link text-white/70 hover:text-orange-theme transition-all duration-500 relative group py-2 block' onClick={handleToggle}>
              Achievements
            </Link>
          </li>
          <li>
            <Link href="/#contact" className='mobile-nav-link text-white/70 hover:text-orange-theme transition-all duration-500 relative group py-2 block' onClick={handleToggle}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="space-y-6">
          <div className="relative">
            <p className='text-white/60 text-xs tracking-widest border-b pb-2 border-white/20'>CONNECT</p>
          </div>
          <ul className='flex gap-6 text-sm'>
            <li>
              <a href="https://www.linkedin.com/in/nitish-kr-singh1/" className='text-white/70 hover:text-cyan-400 transition-colors duration-300 relative group'>
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="https://github.com/" className='text-white/70 hover:text-cyan-400 transition-colors duration-300 relative group'>
                Github
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1qFJdOxP63v8w81va7JuAXvh7dh8rKfZe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className='w-full text-center py-4 px-8 bg-orange-theme text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-orange-accent transition-all duration-300 block'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Close Icon */}
      <button
        className='w-10 h-10 text-white/80 hover:text-white absolute top-6 right-6 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group'
        onClick={handleToggle}
      >
        <XMarkIcon className="w-full h-full transition-transform duration-300 group-hover:rotate-90" />
      </button>
    </div>
  )
}

export default MobileNav
