'use client'
import React, { useState, useEffect } from 'react'
import { EnvelopeIcon, DocumentDuplicateIcon, CheckIcon, CodeBracketIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid'
import "../../globals.css"

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("ns24492449@gmail.com");
            setIsCopied(true);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => setIsCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    // Custom GitHub Icon SVG
    const GithubIcon = ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );

    // Custom LinkedIn Icon SVG
    const LinkedinIcon = ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    );

    return (
        <section className="w-full py-24 md:py-48 relative overflow-hidden" id="contact">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                {/* Animated floating orbs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 mb-6">
                        <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
                        <div className="h-px w-20 bg-gradient-to-r from-cyan-400 via-transparent to-transparent"></div>
                        <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
                    </div>
                    <h2 className="text-5xl md:text-7xl text-white font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                        Let's Build Something Great Together
                    </h2>
                    <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                        Whether you're seeking innovative solutions or a fresh perspective, I'm here to bring expertise and passion to your team. Let's create something amazing.
                    </p>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Email Card */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setHoveredCard('email')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                            {/* Glowing effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <EnvelopeIcon className="text-white w-8 h-8" />
                                    </div>
                                    {/* Orbiting stars */}
                                    {hoveredCard === 'email' && (
                                        <>
                                            <StarIcon className="absolute -top-2 -right-2 text-yellow-400 w-4 h-4 animate-spin" />
                                            <StarIcon className="absolute -bottom-2 -left-2 text-yellow-400 w-3 h-3 animate-spin delay-500" />
                                        </>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                                    <p className="text-white/70 text-sm">ns24492449@gmail.com</p>
                                </div>
                                <div
                                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30"
                                    onClick={handleCopy}
                                >
                                    {isCopied ? (
                                        <div className="flex items-center space-x-2">
                                            <CheckIcon className="text-green-400 w-5 h-5 animate-bounce" />
                                            <span className="text-green-400 font-semibold">Copied!</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <DocumentDuplicateIcon className="text-cyan-400 w-5 h-5" />
                                            <span className="text-cyan-400 font-semibold">Copy Email</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setHoveredCard('linkedin')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <LinkedinIcon className="text-white w-8 h-8" />
                                    </div>
                                    {hoveredCard === 'linkedin' && (
                                        <>
                                            <StarIcon className="absolute -top-2 -right-2 text-yellow-400 w-4 h-4 animate-spin" />
                                            <StarIcon className="absolute -bottom-2 -left-2 text-yellow-400 w-3 h-3 animate-spin delay-500" />
                                        </>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                                    <p className="text-white/70 text-sm">Connect with me</p>
                                </div>
                                <a 
                                    href="https://www.linkedin.com/in/nitish-kr-singh1/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:from-blue-600/30 hover:to-blue-400/30 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30"
                                >
                                    <div className="flex items-center space-x-2">
                                        <LinkedinIcon className="text-blue-400 w-5 h-5" />
                                        <span className="text-blue-400 font-semibold">View Profile</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setHoveredCard('github')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-700/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <GithubIcon className="text-white w-8 h-8" />
                                    </div>
                                    {hoveredCard === 'github' && (
                                        <>
                                            <StarIcon className="absolute -top-2 -right-2 text-yellow-400 w-4 h-4 animate-spin" />
                                            <StarIcon className="absolute -bottom-2 -left-2 text-yellow-400 w-3 h-3 animate-spin delay-500" />
                                        </>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                                    <p className="text-white/70 text-sm">Check my work</p>
                                </div>
                                <a 
                                    href="https://github.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-gray-700/20 to-gray-500/20 backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:from-gray-700/30 hover:to-gray-500/30 transition-all duration-300 border border-gray-500/30 hover:border-gray-400/50 hover:shadow-lg hover:shadow-gray-500/30"
                                >
                                    <div className="flex items-center space-x-2">
                                        <GithubIcon className="text-gray-400 w-5 h-5" />
                                        <span className="text-gray-400 font-semibold">View GitHub</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Call to Action */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group">
                        <div className="bg-black px-8 py-4 rounded-full">
                            <p className="text-white text-lg font-medium">Ready to collaborate?</p>
                        </div>
                        <div className="px-8 py-4">
                            <p className="text-white text-lg font-bold group-hover:animate-pulse">Let's talk!</p>
                        </div>
                    </div>
                    <p className="text-white/60 text-sm mt-6">I'll get back to you within 24 hours</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
