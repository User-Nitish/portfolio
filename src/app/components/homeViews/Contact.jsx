'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, DocumentDuplicateIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { SplitText } from '../ui/SplitText'
import MagneticWrapper from '../ui/MagneticWrapper'
import "../../globals.css"

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);

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

    const GithubIcon = ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );

    const LinkedinIcon = ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );

    return (
        <section className="w-full py-24 md:py-48 relative overflow-hidden bg-bgColor" id="contact">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-theme/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brown-theme/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                {/* Vintage grid overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 divide-white/5"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-12 bg-orange-theme/30"></div>
                        <span className="text-orange-theme text-[10px] font-bold tracking-[0.4em] uppercase">Connect</span>
                        <div className="h-px w-12 bg-orange-theme/30"></div>
                    </motion.div>

                    <SplitText 
                        text="Hello Let's Create Digital Magic" 
                        className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight justify-center"
                        wordSpacing={40}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you have a specific project in mind or just want to explore possibilities, my virtual door is always open.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
                    {/* Email Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-10 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <div className="w-16 h-16 bg-orange-theme/20 rounded-full flex items-center justify-center">
                                <EnvelopeIcon className="w-8 h-8 text-orange-theme" />
                            </div>
                            <div>
                                <h3 className="text-white font-serif text-xl mb-1">Email</h3>
                                <p className="text-white/40 text-sm">ns24492449@gmail.com</p>
                            </div>
                            <MagneticWrapper>
                                <button
                                    onClick={handleCopy}
                                    className="w-full py-4 rounded-xl border border-orange-theme/30 text-orange-theme text-[10px] font-bold uppercase tracking-widest hover:bg-orange-theme hover:text-white transition-all flex items-center justify-center gap-2 px-6"
                                >
                                    {isCopied ? <><CheckIcon className="w-4 h-4" /> Copied!</> : <><DocumentDuplicateIcon className="w-4 h-4" /> Copy Email</>}
                                </button>
                            </MagneticWrapper>
                        </div>
                    </motion.div>

                    {/* LinkedIn Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-10 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brown-theme/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <div className="w-16 h-16 bg-brown-theme/20 rounded-full flex items-center justify-center">
                                <LinkedinIcon className="w-8 h-8 text-brown-theme" />
                            </div>
                            <div>
                                <h3 className="text-white font-serif text-xl mb-1">LinkedIn</h3>
                                <p className="text-white/40 text-sm">Let's grow together</p>
                            </div>
                            <MagneticWrapper>
                                <a
                                    href="https://www.linkedin.com/in/nitish-kr-singh1/"
                                    target="_blank"
                                    className="w-full py-4 rounded-xl border border-brown-theme/30 text-brown-theme text-[10px] font-bold uppercase tracking-widest hover:bg-brown-theme hover:text-white transition-all text-center block"
                                >
                                    View Profile
                                </a>
                            </MagneticWrapper>
                        </div>
                    </motion.div>

                    {/* GitHub Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-10 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                                <GithubIcon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-serif text-xl mb-1">GitHub</h3>
                                <p className="text-white/40 text-sm">Explore my workspace</p>
                            </div>
                            <MagneticWrapper>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="w-full py-4 rounded-xl border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-bgColor transition-all text-center block"
                                >
                                    View Repos
                                </a>
                            </MagneticWrapper>
                        </div>
                    </motion.div>
                </div>

                {/* Final Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="inline-block relative">
                        <MagneticWrapper>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 bg-orange-theme text-white px-12 py-6 rounded-full font-serif text-xl font-bold shadow-2xl shadow-orange-theme/20 hover:shadow-orange-theme/40 transition-all flex items-center gap-3"
                            >
                                Start a Connection <SparklesIcon className="w-6 h-6" />
                            </motion.button>
                        </MagneticWrapper>
                        <div className="absolute inset-0 bg-orange-theme blur-2xl opacity-20 animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
