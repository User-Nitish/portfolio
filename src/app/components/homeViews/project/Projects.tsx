import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from './AnimatedBtn'

const Projects = () => {
    return (
        <section className='max-w-6xl mx-auto py-24 px-4'>
            <h2 className="text-4xl text-white mb-8 text-center font-medium">Projects</h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                
                {/* Card 1 - FitLife */}
                <div className='space-y-6'>

                    {/* Image */}
                    <Image
                        src="/fitlife.png"
                        alt='screenshot of FitLife'
                        width={400}
                        height={400}
                        className='rounded-lg w-full h-auto'
                    />

                    {/* Information */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl text-white font-bold text-center'> FitLife</h3>
                        <p className='text-white text-sm text-center font-medium'>Jun'25 - Jul'25</p>
                        <div className='flex flex-wrap gap-2 text-white justify-center'>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>MongoDB</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Express.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>React.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Node.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Tailwind</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Gemini API</p>
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
                <div className='space-y-6'>

                    {/* Image */}
                    <Image
                        src="/farmfist.png"
                        alt='screenshot of FarmFist'
                        width={400}
                        height={400}
                        className='rounded-lg w-full h-auto'
                    />

                    {/* Information */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl text-white font-bold text-center'> FarmFist</h3>
                        <p className='text-white text-sm text-center font-medium'>Coming Soon</p>
                        <div className='flex flex-wrap gap-2 text-white justify-center'>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>MongoDB</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Express.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>React.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Node.js</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Tailwind</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Gemini API</p>
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
                <div className='space-y-6'>

                    {/* Image */}
                    <Image
                        src="/fleettrack.png"
                        alt='screenshot of FleetTrack'
                        width={400}
                        height={400}
                        className='rounded-lg w-full h-auto'
                    />

                    {/* Information */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl text-white font-bold text-center'> FleetTrack</h3>
                        <p className='text-white text-sm text-center font-medium'>Feb'25 - Mar'25</p>
                        <div className='flex flex-wrap gap-2 text-white justify-center'>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>HTML</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>Tailwind</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>JavaScript</p>
                            <p className='py-1 px-2 rounded-md border border-white border-opacity-50 text-xs'>PHP</p>
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

            <div className='flex justify-center mt-12'>
                <Link href="/experience" className='text-white px-4 py-2 bg-brand rounded-lg font-semibold'>
                    Learn more about my experience
                </Link>
            </div>
        </section>
    )
}

export default Projects
