import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from './AnimatedBtn'

const Projects = () => {
    return (
        <section className='w-full py-24 px-4 relative'>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl text-white mb-16 text-center font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</h2>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto'>
                    
                    {/* Card 1 - FitLife */}
                    <div className='space-y-6 group'>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/fitlife.png"
                                alt='screenshot of FitLife'
                                width={1600}
                                height={900}
                                className='rounded-xl w-full h-auto transform transition-transform duration-300 group-hover:scale-105'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Information */}
                        <div className='space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                            <h3 className='text-2xl text-white font-bold text-center'> FitLife</h3>
                            <p className='text-white text-sm text-center font-medium'>Jun'25 - Jul'25</p>
                            <div className='flex flex-wrap gap-2 text-white justify-center'>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>MongoDB</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Express.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>React.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Node.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Tailwind</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Gemini API</span>
                            </div>
                            <div className='space-y-2 text-white text-xs md:text-sm'>
                                <p>
                                    <span className='font-semibold text-brand'>Full-stack fitness platform</span> using MERN with AI integration for personalized workout and meal plans.
                                </p>
                                <p>
                                    <span className='font-semibold text-brand'>AI-powered features</span> including Google Gemini API chat assistant, YouTube video integration, and food image tracking.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col items-center'>
                            <AnimatedBtn href='https://github.com/PiyushRw/Fitlife.git' innerTxt="View Code" />
                        </div>

                    </div>

                    {/* Card 2 - FarmFist */}
                    <div className='space-y-6 group'>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/farmfist.png"
                                alt='screenshot of FarmFist'
                                width={1600}
                                height={900}
                                className='rounded-xl w-full h-auto transform transition-transform duration-300 group-hover:scale-105'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Information */}
                        <div className='space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                            <h3 className='text-2xl text-white font-bold text-center'> FarmFist</h3>
                            <p className='text-white text-sm text-center font-medium'>Coming Soon</p>
                            <div className='flex flex-wrap gap-2 text-white justify-center'>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>MongoDB</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Express.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>React.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Node.js</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Tailwind</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Gemini API</span>
                            </div>
                            <div className='space-y-2 text-white text-xs md:text-sm'>
                                <p>
                                    <span className='font-semibold text-brand'>Biosecurity management portal</span> empowering farmers with complete control over pig and poultry farm safety protocols.
                                </p>
                                <p>
                                    <span className='font-semibold text-brand'>Centralized interface</span> for monitoring, managing, and implementing comprehensive farm safety measures in real-time.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col items-center'>
                            <AnimatedBtn href='https://github.com/User-Nitish/FarmFist.git' innerTxt="View Code" />
                        </div>

                    </div>

                    {/* Card 3 - FleetTrack */}
                    <div className='space-y-6 group'>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/fleettrack.png"
                                alt='screenshot of FleetTrack'
                                width={1600}
                                height={900}
                                className='rounded-xl w-full h-auto transform transition-transform duration-300 group-hover:scale-105'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Information */}
                        <div className='space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                            <h3 className='text-2xl text-white font-bold text-center'> FleetTrack</h3>
                            <p className='text-white text-sm text-center font-medium'>Feb'25 - Mar'25</p>
                            <div className='flex flex-wrap gap-2 text-white justify-center'>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>HTML</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>Tailwind</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>JavaScript</span>
                                <span className='py-1 px-3 rounded-full border border-white/30 text-xs bg-white/10 backdrop-blur-sm'>PHP</span>
                            </div>
                            <div className='space-y-2 text-white text-xs md:text-sm'>
                                <p>
                                    <span className='font-semibold text-brand'>Real-time vehicle tracking</span> application for business fleets and personal vehicles with live map functionality.
                                </p>
                                <p>
                                    <span className='font-semibold text-brand'>30% efficiency boost</span> through streamlined logistics, optimized fleet operations, and advanced monitoring capabilities.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col items-center'>
                            <AnimatedBtn href='https://github.com/User-Nitish/Real-time-vehicle-tracking.git' innerTxt="View Code" />
                        </div>

                    </div>
                </div>

                <div className='flex justify-center mt-16'>
                    <Link href="/experience" className='text-white px-8 py-4 bg-gradient-to-r from-brand to-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105'>
                        Learn more about my experience
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
