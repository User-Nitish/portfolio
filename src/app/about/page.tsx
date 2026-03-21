'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitText } from '../components/ui/SplitText'
import MagneticWrapper from '../components/ui/MagneticWrapper'
import "../globals.css";
import ScrollReveal from '../components/ui/ScrollReveal';

const page = () => {
    return (
        <>
            <div className="min-h-screen py-20 px-4 relative overflow-hidden">
                {/* Background Pattern and Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brown-theme/5 via-transparent to-orange-theme/5"></div>

                <div className='absolute top-[-200px] left-[-200px] h-[400px] w-[400px] bg-orange-theme/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] bg-brown-theme/10 rounded-full blur-3xl'></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <SplitText
                            text="About Me"
                            className="text-hierarchy-primary mb-8 justify-center bg-gradient-to-r from-orange-theme to-brown-theme bg-clip-text text-transparent font-serif"
                        />
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-theme/50 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex justify-center lg:justify-start"
                        >
                            <div className="relative group">
                                <motion.div
                                    animate={{
                                        borderRadius: [
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            "58% 42% 75% 25% / 76% 46% 54% 24%",
                                            "67% 33% 47% 53% / 37% 48% 52% 63%",
                                            "30% 70% 70% 30% / 30% 30% 70% 70%"
                                        ]
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-orange-theme/20 blur-2xl group-hover:bg-orange-theme/30 transition-all duration-700"
                                ></motion.div>
                                <motion.div
                                    animate={{
                                        borderRadius: [
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            "58% 42% 75% 25% / 76% 46% 54% 24%",
                                            "67% 33% 47% 53% / 37% 48% 52% 63%",
                                            "30% 70% 70% 30% / 30% 30% 70% 70%"
                                        ]
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10 overflow-hidden border-2 border-white/10 group-hover:border-orange-theme/50 transition-colors duration-500 shadow-2xl w-full max-w-[480px] h-[300px] md:h-[480px] aspect-square bg-boxes"
                                >
                                    <Image
                                        src="/me.jpeg"
                                        alt="Picture of Nitish Kumar"
                                        fill
                                        className="object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        priority
                                        quality={90}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-8"
                        >
                            <div
                                className="bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-theme/30 transition-all duration-500 shadow-2xl"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 font-serif">Hello, I'm Nitish</h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-4 font-sans">
                                    A digital architect and code craftsman, transforming caffeine and curiosity into innovative web solutions. Currently navigating the exciting world of B.Tech CSE at LPU, where I turn complex problems into elegant code.
                                </p>
                                <p className="text-white/50 text-base leading-relaxed font-sans">
                                    I believe great code is like a good story - it should be clear, engaging, and leave a lasting impression. When I'm not debugging, you'll find me exploring the latest AI trends or planning the next big project.
                                </p>
                            </div>

                            <div
                                className="bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-olive-theme/30 transition-all duration-500 shadow-2xl"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 font-serif">Digital Superpowers</h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-6 font-sans">
                                    I speak fluent <span className="text-orange-theme font-bold">JavaScript</span>, dance with <span className="text-brown-theme font-bold">AI algorithms</span>, and build digital experiences that users love.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-theme rounded-full shadow-lg shadow-orange-theme/50"></div>
                                        <span className="text-white/70 text-sm font-medium">Web: React, Node.js, Express, SQL</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brown-theme rounded-full"></div>
                                        <span className="text-white/70 text-sm font-medium">AI: GenAI, Smart Chatbots, APIs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brown-theme rounded-full"></div>
                                        <span className="text-white/70 text-sm font-medium">Core: C++, Python, PHP</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8 mb-16"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
                            <div className="bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-brown-theme/50 transition-all duration-500 w-full shadow-2xl">
                                <h3 className="text-xl font-bold text-brown-theme mb-4 flex items-center font-serif">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    Where I Hang Out
                                </h3>
                                <div className="text-white/70 text-base space-y-3 font-sans">
                                    <p>• 📍 Based in Bihar, India</p>
                                    <p>• 🗣️ English, Hindi, Bengali</p>
                                    <p>• 💼 Open for freelance & full-time</p>
                                </div>
                            </div>

                            <div className="bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-theme/50 transition-all duration-500 w-full shadow-2xl">
                                <h3 className="text-xl font-bold text-orange-theme mb-4 flex items-center font-serif">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.0025 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001-1z" />
                                    </svg>
                                    Learning Adventures
                                </h3>
                                <div className="text-white/70 text-base space-y-3 font-sans">
                                    <p>• 🚀 Summer training at W3 Grads</p>
                                    <p>• 👥 Guided by industry gurus</p>
                                    <p>• 🤝 Peer-to-peer collaboration</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-boxes backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-theme/50 transition-all duration-500 shadow-2xl">
                            <h3 className="text-xl font-bold text-orange-theme mb-4 flex items-center font-serif">
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.293a1 1 0 00-1.414 0L10 10.586 8.707 9.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 11.414l1.293 1.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                                Epic Quests
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70 text-base font-sans">
                                <p>• 🏗️ 3+ Full-stack masterpieces</p>
                                <p>• 🤖 AI magic integrated</p>
                                <p>• 🌟 Open-source contributor</p>
                                <p>• 🧩 LeetCode warrior</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-boxes backdrop-blur-xl p-10 rounded-2xl border border-white/10 text-center shadow-2xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/5 to-transparent"></div>

                        <h2 className="text-2xl font-bold text-white mb-8 font-serif relative z-10">Connect With Me</h2>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 relative z-10">
                            <MagneticWrapper>
                                <a href='https://www.linkedin.com/in/nitish-kr-singh1/'
                                    className='group px-8 py-3 bg-orange-theme text-white font-bold rounded-xl transition-all duration-500 hover:bg-orange-accent hover:shadow-2xl hover:shadow-orange-theme/40 hover:-translate-y-1 flex items-center tracking-wide uppercase text-sm'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <svg className="w-5 h-5 mr-3 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href='https://www.github.com/User-Nitish'
                                    className='group px-8 py-3 bg-white/5 text-white font-bold rounded-xl transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1 flex items-center border border-white/10 tracking-wide uppercase text-sm'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <svg className="w-5 h-5 mr-3 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </a>
                            </MagneticWrapper>
                        </div>

                        <div className="relative z-10 space-y-2">
                            <p className="text-white/40 text-sm">
                                Reach out via email at
                            </p>
                            <p className="text-orange-theme text-lg font-bold font-sans tracking-tight">
                                ns24492449@gmail.com
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default page
