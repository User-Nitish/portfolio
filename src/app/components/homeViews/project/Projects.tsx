'use client'
import React from 'react'
import { motion, motionValue, useTransform, useSpring, useMotionTemplate, useScroll } from 'framer-motion'
import { SplitText } from '../../ui/SplitText'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from './AnimatedBtn'
import MagneticWrapper from '../../ui/MagneticWrapper'

import { projects } from './projectData'

const Projects = () => {
    return (
        <section className='w-full py-48 px-6 relative bg-bgColor overflow-hidden' id='projects'>
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-orange-theme/5 rounded-full blur-[150px] animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-48">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-4 mb-12"
                    >
                        <div className="h-px w-12 bg-orange-theme/30"></div>
                        <span className="text-orange-theme text-[10px] font-bold tracking-[0.4em] uppercase font-sans">Featured Portfolio</span>
                    </motion.div>
                    <SplitText 
                        text="Project Works" 
                        className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.9] mb-12"
                    />
                </div>
                
                <div className='space-y-64'>
                    {projects.map((project, index) => (
                        <ProjectRow 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex justify-center mt-64 border-t border-white/5 pt-24'
                >
                    <Link href="/experience" className='group flex items-center gap-8'>
                        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors">The Journey Continues</span>
                        <div className="w-16 h-px bg-orange-theme/30 group-hover:w-24 transition-all"></div>
                        <span className="text-white font-serif italic text-2xl group-hover:text-orange-theme transition-colors">Experience & Education</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

const ProjectRow = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const cardRef = React.useRef(null);
    const [isHovering, setIsHovering] = React.useState(false);
    
    // Motion Values for Follow Bubble
    const mouseX = motionValue(0);
    const mouseY = motionValue(0);
    const bubbleX = useSpring(mouseX, { damping: 25, stiffness: 200 });
    const bubbleY = useSpring(mouseY, { damping: 25, stiffness: 200 });

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div ref={cardRef} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 relative min-h-[60vh]`}>
            {/* Background Numbering */}
            <span className={`absolute -top-24 ${isEven ? '-left-12' : '-right-12'} text-[15rem] md:text-[25rem] font-serif font-black text-white/[0.02] leading-none select-none pointer-events-none z-0`}>
                0{index + 1}
            </span>

            {/* Image Container */}
            <motion.div 
                style={{ y, opacity, scale }}
                className="w-full lg:w-3/5 z-10"
            >
                <Link href={`/projects/${project.id}`}>
                    <div 
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="relative aspect-[16/10] overflow-hidden rounded-2xl group cursor-none"
                    >
                        <Image 
                            src={project.img} 
                            alt={project.title} 
                            fill 
                            className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                            priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-bgColor/20 group-hover:opacity-0 transition-opacity"></div>
                        
                        {/* Custom Mouse Follower Bubble */}
                        <motion.div
                            style={{ x: bubbleX, y: bubbleY }}
                            animate={{
                                scale: isHovering ? 1 : 0,
                                opacity: isHovering ? 1 : 0,
                            }}
                            className="pointer-events-none absolute top-0 left-0 w-[100px] h-[100px] -ml-[50px] -mt-[50px] bg-white backdrop-blur-3xl rounded-full flex flex-col items-center justify-center z-50 shadow-2xl border border-black/5"
                        >
                            <span className="text-bgColor text-[8px] uppercase font-black tracking-[0.2em] text-center leading-none mb-1">
                                View Case
                            </span>
                            <motion.div 
                                animate={{ x: isHovering ? [0, 5, 0] : 0 }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="mt-1 text-orange-theme"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.div>
                        </motion.div>

                        {/* Reveal Overlay */}
                        <motion.div 
                            initial={{ x: "0%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                            viewport={{ once: true }}
                            className="absolute inset-0 bg-bgColor z-20"
                        />
                    </div>
                </Link>
            </motion.div>

            {/* Content Container */}
            <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className={`w-full lg:w-2/5 ${isEven ? 'text-left' : 'text-right'} z-20`}
            >
                <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
                    <div className='flex flex-wrap gap-3 mb-8'>
                        {project.tech.map(t => (
                            <span key={t} className='text-[10px] font-black uppercase tracking-[0.2em] text-orange-theme/60'>{t}</span>
                        ))}
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 hover:text-orange-theme transition-colors leading-tight">
                        {project.title}
                    </h3>
                    
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">{project.date}</p>
                    
                    <p className="text-white/40 text-lg leading-relaxed mb-6 font-sans max-w-sm">
                        {project.description}
                    </p>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-12 font-sans max-w-sm italic">
                        {project.fullDescription}
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href={`/projects/${project.id}`} className="group flex items-center gap-4">
                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-orange-theme transition-colors">Project Details</span>
                            <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-orange-theme transition-all"></div>
                        </Link>
                        {project.liveHref && (
                            <a href={project.liveHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors">Live</span>
                                <div className="p-3 rounded-full border border-white/10 group-hover:border-orange-theme/50 transition-colors">
                                    <svg className="w-4 h-4 text-white/40 group-hover:text-orange-theme" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;
