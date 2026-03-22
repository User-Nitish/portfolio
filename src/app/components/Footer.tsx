import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TransitionLink from "./TransitionLink"


const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <TransitionLink href="/">
            <Image
              src='/logo.svg'
              alt='Logo'
              width={80}
              height={32}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </TransitionLink>
          <p className="text-white/40 text-sm font-sans underline underline-offset-4 decoration-orange-theme/30">
            Crafting digital experiences with passion.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-8">
            <a href="https://github.com/User-Nitish" target="_blank" className="text-white/50 hover:text-orange-theme transition-colors font-bold uppercase tracking-widest text-xs">GitHub</a>
            <a href="https://www.linkedin.com/in/nitish-kr-singh1/" target="_blank" className="text-white/50 hover:text-orange-theme transition-colors font-bold uppercase tracking-widest text-xs">LinkedIn</a>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-sans">
            © {new Date().getFullYear()} Nitish Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
