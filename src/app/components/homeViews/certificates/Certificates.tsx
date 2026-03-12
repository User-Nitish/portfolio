'use client'
import React, { useState } from 'react'
import { AcademicCapIcon, StarIcon, CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/solid'
import AnimatedBtn from '../project/AnimatedBtn'

const Certificates = () => {
    const [hoveredCert, setHoveredCert] = useState(null);

    const certificates = [
        {
            title: "Full Stack (MERN) with Gen AI",
            issuer: "W3Grads",
            id: "FLAMES25MERN1898",
            link: "https://theangaarbatch.in/verify-my-certificate/",
            date: "Jul'25",
            icon: <AcademicCapIcon className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Skill-a-thon",
            issuer: "MongoDB & ICT Academy",
            link: "https://www.credly.com/users/nitish-kumar-singh.64ee3ba5/badges#credly",
            date: "Jun'25",
            icon: <TrophyIcon className="w-6 h-6" />,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730022504244079.pdf",
            date: "Apr'25",
            icon: <StarIcon className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Data Structure & Algorithm Using C++",
            issuer: "CipherSchools",
            id: "CS2024-10203",
            link: "https://www.cipherschools.com/",
            date: "Nov'24",
            icon: <CheckCircleIcon className="w-6 h-6" />,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/Nitish111/responsive-web-design",
            date: "",
            icon: <TrophyIcon className="w-6 h-6" />,
            color: "from-blue-500 to-indigo-500"
        }
    ];

    return (
        <section className='w-full py-24 md:py-32 relative overflow-hidden'>
            {/* Enhanced Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                {/* Floating orbs */}
                <div className="absolute top-10 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <AcademicCapIcon className="text-cyan-400 w-8 h-8 animate-pulse" />
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Achievements</span>
                        <div className="h-px w-24 bg-gradient-to-r from-cyan-400 via-transparent to-transparent"></div>
                        <AcademicCapIcon className="text-cyan-400 w-8 h-8 animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-6xl text-white mb-8 font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        CERTIFICATES
                    </h2>
                    <p className="text-white/70 text-lg max-w-3xl mx-auto">
                        Professional certifications and achievements that showcase my expertise and commitment to continuous learning
                    </p>
                </div>

                {/* Enhanced Certificate Cards */}
                <div className='space-y-6 max-w-6xl mx-auto'>
                    {certificates.map((cert, index) => (
                        <div 
                            key={index} 
                            className='group relative'
                            onMouseEnter={() => setHoveredCert(index)}
                            onMouseLeave={() => setHoveredCert(null)}
                        >
                            {/* Background glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${cert.color}/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                            
                            <div className='relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1'>
                                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                                    {/* Left side - Icon and content */}
                                    <div className='flex items-start space-x-6'>
                                        {/* Icon container */}
                                        <div className={`relative w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white">
                                                {cert.icon}
                                            </div>
                                            {/* Orbiting star on hover */}
                                            {hoveredCert === index && (
                                                <StarIcon className="absolute -top-2 -right-2 text-yellow-400 w-4 h-4 animate-spin" />
                                            )}
                                        </div>
                                        
                                        {/* Certificate info */}
                                        <div className='space-y-3'>
                                            <h3 className='text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                                                {cert.title}
                                            </h3>
                                            <div className='flex flex-wrap items-center gap-4 text-sm'>
                                                <span className='text-white/70 font-medium'>
                                                    <span className="text-gray-400">by</span> {cert.issuer}
                                                </span>
                                                {cert.id && (
                                                    <span className='text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full font-medium'>
                                                        ID: {cert.id}
                                                    </span>
                                                )}
                                                {cert.date && (
                                                    <span className='text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full font-medium'>
                                                        {cert.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Button */}
                                    <div className='mt-6 md:mt-0'>
                                        <AnimatedBtn href={cert.link} innerTxt="View Certificate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
                        <CheckCircleIcon className="text-cyan-400 w-5 h-5" />
                        <span className="text-cyan-400 font-medium">All certificates are verifiable</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;