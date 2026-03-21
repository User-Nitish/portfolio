'use client'
import React from 'react'
import { ClockIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import "../../globals.css"

const page = () => {
  return (
    <div className='bg-bgColor min-h-screen relative overflow-hidden'>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-olive-theme/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-brown-theme/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32'>
        <section className='space-y-8 mb-16'>
          <div className='space-y-4'>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-[10px] font-bold uppercase tracking-[0.4em] text-orange-theme'
            >
              Web Development
            </motion.p>
            <h1 className='text-4xl md:text-7xl text-white font-serif font-bold leading-tight'>
              Understanding the MERN Stack
            </h1>
            <div className='flex items-center gap-3 pt-4'>
              <ClockIcon className='w-5 h-5 text-brown-theme'/>
              <p className='text-xs font-bold uppercase tracking-widest text-white/40'>18 min read</p>
            </div>
          </div>
          
          <p className='text-white/60 text-xl font-sans leading-relaxed border-l-2 border-orange-theme/30 pl-8 py-2'>
            The MERN stack has become one of the most popular choices for full-stack JavaScript development. This guide will help you understand each component and how they work together to create robust, scalable web applications.
          </p>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-24"
        >
          <Image 
            src="/ui-blog.webp"
            alt='MERN Stack diagram'
            width={1200}
            height={600}
            className='w-full h-auto'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bgColor/60 to-transparent"></div>
        </motion.div>

        <article className='space-y-16 pb-24'>
          <div className='max-w-3xl space-y-6'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">What is the MERN Stack?</h2>
            <div className="space-y-6 text-white/50 leading-relaxed font-sans text-lg">
              <p>MERN stands for <span className="text-orange-theme font-bold">MongoDB, Express.js, React, and Node.js</span>. It's a full-stack JavaScript development framework that allows developers to build complete web applications using a single programming language.</p>
              <p>The MERN stack follows a client-server architecture where <span className="text-orange-accent font-bold">React</span> handles the user interface, <span className="text-brown-theme font-bold">Node.js</span> with <span className="text-brown-theme font-bold">Express</span> handles the backend server and APIs, and <span className="text-orange-theme font-bold">MongoDB</span> stores the application data.</p>
            </div>
          </div>

          <div className='max-w-3xl space-y-6'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">The Components</h2>
            <div className="space-y-8 text-white/50 font-sans text-lg">
              <div className="space-y-4">
                <h3 className="text-xl text-orange-theme font-bold uppercase tracking-widest">MongoDB</h3>
                <p>A NoSQL database that stores data in flexible JSON-like documents. It provides schema flexibility, allowing you to store complex nested data structures and arrays.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-orange-theme font-bold uppercase tracking-widest">Express.js</h3>
                <p>A minimal and flexible Node.js web application framework. It simplifies server creation, routing, and middleware management.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-orange-theme font-bold uppercase tracking-widest">React</h3>
                <p>A JavaScript library for building user interfaces using reusable components. Its component-based architecture promotes code reusability and maintainability.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-orange-theme font-bold uppercase tracking-widest">Node.js</h3>
                <p>A JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run outside the browser on the server side, utilizing an event-driven, non-blocking I/O model.</p>
              </div>
            </div>
          </div>
        </article>

        <footer className='border-t border-white/5 pt-12 text-center'>
          <p className='text-white/20 text-xs font-bold uppercase tracking-widest'>
            Exploring the frontiers of technology & design
          </p>
        </footer>
      </div>
    </div>
  )
}

export default page
