import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from './AnimatedBtn'

const Projects = () => {
    return (
        <section className='max-w-6xl mx-auto py-24 px-4'>
            <h2 className="text-4xl text-white mb-8 text-center font-medium">Projects</h2>
            
            <div className='grid md:grid-cols-2 gap-16'>
                
                {/* Card 1 */}
                <div className='space-y-8'>

                    {/* Image */}
                    <Image
                        src="/gymskii-img.png"
                        alt='screenshot of gymskii'
                        width={550}
                        height={500}
                        className='rounded-lg w-full h-auto'
                    />

                    {/* Information */}
                    <div className='space-y-4'>
                        <h3 className='text-3xl text-white font-bold text-center'> gym<span className='text-[#3175b1]'>skii</span> </h3>
                        <div className='flex flex-wrap gap-3 text-white justify-center'>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>React</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>MongoDB</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>NextJS</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>TailwindCSS</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>AuthJS</p>
                        </div>
                        <p className='text-white text-sm md:text-base'>
                            Developed the marketing page for gymskii, a fitness-tracking platform designed to help
                            users achieve progressive overload by tracking and visualizing gym performance data. gymskii allows users to log
                            their weekly gym data and track their progress through a central dashboard, which includes dynamic graphics and
                            statistics to help users train more effectively and stay motivated. The current site allows you to log in/sign out
                            using Auth.js.
                        </p>
                        <div className='text-white border rounded-md p-3 text-sm md:text-base'>
                            <span className='text-brand font-semibold'>Currently working on: </span>Creating the dashboard for users to track and visualize their data (learning GraphQL and Apollo).
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col items-center space-y-4'>
                        <AnimatedBtn href='https://gymskii.com/' innerTxt="Go to the gymskii site" />
                        <AnimatedBtn href='https://github.com/samkolache/gymskii' innerTxt="View the source code" />
                    </div>

                </div>

                {/* Card 2 */}
                <div className='space-y-8'>

                    {/* Image */}
                    <Image
                        src="/scratch-img.png"
                        alt='screenshot of scratchToReact'
                        width={550}
                        height={500}
                        className='rounded-lg w-full h-auto'
                    />

                    {/* Information */}
                    <div className='space-y-4'>
                        <h3 className='text-3xl text-white font-bold text-center'> scratchToReact </h3>
                        <div className='flex flex-wrap gap-3 text-white justify-center'>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>React</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>NextJS</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>TailwindCSS</p>
                            <p className='py-2 px-3 rounded-md border border-white border-opacity-50 text-sm'>Sandpack</p>
                        </div>
                        <p className='text-white text-sm md:text-base'>
                            Developed scratchToReact to help friends interested in web development, making it a valuable project for honing my skills in vanilla JavaScript and React components. The current site shows tutorials on basic web components in vanilla HTML, CSS, and JS. I try to add a lesson a day to continue learning and helping others. The site’s code previews are made using Sandpack, providing an interactive learning experience. I plan to expand from web components into all types of tutorials for web development.
                        </p>
                        <div className='text-white border rounded-md p-3 text-sm md:text-base'>
                            <span className='text-brand font-semibold'>Currently working on: </span>Creating the React tutorials for current vanilla components.
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col items-center space-y-4'>
                        <AnimatedBtn href='https://scratch-to-react.vercel.app/' innerTxt="Go to the scratchToReact site" />
                        <AnimatedBtn href='https://github.com/samkolache/scratchToReact' innerTxt="View the source code" />
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
