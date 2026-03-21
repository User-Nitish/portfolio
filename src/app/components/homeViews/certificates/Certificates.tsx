'use client'

import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { AcademicCapIcon, StarIcon, CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/solid'
import AnimatedBtn from '../project/AnimatedBtn'
import { SplitText } from '../../ui/SplitText'
import MagneticWrapper from '../../ui/MagneticWrapper'



const Certificates = () => {

    const [hoveredCert, setHoveredCert] = useState(null);
    const [selectedCert, setSelectedCert] = useState(null);
    const [showViewer, setShowViewer] = useState(false);



    const certification = [
        {
            title: "Full Stack (MERN) with Gen AI",
            issuer: "W3Grads",
            id: "FLAMES25MERN1898",
            link: "https://theangaarbatch.in/verify-my-certificate/",
            date: "Jul'25",
            icon: <AcademicCapIcon className="w-6 h-6" />,
            color: "from-orange-theme to-brown-theme",
            image: "/mern.jpg"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730022504244079.pdf",
            date: "Apr'25",
            icon: <StarIcon className="w-6 h-6" />,
            color: "from-brown-theme to-orange-theme",
            image: "/nptel.png"
        }
    ];

    const certificates = [
        {
            title: "Skill-a-thon",
            issuer: "MongoDB & ICT Academy",
            link: "https://www.credly.com/users/nitish-kumar-singh.64ee3ba5/badges#credly",
            date: "Jun'25",
            icon: <TrophyIcon className="w-6 h-6" />,
            color: "from-orange-theme to-brown-theme",
            image: "/skillathon.png"
        },
        {
            title: "Data Structure & Algorithm Using C++",
            issuer: "CipherSchools",
            id: "CS2024-10203",
            link: "https://www.cipherschools.com/",
            date: "Nov'24",
            icon: <CheckCircleIcon className="w-6 h-6" />,
            color: "from-brown-theme to-orange-theme",
            image: "/dsa.jpeg"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/Nitish111/responsive-web-design",
            date: "",
            icon: <TrophyIcon className="w-6 h-6" />,
            color: "from-orange-theme to-brown-theme",
            image: "/responsive.png"
        }
    ];



    return (

        <section className='w-full py-24 md:py-32 relative overflow-hidden'>


            {/* Balanced Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brown-theme/5 via-transparent to-orange-theme/5"></div>
                <div className="absolute inset-0 bg-[url('/bg-pattern-1.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
                {/* Subtle themed floating orbs */}
                <div className="absolute top-10 left-20 w-32 h-32 bg-brown-theme/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-theme/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Vintage Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12"
                >
                    <div className="text-left">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="inline-flex items-center space-x-4 mb-6"
                        >
                            <AcademicCapIcon className="text-brown-theme w-10 h-10" />
                            <div className="h-0.5 w-16 bg-brown-theme/20"></div>
                            <span className="text-brown-theme text-[10px] font-sans font-bold tracking-[0.4em] uppercase">Curated Credentials</span>
                        </motion.div>
                        <SplitText 
                            text="Validating Excellence" 
                            className="text-4xl md:text-7xl text-white font-serif font-bold bg-gradient-to-r from-orange-theme via-orange-accent to-brown-theme bg-clip-text text-transparent"
                        />
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-white/40 text-lg max-w-sm lg:text-right font-sans font-medium border-r lg:border-r border-brown-theme/30 pr-8 hidden md:block"
                    >
                        Strategic certifications that bridge the gap between academic theory and industrial application.
                    </motion.p>
                </motion.div>



                {/* Certification Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="mb-16"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-3xl text-white/90 mb-6 font-serif font-bold border-l-4 border-orange-theme pl-6"
                    >
                        Certification
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        className="text-white/40 text-sm max-w-2xl mb-12 text-left font-sans"
                    >
                        Intensive professional training cycles focusing on specialized tech stacks and advanced engineering workflows.
                    </motion.p>
                    
                    {/* Certification Cards */}
                    <div className='flex flex-col space-y-8 max-w-4xl mx-auto'>
                        {certification.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className='relative pl-10 border-l-2 border-white/5 hover:border-orange-theme/50 transition-all duration-700'>
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-bgColor border-2 border-brown-theme rounded-full group-hover:scale-125 group-hover:bg-orange-theme transition-all duration-500"></div>
                                    
                                    <div className='space-y-4'>
                                        <div className='flex items-center space-x-6'>
                                            <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:rotate-6`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className='text-2xl font-bold text-white group-hover:text-orange-theme transition-colors duration-500 font-serif'>
                                                    {item.title}
                                                </h3>
                                                <p className='text-white/40 font-sans text-sm font-bold uppercase tracking-widest'>{item.issuer}</p>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-wrap items-center gap-4 text-xs font-bold'>
                                            {item.id && (
                                                <span className='px-4 py-1.5 bg-brown-theme/10 text-brown-theme rounded-xl border border-brown-theme/10'>
                                                    ID: {item.id}
                                                </span>
                                            )}
                                            {item.date && (
                                                <span className='px-4 py-1.5 bg-orange-theme/10 text-orange-theme rounded-xl border border-orange-theme/10'>
                                                    {item.date}
                                                </span>
                                            )}
                                            <MagneticWrapper>
                                                <button 
                                                    onClick={() => {
                                                        setSelectedCert(item);
                                                        setShowViewer(true);
                                                    }}
                                                    className="px-6 py-2 bg-gradient-to-r from-orange-theme to-brown-theme text-white rounded-xl font-bold uppercase tracking-wider text-[10px] hover:translate-x-2 transition-all duration-500"
                                                >
                                                    Unveil View
                                                </button>
                                            </MagneticWrapper>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificate Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                        <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-serif font-bold border-l-4 border-orange-theme pl-6">
                            Certificates
                        </h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        className="text-white/40 text-sm max-w-2xl mb-12 text-left font-sans"
                    >
                        Industry-recognized certificates that serve as immutable proofs of technical proficiency and professional grit.
                    </motion.p>
                    
                    {/* Enhanced Certificate Cards */}
                    <div className='flex flex-col space-y-8 max-w-4xl mx-auto'>
                        {certificates.map((cert, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className='relative pl-10 border-l-2 border-white/5 hover:border-olive-theme/50 transition-all duration-700'>
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-bgColor border-2 border-brown-theme rounded-full group-hover:scale-125 group-hover:bg-orange-theme transition-all duration-500"></div>
                                    
                                    <div className='space-y-4'>
                                        <div className='flex items-center space-x-6'>
                                            <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:-rotate-6`}>
                                                {cert.icon}
                                            </div>
                                            <div>
                                                <h3 className='text-2xl font-bold text-white group-hover:text-orange-theme transition-colors duration-500 font-serif'>
                                                    {cert.title}
                                                </h3>
                                                <p className='text-white/40 font-sans text-sm font-bold uppercase tracking-widest'>{cert.issuer}</p>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-wrap items-center gap-4 text-xs font-bold'>
                                            {cert.id && (
                                                <span className='px-4 py-1.5 bg-brown-theme/10 text-brown-theme rounded-xl border border-brown-theme/10'>
                                                    ID: {cert.id}
                                                </span>
                                            )}
                                            {cert.date && (
                                                <span className='px-4 py-1.5 bg-orange-theme/10 text-orange-theme rounded-xl border border-orange-theme/10'>
                                                    {cert.date}
                                                </span>
                                            )}
                                            <MagneticWrapper>
                                                <button 
                                                    onClick={() => {
                                                        setSelectedCert(cert);
                                                        setShowViewer(true);
                                                    }}
                                                    className="px-6 py-2 bg-gradient-to-r from-orange-theme to-brown-theme text-white rounded-xl font-bold uppercase tracking-wider text-[10px] hover:translate-x-2 transition-all duration-500"
                                                >
                                                    Inspect View
                                                </button>
                                            </MagneticWrapper>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificate Viewer */}
                {showViewer && selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowViewer(false)}
                    >
                        <motion.div 
                            initial={{ x: -100, scale: 0.8, opacity: 0 }}
                            animate={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            exit={{ x: 100, scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-bgColor rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                {/* Certificate Image */}
                                <motion.img 
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto object-contain"
                                    initial={{ scale: 0.5, x: -200 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                />
                                
                                {/* Certificate Info Overlay */}
                                <motion.div 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bgColor to-transparent p-10"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2 font-serif">{selectedCert.title}</h3>
                                            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{selectedCert.issuer}</p>
                                        </div>
                                        <div className="flex space-x-4">
                                            <AnimatedBtn href={selectedCert.link} innerTxt="Verify Credential" />
                                            <button 
                                                onClick={() => setShowViewer(false)}
                                                className="px-6 py-2 bg-white/5 text-white/70 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all duration-500"
                                            >
                                                Dismiss
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Bottom CTA */}

                <motion.div 

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}

                    viewport={{ once: true }}

                    className="text-center mt-16"

                >

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-3 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 transition-all duration-500 hover:border-orange-theme/30"
                    >
                        <CheckCircleIcon className="text-orange-theme w-6 h-6" />
                        <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Verifiable Professional Integrity</span>
                    </motion.div>

                </motion.div>

            </div>

        </section>

    );

};



export default Certificates;
