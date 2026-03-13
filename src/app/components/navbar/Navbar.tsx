'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import './navbar.css'
import { Bars3Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import TransitionLink from "../TransitionLink"

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => setMobileOpen(prev => !prev)

  return (
    <>
      <nav className={`flex justify-between items-center py-2 px-8 md:px-16 sticky top-0 transition-all duration-300 z-50 mx-4 mt-4 rounded-2xl ${
        scrolled 
          ? 'bg-gradient-to-r from-brand/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/20' 
          : 'bg-gradient-to-r from-brand/30 to-purple-500/30 backdrop-blur-lg border border-white/20'
      }`}>
        <TransitionLink href="/" className="group">
          <div className="relative">
            <Image
              src='/logo.svg'
              alt='Logo for Sam Kotecha portfolio site'
              width={74}
              height={29}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </TransitionLink>
        
        <ul className='gap-8 hidden md:flex items-center'>
          <li>
            <TransitionLink href="/about" className='nav-link text-white/90 font-light hover:text-white relative group'>
              About
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/experience" className='nav-link text-white/90 font-light hover:text-white relative group'>
              Education & Experience
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/achievements" className='nav-link text-white/90 font-light hover:text-white relative group'>
              Achievements
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/blog" className='nav-link text-white/90 font-light hover:text-white relative group'>
              Blog
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/#contact" className='nav-link text-white/90 font-light hover:text-white relative group'>
              Contact
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </TransitionLink>
          </li>
          <li className="ml-4">
            <a
              href="https://drive.google.com/file/d/1qFJdOxP63v8w81va7JuAXvh7dh8rKfZe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className='group relative px-6 py-3 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 font-light shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-0.5'
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-lg shadow-lg shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
        </ul>
        
        <button 
          className='md:hidden w-6 h-6 text-white cursor-pointer p-1 rounded-lg hover:bg-white/10 transition-colors duration-200' 
          onClick={handleToggle}
        >
          <Bars3Icon />
        </button>
      </nav>
      
      <MobileNav isMobileOpen={isMobileOpen} handleToggle={handleToggle} />
    </>
  )
}

export default Navbar
