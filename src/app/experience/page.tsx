'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import "../globals.css";

const Page = () => {
    const [selected, updateSelected] = useState('w3grads');

    return (
        <div className="w-full relative py-20 px-4">
            <div
                className={clsx(
                    "absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]",
                    { "color-blur-spotify": selected === 'w3grads' },
                    { "color-blur": selected === 'fitlife' },
                    { "color-blur-uh": selected === 'lpu' }
                )}
            ></div>
            
            {/* Education Section */}
            <div className="max-w-7xl mx-auto mb-48">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Education</h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Timeline Above Cards */}
                    <div className="relative mb-20">
                        {/* Main Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 transform -translate-y-1/2">
                            <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 blur-sm"></div>
                        </div>
                        
                        {/* Timeline Progress Animation */}
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform -translate-y-1/2 origin-left"
                        ></motion.div>
                        
                        {/* Timeline Dots */}
                        <div className="relative flex justify-between items-center px-8">
                            {/* LPU Timeline Dot */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                whileHover={{ scale: 1.2 }}
                                className="relative w-1/3 flex justify-center"
                            >
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 relative z-10">
                                    <div className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                                    <div className="absolute inset-1 bg-white rounded-full opacity-90"></div>
                                    <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* DAV Timeline Dot */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.2 }}
                                className="relative w-1/3 flex justify-center"
                            >
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full shadow-lg shadow-purple-400/50 relative z-10">
                                    <div className="absolute inset-0 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-30"></div>
                                    <div className="absolute inset-1 bg-white rounded-full opacity-90"></div>
                                    <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* U.P. Timeline Dot */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                whileHover={{ scale: 1.2 }}
                                className="relative w-1/3 flex justify-center"
                            >
                                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/50 relative z-10">
                                    <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-30"></div>
                                    <div className="absolute inset-1 bg-white rounded-full opacity-90"></div>
                                    <div className="absolute inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 px-8">
                        {/* LPU */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex-[1.2] relative flex flex-col items-center md:items-start text-center md:text-left bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-80"
                        >
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4 relative z-10 shadow-lg shadow-blue-400/50"></div>
                            <div className="text-blue-300 text-sm font-semibold mb-2">2023 – Present</div>
                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-lg shadow-blue-400/30"></div>
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/lpu.png"
                                    alt="LPU Logo"
                                    width={100}
                                    height={100}
                                    className="rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">LOVELY PROFESSIONAL UNIVERSITY</h3>
                                    <div className="text-sm md:text-lg text-blue-100 mb-3">BTech - Computer Science and Engineering</div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-auto">
                                <span className="text-yellow-400 font-semibold bg-yellow-400/20 px-3 py-1 rounded-full text-sm">CGPA: 8.17</span>
                                <span className="text-blue-200/80">📍 Phagwara, Punjab</span>
                            </div>
                        </motion.div>

                        {/* DAV Public School */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex-1 relative flex flex-col items-center md:items-start text-center md:text-left bg-gradient-to-br from-purple-900/20 to-indigo-900/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-80"
                        >
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mb-4 relative z-10 shadow-lg shadow-purple-400/50"></div>
                            <div className="text-purple-300 text-sm font-semibold mb-2">2021 – 2023</div>
                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-lg shadow-purple-400/30"></div>
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/dav.png"
                                    alt="DAV Logo"
                                    width={90}
                                    height={90}
                                    className="rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">D.A.V. PUBLIC SCHOOL</h3>
                                    <div className="text-sm md:text-lg text-purple-100 mb-3">Senior Secondary - 12th Grade</div>
                                </div>
                            </div>
                            <div className="flex-1"></div>
                            <div className="text-purple-200/80 mt-auto">📍 Patna, Bihar</div>
                        </motion.div>

                        {/* U.P. Public School */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex-1 relative flex flex-col items-center md:items-start text-center md:text-left bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 h-80"
                        >
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-4 relative z-10 shadow-lg shadow-green-400/50"></div>
                            <div className="text-green-300 text-sm font-semibold mb-2">2020 – 2021</div>
                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent shadow-lg shadow-green-400/30"></div>
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/up.png"
                                    alt="U.P. Board Logo"
                                    width={100}
                                    height={100}
                                    className="rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">U.P. PUBLIC SCHOOL</h3>
                                    <div className="text-sm md:text-lg text-green-100 mb-3">Primary & Secondary Education</div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-auto">
                                <span className="text-green-300 font-semibold bg-green-400/20 px-3 py-1 rounded-full text-sm">10th Grade</span>
                                <span className="text-green-200/80">📍 Suri, West Bengal</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto mb-32"
            >
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Experience</h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="space-y-10 flex items-center justify-center min-h-[400px]">
                        <div className="space-y-10 w-full">
                            {["w3grads", "fitlife", "lpu", "club"].map((job, index) => (
                            <motion.div
                                key={job}
                                onClick={() => updateSelected(job)}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.3 + index * 0.1, 
                                    ease: "easeOut",
                                    scale: selected === job ? { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } : {}
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                animate={{
                                    scale: selected === job ? [1, 1.05, 1] : 1,
                                }}
                                className="cursor-pointer flex items-center space-x-3 group"
                            >
                                <h2 className={clsx(
                                    "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent hover:transition-all duration-300",
                                    job === "w3grads" && "from-indigo-400 via-blue-400 to-cyan-400 hover:from-indigo-300 hover:via-blue-300 hover:to-cyan-300",
                                    job === "fitlife" && "from-teal-400 via-green-400 to-emerald-400 hover:from-teal-300 hover:via-green-300 hover:to-emerald-300",
                                    job === "lpu" && "from-purple-400 via-pink-400 to-rose-400 hover:from-purple-300 hover:via-pink-300 hover:to-rose-300",
                                    job === "club" && "from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-300 hover:via-orange-300 hover:to-red-300"
                                )}>
                                    {job === "w3grads" ? "W3Grads" : job === "fitlife" ? "FitLife Project" : job === "lpu" ? "Lovely Professional University" : "Student Club & Organizations"}
                                </h2>
                                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                    <div className="py-12 pr-4 md:pr-16">
                        <JobInformation key={selected} selected={selected} />
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

const JobInformation = ({ selected }) => {
    const jobData = {
        w3grads: {
            resp: [
                "Dived deep into the MERN universe with Generative AI superpowers, mastering the art of full-stack web wizardry.",
                "Crafted interactive React masterpieces including dynamic to-do apps and data-driven wonders that actually work!",
                "Became an API whisperer, making REST APIs dance and sing across pages for seamless data magic.",
                "Rocked daily Scrum ceremonies like a coding ninja, squashing bugs and sharing wisdom with fellow developers.",
                "Wove AI magic with Google Gemini API, turning ordinary apps into intelligent digital companions.",
                "Scored shiny certifications: Full Stack MERN with Gen AI badge and MongoDB Skill-a-thon champion trophy!"
            ],
            tools: [
                { name: "React", img: "/REACT.svg" },
                { name: "Node.js", img: "/NODE.svg" },
                { name: "Express", img: "/EXPRESS.svg" },
                { name: "MongoDB", img: "/MONGO.svg" },
                { name: "Tailwind", img: "/TAILWIND.svg" },
                { name: "JavaScript", img: "/JS.svg" },
            ]
        },
        fitlife: {
            resp: [
                "Engineered a fitness revolution with FitLife - a MERN stack powerhouse that makes workouts smart and nutrition fun!",
                "Created AI-powered workout and meal plans that adapt to users' bodies, boosting engagement by a whopping 35%!",
                "Integrated YouTube fitness gurus and food tracking magic, making healthy living actually enjoyable.",
                "Built an AI chat buddy using Google Gemini that's like having a personal trainer in your pocket.",
                "Designed a stunningly responsive interface that looks gorgeous on phones, tablets, and giant screens.",
                "Launched a production-ready app that runs smoother than a freshly oiled machine!"
            ],
            tools: [
                { name: "React", img: "/REACT.svg" },
                { name: "Node.js", img: "/NODE.svg" },
                { name: "Express", img: "/EXPRESS.svg" },
                { name: "MongoDB", img: "/MONGO.svg" },
                { name: "Tailwind", img: "/TAILWIND.svg" },
                { name: "Google Gemini API", img: "/JS.svg" },
            ]
        },
        lpu: {
            resp: [
                "On an epic quest for B.Tech glory in Computer Science, currently rocking a solid 8.17 CGPA!",
                "Mastering the digital arts of full-stack development, AI wizardry, and algorithmic problem-solving.",
                "Collecting shiny certifications like a boss: Cloud Computing (NPTEL), Responsive Web Design (freeCodeCamp), and more!",
                "Becoming fluent in multiple programming languages - JavaScript, Python, PHP, C++, and Java - like a coding polyglot!",
                "Building real-world skills in REST APIs, responsive design, and database management while staying caffeinated.",
                "On a never-ending adventure to stay ahead of the tech curve and learn all the cool new things!"
            ],
            tools: [
                { name: "JavaScript", img: "/JS.svg" },
                { name: "Python", img: "/PYTHON.svg" },
                { name: "C++", img: "/CPP.svg" },
                { name: "React", img: "/REACT.svg" },
                { name: "HTML", img: "/HTML.svg" },
                { name: "CSS", img: "/CSS.svg" },
            ]
        },
        club: {
            resp: [
                "Commanding the ship as COO at Arambh Organization, steering student organizations to greatness (Mar'25 - Present)",
                "Led an awesome squad of 27 members, turning campus life into an adventure with movie nights, brain-teasing quizzes, and cultural celebrations!",
                "Reigned as Club President at Zillion: Team L&T, transforming tech education into an exciting journey (Feb'24 - May'25)",
                "Orchestrated epic coding battles, tech webinars, and knowledge-sharing sessions, leading a dream team of 30 future tech leaders!",
                "Became a coding sensei, guiding junior devs through the mystical realms of web development, DSA, and AI wisdom.",
                "Connected students with industry wizards and tech gurus, creating a bridge between classroom learning and real-world magic!"
            ],
            tools: [
                { name: "Leadership", img: "/leadership.jpg" },
                { name: "Mentoring", img: "/mentoring.jpg" },
                { name: "Teamwork", img: "/teamwork.jpg" },
                { name: "Events", img: "/events.jpg" },
                { name: "Community", img: "/community.jpg" },
            ]
        }
    };

    const jobInfo = jobData[selected];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={clsx(
                "space-y-4 rounded-lg max-w-6xl p-4",
                selected === "w3grads" && "bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30",
                selected === "fitlife" && "bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30",
                selected === "lpu" && "bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30",
                selected === "club" && "bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30"
            )}
        >
            <h2 className="text-white text-xl font-bold">Job Responsibilities:</h2>
            <ul className="list-disc text-white/90 pl-4 text-sm">
                {jobInfo.resp.map((resp, index) => (
                    <li key={index} className="mt-1 text-sm">{resp}</li>
                ))}
            </ul>
            
            {/* Organization Image for w3grads - positioned after responsibilities */}
            {selected === "w3grads" && (
                <div className="flex justify-center my-8">
                    <Image 
                        src="/w3grad.png" 
                        alt="W3Grads Certificate" 
                        width={280} 
                        height={180} 
                        className="rounded-lg border-2 border-red-500/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            )}
            
            <div className="p-3">
                <h2 className="text-white text-xl font-bold">Skills & Tools</h2>
                <div className="flex flex-wrap justify-center gap-3 mt-3">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className="flex gap-2 py-1 px-3 items-center justify-center border border-white border-opacity-30 rounded-md whitespace-nowrap bg-white/5 backdrop-blur-sm">
                            <Image 
    src={tool.img || "/placeholder.svg"} 
    alt={tool.name} 
    width={30} 
    height={30} 
    className="rounded-full object-contain"
/>
                            <p className="text-white text-xs">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
