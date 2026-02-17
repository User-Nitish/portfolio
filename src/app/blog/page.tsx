import { div } from 'framer-motion/client'
import React from 'react'
import "../globals.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className='py-32 relative'>
        <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
        
        <h1 className="text-4xl md:text-6xl pl-8 md:pl-16 font-bold text-white">Blog</h1>

        {/* Blog Container */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8 py-20 px-4">
            <BlogPreview 
                link="/blog/ui-in-ai" 
                title="Understanding the MERN Stack: A Complete Guide" 
                cat="Web Development - 8 min read" 
                prev="Learn how to build full-stack web applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers architecture, best practices, and real-world implementation patterns." 
            />
            <BlogPreview 
                link="/blog/accessible" 
                title="Building AI-Powered Web Applications with Generative AI" 
                cat="AI & Web Dev - 10 min read" 
                prev="Explore how to integrate generative AI into your web applications. Learn about APIs, prompting strategies, and creating seamless user experiences with AI-powered features." 
            />
        </div>
    </div>
  )
}

const BlogPreview = ({ title, cat, prev, link }) => {
    return (
        <Link href={link} className='cursor-pointer'>
            <div className='m-4 max-w-[400px] md:max-w-[600px] space-y-3 bg-opacity-10 bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200'>
                <div className='flex flex-col space-y-1'>
                    <h2 className='text-xl md:text-2xl text-white font-semibold'>{title}</h2>
                    <p className='text-sm md:text-base text-white font-light'>{cat}</p>
                </div>
                <p className="text-base md:text-lg text-white font-light">{prev}</p>
            </div>
        </Link>
    )
}

export default page
