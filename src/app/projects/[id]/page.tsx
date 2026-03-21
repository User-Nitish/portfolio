'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../components/homeViews/project/projectData'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SplitText } from '../../components/ui/SplitText'
import MagneticWrapper from '../../components/ui/MagneticWrapper'

const ProjectDetail = () => {
    const params = useParams()
    const project = projects.find(p => p.id === params.id)

    if (!project) return <div>Project not found</div>

    return (
        <div className="min-h-screen bg-bgColor relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg-pattern-1.png')] bg-cover opacity-5"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-theme/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brown-theme/10 rounded-full blur-[150px]"></div>
            </div>

            {/* Back Button */}
            <div className="fixed top-12 left-12 z-50">
                <Link href="/#projects" className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-theme transition-colors bg-white/5 backdrop-blur-md">
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Projects</span>
                </Link>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <motion.div 
                    layoutId={`project-img-${project.id}`}
                    className="w-full h-full relative"
                >
                    <Image 
                        src={project.img} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bgColor via-transparent to-transparent"></div>
                </motion.div>
                
                <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24 z-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <SplitText 
                                text={project.title}
                                className="text-6xl md:text-9xl font-serif font-bold text-white mb-8"
                            />
                            <div className="flex flex-wrap gap-4 items-center">
                                {project.tech.map(t => (
                                    <span key={t} className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-orange-theme uppercase tracking-widest leading-loose">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-orange-theme font-bold mb-8 italic">The Vision</h2>
                            <p className="text-white/60 text-xl md:text-2xl font-sans leading-relaxed tracking-wide">
                                {project.fullDescription || project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-12 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-serif font-bold text-white mb-8">Role & Impact</h3>
                            <p className="text-white/40 leading-loose">
                                As the lead developer on this project, I focused on creating a seamless user experience that balances complex technical requirements with intuitive design. The result is a platform that scales efficiently while maintaining high performance and accessibility for all users.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-12 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm sticky top-32"
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.5em] text-orange-theme font-bold mb-8 italic">Links</h3>
                            <div className="space-y-6">
                                {project.liveHref && (
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] text-white/30 uppercase tracking-widest">Live Demo</span>
                                        <Link href={project.liveHref} target="_blank" className="text-white hover:text-orange-theme transition-colors font-sans text-lg border-b border-white/10 pb-2 flex items-center justify-between group">
                                            Visit Website
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Source Code</span>
                                    <Link href={project.codeHref} target="_blank" className="text-white hover:text-orange-theme transition-colors font-sans text-lg border-b border-white/10 pb-2 flex items-center justify-between group">
                                        View on GitHub
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectDetail
