'use client'
import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'

const MobileNav = ({ isMobileOpen, handleToggle }) => {
  return (
    <div
      className={`md:hidden bg-gradient-to-br from-[#0E101A] to-[#1a1f3a] min-h-screen w-4/5 fixed top-0 right-0 flex justify-center items-center 
      ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-50 px-8 shadow-2xl`}
    >
      <div className='flex flex-col space-y-12 w-full max-w-sm'>
        {/* Title */}
        <div className="relative">
          <p className='text-white text-xs tracking-widest border-b pb-3 border-white/30'>NAVIGATION</p>
          <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
        </div>

        {/* Navigation Links */}
        <ul className='gap-6 flex flex-col text-2xl md:text-3xl'>
          <li>
            <Link href="/about" className='mobile-nav-link text-white/80 font-light hover:text-white transition-all duration-300 relative group py-2 block' onClick={handleToggle}>
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/experience" className='mobile-nav-link text-white/80 font-light hover:text-white transition-all duration-300 relative group py-2 block' onClick={handleToggle}>
              <span className="relative z-10">Education & Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/achievements" className='mobile-nav-link text-white/80 font-light hover:text-white transition-all duration-300 relative group py-2 block' onClick={handleToggle}>
              <span className="relative z-10">Achievements</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/blog" className='mobile-nav-link text-white/80 font-light hover:text-white transition-all duration-300 relative group py-2 block' onClick={handleToggle}>
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/#contact" className='mobile-nav-link text-white/80 font-light hover:text-white transition-all duration-300 relative group py-2 block' onClick={handleToggle}>
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
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
          <div className="pt-2">
            <a
              href="https://drive.google.com/file/d/1qFJdOxP63v8w81va7JuAXvh7dh8rKfZe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className='group relative px-6 py-3 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-light shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 inline-block'
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
