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
      <nav className={`flex justify-between items-center py-2 px-8 md:px-16 sticky top-0 transition-all duration-300 z-50 mx-4 mt-4 rounded-3xl ${
        scrolled 
          ? 'bg-gradient-to-r from-bgColor/70 to-brand/30 backdrop-blur-xl border border-brand/20 shadow-lg shadow-brand/20' 
          : 'bg-gradient-to-r from-bgColor/60 to-brand/20 backdrop-blur-lg border border-brand/10'
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
              className='group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand/20 to-purple-500/20 backdrop-blur-md border border-brand/40 rounded-lg hover:from-brand/30 hover:to-purple-500/30 hover:border-brand/60 transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5'
            >
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                <div className="relative">
                  <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <div className="absolute -inset-1 bg-brand/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                </div>
                <span className="relative">
                  Resume
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-brand to-purple-400 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
