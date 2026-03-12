import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TransitionLink from "./TransitionLink"


const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center border-t border-white border-opacity-10 p-6 md:p-8 space-y-4 md:space-y-0">
      <TransitionLink href="/">
        <Image
          src='/logo.svg'
          alt='Logo for Website'
          width={74}
          height={29}
        />
      </TransitionLink>
      
      
    </footer>
  )
}

export default Footer
