import React from 'react'
import Image from 'next/image'
import nitishImg from '../../../public/nitish.jpeg'
import "../globals.css";

const page = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto max-w-7xl py-20 px-4 relative">
                <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
                  
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">About</h1>
                    <p className="text-white text-xl md:text-3xl">I'm Nitish Kumar Singh, a third-year B.Tech CSE student at Lovely Professional University, passionate about building innovative digital solutions.</p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        Located in Bihar, India, with a solid educational foundation and practical industry experience, I specialize in Full Stack Web Development and Artificial Intelligence. My technical expertise spans across the MERN stack (MongoDB, Express.js, React, Node.js) for building interactive and responsive web applications.
                    </p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        <span className="font-semibold">Technical Skills:</span> JavaScript, PHP, HTML/CSS, React JS, Node JS, Express JS, Data Structures & Algorithms (C++), Problem-Solving, and Responsive Web Design. I have hands-on experience with databases like MongoDB and MySQL.
                    </p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        <span className="font-semibold">Recent Training:</span> I completed comprehensive MERN with Generative AI training from W3Grads (Jun'25-Jul'25), where I built multiple full-stack projects and integrated AI-powered features using Google Gemini API and other technologies.
                    </p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        <span className="font-semibold">Education:</span> B.Tech CSE from Lovely Professional University (2023-Present) with a CGPA of 8.13. Previous schooling includes DAV Public School (12th, 64.2%) and U.P. Public School (10th, 94%).
                    </p>
                    <p className='text-white text-base md:text-lg mx-auto md:mx-0'>Connect with me on <span className='font-bold'>Link<span className='text-[#3175b1]'>edin</span></span> <a href='https://www.linkedin.com/in/nitish-kr-singh1/' className='text-brand underline'>here</a> or check out my repos on <span className='font-bold'>Git<span className='text-[#3175b1]'>Hub</span></span> <a href='https://www.github.com/User-Nitish' className='text-brand underline'>here</a></p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <Image
                        src={nitishImg}
                        alt="Picture of Nitish Kumar"
                        width={360}
                        height={360}
                        className="rounded-lg object-contain w-full max-w-[360px]"
                        priority
                        quality={85}
                    />
                </div>
            </div>
        </>
    )
}

export default page
