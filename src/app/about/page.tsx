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
                                    A third-year B.Tech CSE student at Lovely Professional University, passionate about building innovative digital solutions that make a difference. Located in Bihar, India, I'm dedicated to continuous learning and creating impactful technology.
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    With a strong foundation in computer science and practical industry experience, I strive to bridge the gap between academic knowledge and real-world applications through hands-on project development.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-300"
                            >
                                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">My Expertise</h2>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    Specializing in <span className="text-brand font-medium">Full Stack Development</span> and <span className="text-purple-400 font-medium">AI Integration</span>. I build robust applications using the MERN stack and modern AI technologies.
                                </p>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                        <span className="text-gray-300 text-sm">Web Development: React, Node.js, Express, MongoDB</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-brand rounded-full"></span>
                                        <span className="text-gray-300 text-sm">AI Integration: Gemini API, ML models, NLP</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        <span className="text-gray-300 text-sm">Programming: C++, JavaScript, Python, PHP</span>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-cyan-500/10 to-brand/10 backdrop-blur-md p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
                                <h3 className="font-semibold text-cyan-300 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                    </svg>
                                    Training
                                </h3>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• MERN with Generative AI</p>
                                    <p>• Google Gemini API</p>
                                    <p>• AI-powered Applications</p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-brand/10 to-purple-500/10 backdrop-blur-md p-4 rounded-lg border border-brand/20 hover:border-brand/30 transition-all duration-300">
                                <h3 className="font-semibold text-brand mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    Education
                                </h3>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• B.Tech CSE (2023-Present)</p>
                                    <p>• Lovely Professional University</p>
                                    <p>• CGPA: 8.17/10</p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                                <h3 className="font-semibold text-purple-300 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    Details
                                </h3>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• Location: Bihar, India</p>
                                    <p>• Languages: English, Hindi</p>
                                    <p>• Available for freelance</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-brand/10 to-cyan-500/10 backdrop-blur-md p-4 rounded-lg border border-brand/20 hover:border-brand/30 transition-all duration-300">
                            <h3 className="font-semibold text-brand mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.293a1 1 0 00-1.414 0L10 10.586 8.707 9.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 11.414l1.293 1.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd"/>
                                </svg>
                                Projects & Achievements
                            </h3>
                            <div className="text-gray-300 text-sm space-y-1">
                                <p>• Built 10+ full-stack web applications</p>
                                <p>• Integrated AI features in multiple projects</p>
                                <p>• Active open-source contributor</p>
                                <p>• Problem-solving enthusiast (LeetCode, HackerRank)</p>
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
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
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
                            📧 <span className="text-cyan-400">nitishkumarsingh@example.com</span>
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
