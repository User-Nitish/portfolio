'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import "../globals.css"
import Link from 'next/link'
import { SplitText } from '../components/ui/SplitText'

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
        {/* Background Pattern and Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/10 via-transparent to-brown-theme/10"></div>
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-bgColor to-transparent"></div>
            <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-theme/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-brown-theme/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 px-4">
                <SplitText 
                    text="My Blog"
                    className="text-hierarchy-primary mb-8 justify-center bg-gradient-to-r from-orange-theme to-brown-theme bg-clip-text text-transparent font-serif"
                />
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-theme/50 to-transparent mx-auto"></div>
                <p className="text-white/50 text-xl max-w-2xl mx-auto mt-8 font-sans leading-relaxed">
                    Thoughts, tutorials, and insights on web development, AI, and technology.
                </p>
            </div>

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
            transition={{ duration: 1, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md md:max-w-lg"
        >
            <Link href={link} className='block cursor-pointer group'>
                <div className='bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-theme/40 transition-all duration-500 relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-theme/20 hover:-translate-y-2 shadow-xl'>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/5 to-olive-theme/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Content */}
                    <div className='relative z-10 space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='text-3xl text-white font-bold group-hover:text-orange-theme transition-colors duration-500 leading-tight font-serif'>
                                {title}
                            </h2>
                            <p className='text-sm md:text-base text-orange-theme font-bold tracking-widest uppercase flex items-center font-sans'>
                                <span className="w-2 h-2 bg-orange-theme rounded-full mr-3 shadow-lg shadow-orange-theme/50"></span>
                                {cat}
                            </p>
                        </div>
                        <p className="text-white/60 text-lg leading-relaxed line-clamp-3 font-sans">
                            {prev}
                        </p>
                        
                        {/* Read more indicator */}
                        <div className='flex items-center justify-between pt-2'>
                            <span className='text-orange-theme text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                Read more →
                            </span>
                            <div className='flex items-center space-x-2 text-gray-400 group-hover:text-orange-theme transition-colors duration-300'>
                                <span className="text-xs">Continue reading</span>
                                <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 5l7 7m0 0l-7 7m7-7H6' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-theme/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                </div>
            </Link>
        </motion.div>
    )
}

export default page
