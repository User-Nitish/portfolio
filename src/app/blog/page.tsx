'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import "../globals.css"
import Link from 'next/link'

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <div className='min-h-screen py-32 relative overflow-hidden'>
        {/* Enhanced Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-purple-500/5'></div>
        <div className='absolute top-[-200px] left-[-200px] h-[400px] w-[400px] bg-brand/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] bg-purple-500/10 rounded-full blur-3xl'></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                ref={blogRef}
                initial={{ opacity: 0, y: -30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    My <span className="text-brand">Blog</span>
                </h1>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                    Thoughts, tutorials, and insights on web development, AI, and technology
                </p>
            </motion.div>

            {/* Blog Container */}
            <div className="flex flex-wrap justify-center gap-8 px-4">
                <BlogPreview 
                    link="/blog/ui-in-ai" 
                    title="Understanding the MERN Stack: A Complete Guide" 
                    cat="Web Development - 18 min read" 
                    prev="Learn how to build full-stack web applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers architecture, best practices, and real-world implementation patterns." 
                    isVisible={isVisible}
                    delay={0}
                />
                <BlogPreview 
                    link="/blog/accessible" 
                    title="Building AI-Powered Web Applications with Generative AI" 
                    cat="AI & Web Dev - 20 min read" 
                    prev="Explore how to integrate generative AI into your web applications. Learn about APIs, prompting strategies, and creating seamless user experiences with AI-powered features." 
                    isVisible={isVisible}
                    delay={200}
                />
            </div>
        </div>
    </div>
  )
}

const BlogPreview = ({ title, cat, prev, link, isVisible, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
            className="w-full max-w-md md:max-w-lg"
        >
            <Link href={link} className='block cursor-pointer group'>
                <div className='bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-500 relative overflow-hidden group hover:shadow-2xl hover:shadow-brand/20 hover:-translate-y-2'>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className='relative z-10 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <h2 className='text-xl md:text-2xl text-white font-semibold group-hover:text-brand transition-colors duration-300 leading-tight'>
                                {title}
                            </h2>
                            <p className='text-sm md:text-base text-brand font-medium flex items-center'>
                                <span className="w-2 h-2 bg-brand rounded-full mr-2"></span>
                                {cat}
                            </p>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                            {prev}
                        </p>
                        
                        {/* Read more indicator */}
                        <div className='flex items-center justify-between pt-2'>
                            <span className='text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                Read more →
                            </span>
                            <div className='flex items-center space-x-2 text-gray-400 group-hover:text-brand transition-colors duration-300'>
                                <span className="text-xs">Continue reading</span>
                                <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 5l7 7m0 0l-7 7m7-7H6' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                </div>
            </Link>
        </motion.div>
    )
}

export default page
