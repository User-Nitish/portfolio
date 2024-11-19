'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import './navbar.css'
import { Bars3Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import TransitionLink from "../TransitionLink"

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)

  const handleToggle = () => setMobileOpen(prev => !prev)

  return (
    <>
      <nav className='flex justify-between items-center py-5 px-8 md:px-16 sticky top-0 bg-[#0E101A] z-50'>
        <TransitionLink href="/">
          <Image
            src='/logo.svg'
            alt='Logo for Sam Kotecha portfolio site'
            width={74}
            height={29}
          />
        </TransitionLink>
        
        <ul className='gap-10 hidden md:flex'>
          <li>
            <TransitionLink href="/about" className='nav-link text-white font-light'>About</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/experience" className='nav-link text-white font-light'>Experience</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/blog" className='nav-link text-white font-light'>Blog</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/#contact" className='nav-link text-white font-light'>Contact</TransitionLink>
          </li>
        </ul>
        
        <Bars3Icon className='md:hidden w-5 h-5 text-white cursor-pointer' onClick={handleToggle} />
      </nav>
      
      <MobileNav isMobileOpen={isMobileOpen} handleToggle={handleToggle} />
    </>
  )
}

export default Navbar
