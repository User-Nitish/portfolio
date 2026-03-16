'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import "../globals.css";

const page = () => {
    return (
        <>
            <div className="min-h-screen bg-bgColor py-20 px-4 relative overflow-hidden">
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 to-purple-500/5'></div>
                <div className='absolute top-[-200px] left-[-200px] h-[400px] w-[400px] bg-brand/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] bg-purple-500/10 rounded-full blur-3xl'></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            About <span className="text-brand">Me</span>
                        </h1>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex justify-center lg:justify-start"
                        >
                            <div className="relative">
                                <Image
                                    src="/nitish.jpeg"
                                    alt="Picture of Nitish Kumar"
                                    width={480}
                                    height={480}
                                    className="rounded-2xl object-contain w-full max-w-[480px] shadow-2xl"
                                    priority
                                    quality={85}
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-300"
                            >
                                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Hello, I'm Nitish</h2>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    A digital architect and code craftsman, transforming caffeine and curiosity into innovative web solutions. Currently navigating the exciting world of B.Tech CSE at LPU, where I turn complex problems into elegant code.
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    I believe great code is like a good story - it should be clear, engaging, and leave a lasting impression. When I'm not debugging, you'll find me exploring the latest AI trends or planning the next big project.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-300"
                            >
                                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">My Digital Superpowers</h2>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    I speak fluent <span className="text-brand font-medium">JavaScript</span>, dance with <span className="text-purple-400 font-medium">AI algorithms</span>, and build digital experiences that users actually love to interact with.
                                </p>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                        <span className="text-gray-300 text-sm">Web Wizardry: React, Node.js, Express, MongoDB</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-brand rounded-full"></span>
                                        <span className="text-gray-300 text-sm">AI Magic: Generative AI, Smart Chatbots, APIs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        <span className="text-gray-300 text-sm">Code Languages: C++, JavaScript, Python, PHP</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 w-full lg:max-w-md">
                                <h3 className="font-semibold text-purple-300 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    Where I Hang Out
                                </h3>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• 📍 Based in beautiful Bihar, India</p>
                                    <p>• 🗣️ Fluent in English, Hindi, and Bengali tech-talk</p>
                                    <p>• 💼 Open for freelance adventures and full-time missions</p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md p-4 rounded-lg border border-green-500/20 hover:border-green-500/30 transition-all duration-300 w-full lg:max-w-md">
                                <h3 className="font-semibold text-green-300 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.0025 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    Learning Adventures
                                </h3>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• 🚀 Leveled up with W3 Grads summer training</p>
                                    <p>• 👥 Guided by industry wizards and coding mentors</p>
                                    <p>• 🤝 Collaborated on cool projects with fellow code warriors</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-brand/10 to-cyan-500/10 backdrop-blur-md p-4 rounded-lg border border-brand/20 hover:border-brand/30 transition-all duration-300 mb-8">
                            <h3 className="font-semibold text-brand mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.293a1 1 0 00-1.414 0L10 10.586 8.707 9.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 11.414l1.293 1.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd"/>
                                </svg>
                                Epic Quests Completed
                            </h3>
                            <div className="text-gray-300 text-sm space-y-1">
                                <p>• 🏗️ Crafted 3+ full-stack web masterpieces</p>
                                <p>• 🤖 Wove AI magic into multiple digital creations</p>
                                <p>• 🌟 Contributed to the open-source universe</p>
                                <p>• 🧩 Puzzle-solving champion (LeetCode warrior)</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        className="bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-300 text-center"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href='https://www.linkedin.com/in/nitish-kr-singh1/' 
                               className='px-6 py-2.5 bg-brand hover:bg-brand/80 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center'
                               target="_blank"
                               rel="noopener noreferrer">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a href='https://www.github.com/User-Nitish' 
                               className='px-6 py-2.5 bg-boxes hover:bg-boxes-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center'
                               target="_blank"
                               rel="noopener noreferrer">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                        
                        <p className="text-gray-400 text-sm">
                            📧 <span className="text-cyan-400">ns24492449@gmail.com</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            Let's build something amazing together!
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default page
