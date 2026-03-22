'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import MagneticWrapper from '../components/ui/MagneticWrapper'
import ScrollReveal from '../components/ui/ScrollReveal'

const AboutPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const sectionRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })

    const titleY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }

    const skills = [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'Express', 'SQL', 'PHP'] },
        { name: 'AI & Core', items: ['GenAI', 'LLMs', 'C++', 'Python'] },
    ]

    const stats = [
        { label: 'Experience', value: '2+ Yrs' },
        { label: 'Projects', value: '5+' },
        { label: 'Tech Stack', value: '12+' },
        { label: 'Commitment', value: '100%' },
    ]

    const powerLevel = [
        { label: 'TECHNICAL STANDING', value: 'B.TECH CSE' },
        { label: 'PRIMARY LOCATION', value: 'PHAGWARA, PB' },
        { label: 'STATUS', value: 'ACTIVE' },
    ]

    return (
        <div ref={sectionRef} className="min-h-screen bg-[#010309] text-[#F5F5F0] selection:bg-[#FF6B35]/30 selection:text-white relative overflow-hidden">
            {/* Premium Grain & Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Dynamic Interactive Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{
                        x: mousePosition.x * -0.05,
                        y: mousePosition.y * -0.05,
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/10 blur-[150px] rounded-full animate-pulse" 
                />
                <motion.div 
                    animate={{
                        x: mousePosition.x * 0.03,
                        y: mousePosition.y * 0.03,
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8B7355]/5 blur-[120px] rounded-full animate-pulse delay-700" 
                />
                
                {/* Floating Decorative Text */}
                <div className="absolute top-[20%] left-[5%] text-[15rem] font-serif font-black text-white/[0.01] select-none">
                    NITISH
                </div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32">
                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-48 items-center">
                    <div className="lg:col-span-8">
                        <motion.div style={{ y: titleY }}>
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[#FF6B35] font-black tracking-[0.4em] uppercase text-[10px] mb-8 block font-sans"
                            >
                                Digital Architect / v2.3
                            </motion.span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.85] mb-12">
                                <span className="block mb-4 overflow-visible py-2">
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                                        className="inline-block"
                                    >
                                        Refining
                                    </motion.span>
                                </span>
                                <span className="block overflow-visible py-2">
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                                        className="inline-block italic text-[#8B7355] pr-4"
                                    >
                                        Digital
                                    </motion.span>
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                                        className="inline-block"
                                    >
                                        Realms.
                                    </motion.span>
                                </span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <aside className="lg:col-span-5 lg:sticky lg:top-40 h-fit mb-32 lg:mb-0 space-y-12">
                        <motion.div 
                            style={{ scale: imageScale }}
                            className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                        >
                            <motion.div
                                animate={{
                                    x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.02,
                                    y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.02,
                                }}
                                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/me2.jpeg"
                                    alt="Nitish Kumar"
                                    fill
                                    className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[#010309]/10 group-hover:bg-transparent transition-colors duration-700" />
                            </motion.div>
                        </motion.div>

                        {/* Power Level Block */}
                        <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm space-y-6">
                            {powerLevel.map((item, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">{item.label}</span>
                                    <span className="text-sm font-serif font-bold text-[#FF6B35]">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, i) => (
                                <motion.div 
                                    key={i} 
                                    {...fadeIn} 
                                    transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                                    className="p-6 border border-white/5 rounded-2xl bg-white/[0.01]"
                                >
                                    <div className="text-3xl font-serif font-bold text-[#FF6B35] mb-2">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </aside>
                    
                    <div className="lg:col-span-7 space-y-32">
                        <section>
                            <motion.h2 
                                {...fadeIn}
                                className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-12 block font-sans"
                            >
                                The Narrative
                            </motion.h2>
                            <div className="space-y-12 text-2xl md:text-3xl lg:text-4xl text-[#F5F5F0] leading-tight font-serif font-light">
                                <p>
                                    I'm <span className="text-[#FF6B35] italic font-bold">Nitish Kumar Singh</span>, a Computer Science student at Lovely Professional University dedicated to crafting modern web solutions and architecting digital experiences.
                                </p>
                                <p className="text-white/60">
                                    My core expertise lies in the <span className="text-white italic">MERN stack</span>, where I build robust, scalable applications focused on clean architecture and seamless user journeys.
                                </p>
                                <p>
                                    I thrive on transforming abstract concepts into high-performance products that balance technical sophistication with aesthetic clarity.
                                </p>
                                <p className="text-lg md:text-xl text-white/40 font-sans tracking-wide leading-relaxed">
                                    Currently exploring: <span className="text-[#8B7355] font-bold">Advanced DSA, DevOps, and polishing my old skills.</span>
                                </p>
                            </div>
                        </section>

                        <section className="pt-24 border-t border-white/5">
                            <motion.h2 
                                {...fadeIn}
                                className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-12 block font-sans"
                            >
                                Core Principles & Methodology
                            </motion.h2>
                            <div className="text-xl md:text-2xl text-white/70 font-serif leading-relaxed italic">
                                "Acquire knowledge, execute with precision, and embrace iterative failure as a catalyst for growth. Should a solution remain elusive, revisit fundamental principles, refine the logic, and persist until technical excellence is achieved."
                            </div>
                        </section>
                    </div>
                </div>

                {/* Core Stack - Realigned to full width */}
                <section className="mt-48 pt-32 border-t border-white/5">
                    <motion.h2 
                        {...fadeIn}
                        className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-16 block font-sans"
                    >
                        Core Stack
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {skills.map((skillGroup, idx) => (
                            <div key={idx} className="space-y-8">
                                <h3 className="text-[#8B7355] font-serif italic text-3xl">
                                    {skillGroup.name}
                                </h3>
                                <ul className="space-y-4">
                                    {skillGroup.items.map((skill, sIdx) => (
                                        <li key={sIdx} className="text-[#F5F5F0]/40 hover:text-[#FF6B35] transition-colors duration-300 text-lg uppercase tracking-widest text-[13px] font-bold">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutPage
