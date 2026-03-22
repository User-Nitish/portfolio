'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import './navbar.css'
import { Bars3Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import TransitionLink from "../TransitionLink"
import MagneticWrapper from '../ui/MagneticWrapper'

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
      <nav className={`flex justify-between items-center py-2 px-6 md:px-10 fixed top-4 left-0 right-0 transition-all duration-500 z-50 max-w-5xl mx-auto w-[92%] md:w-full rounded-full backdrop-blur-xl border border-white/20 ${scrolled
          ? 'bg-bgColor/90 shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-orange-theme/20 border-t border-white/10'
          : 'bg-white/5 border-white/5'
        }`}>
        <TransitionLink href="/" className="group">
          <div className="relative">
            <Image
              src='/logo.svg'
              alt='Logo for Sam Kotecha portfolio site'
              width={60}
              height={24}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </TransitionLink>

        <ul className='gap-6 hidden md:flex items-center font-sans'>
          <li>
            <MagneticWrapper>
              <TransitionLink href="/about" className='nav-link text-white/70 text-xs font-medium hover:text-orange-theme transition-colors duration-300 relative group'>
                About
              </TransitionLink>
            </MagneticWrapper>
          </li>
          <li>
            <MagneticWrapper>
              <TransitionLink href="/experience" className='nav-link text-white/70 text-xs font-medium hover:text-orange-theme transition-colors duration-300 relative group'>
                Education & Experience
              </TransitionLink>
            </MagneticWrapper>
          </li>
          <li>
            <MagneticWrapper>
              <TransitionLink href="/achievements" className='nav-link text-white/70 text-xs font-medium hover:text-orange-theme transition-colors duration-300 relative group'>
                Achievements
              </TransitionLink>
            </MagneticWrapper>
          </li>
          <li>
            <MagneticWrapper>
              <TransitionLink href="/#contact" className='nav-link text-white/70 text-xs font-medium hover:text-orange-theme transition-colors duration-300 relative group'>
                Contact
              </TransitionLink>
            </MagneticWrapper>
          </li>
          <li className="ml-4">
            <MagneticWrapper>
              <a
                href="https://drive.google.com/file/d/1qFJdOxP63v8w81va7JuAXvh7dh8rKfZe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='group relative inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold text-white bg-orange-theme rounded-full border border-orange-theme/50 hover:bg-orange-accent hover:border-orange-accent transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:-translate-y-0.5 overflow-hidden'
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-2 tracking-[0.2em] uppercase">
                  CV
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </MagneticWrapper>
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
