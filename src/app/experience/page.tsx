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
            
            {/* Experience Section */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="space-y-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">Experience </h1>
                        {["w3grads", "fitlife", "lpu", "club"].map((job) => (
                            <motion.div
                                key={job}
                                onClick={() => updateSelected(job)}
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: selected === job ? [1, 1.05, 1] : 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    repeat: selected === job ? Infinity : 0,
                                    repeatType: "reverse",
                                }}
                                className="cursor-pointer flex items-center space-x-3 group"
                            >
                                <h2 className={clsx(
                                    "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-300 hover:to-teal-300 transition-all duration-300",
                                    job === "w3grads" && "hover:from-indigo-300 hover:via-blue-300 hover:to-cyan-300",
                                    job === "fitlife" && "hover:from-teal-300 hover:via-green-300 hover:to-emerald-300",
                                    job === "lpu" && "hover:from-purple-300 hover:via-pink-300 hover:to-rose-300",
                                    job === "club" && "hover:from-yellow-300 hover:via-orange-300 hover:to-red-300"
                                )}>
                                    {job === "w3grads" ? "W3Grads" : job === "fitlife" ? "FitLife Project" : job === "lpu" ? "Lovely Professional University" : "Student Club & Organizations"}
                                </h2>
                                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                    <div className="py-12 pr-4 md:pr-16">
                        <JobInformation key={selected} selected={selected} />
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">Education</h1>
                <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4">
                        {/* LPU */}
                        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-4 h-4 bg-red-500 rounded-full mb-4 relative z-10"></div>
                            <div className="text-white/70 text-sm mb-2">2023 – Present</div>
                            {/* Timeline segment starts right below year */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-white/30 shadow-lg shadow-white/30"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-4">LOVELY PROFESSIONAL UNIVERSITY</h3>
                            <div className="text-sm md:text-lg text-white/90 mb-2">Bachelor of Technology - Computer Science and Engineering</div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                                <span className="text-yellow-400 font-semibold">CGPA: 8.13</span>
                                <span className="text-white/70">Phagwara, Punjab</span>
                            </div>
                        </div>

                        {/* DAV Public School */}
                        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-4 h-4 bg-red-500 rounded-full mb-4 relative z-10"></div>
                            <div className="text-white/70 text-sm mb-2">2021 – 2023</div>
                            {/* Timeline segment starts right below year */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-white/60 via-white/40 to-transparent shadow-lg shadow-white/30"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-4">DAV PUBLIC SCHOOL</h3>
                            <div className="text-sm md:text-lg text-white/90 mb-2">12th</div>
                            <div className="text-white/70">Patna, Bihar</div>
                        </div>

                        {/* U.P. Public School */}
                        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-4 h-4 bg-red-500 rounded-full mb-4 relative z-10"></div>
                            <div className="text-white/70 text-sm mb-2">2020 – 2021</div>
                            {/* Timeline segment starts right below year */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-l from-white/60 via-white/40 to-transparent shadow-lg shadow-white/30"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-4">U.P. PUBLIC SCHOOL</h3>
                            <div className="text-sm md:text-lg text-white/90 mb-2">10th</div>
                            <div className="text-white/70">Suri, West Bengal</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobInformation = ({ selected }) => {
    const jobData = {
        w3grads: {
            resp: [
                "Completed intensive MERN (MongoDB, Express.js, React, Node.js) with Generative AI training focusing on full-stack web development fundamentals.",
                "Built multiple React applications including dynamic to-do lists and data-driven applications as part of structured assignments and hands-on projects.",
                "Worked extensively with REST APIs, integrating them across different pages to enable seamless data transfer, API communication patterns, and dynamic content rendering.",
                "Engaged in daily Scrum meetings to provide project updates, resolve coding issues, clarify technical doubts with mentors, and collaborate with fellow developers.",
                "Integrated AI-generated data and Google Gemini API to enhance features and user experience in web applications, demonstrating practical AI implementation skills.",
                "Earned Full Stack MERN with Gen AI certification (ID: FLAMES25MERN1898) and MongoDB & ICT Academy Skill-a-thon certificate."
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
                "Engineered a full-stack fitness and nutrition companion platform using MERN stack (MongoDB, Express.js, React, Node.js) integrating generative AI capabilities.",
                "Implemented customized daily workout and meal plan generation based on user input of body metrics and preferences, improving user engagement by 35%.",
                "Integrated YouTube Data API for instructional workout videos, food image upload functionality with dietary tracking, and dynamic plan/profile updates based on real-time user progress.",
                "Embedded an AI-powered chat assistant leveraging Google Gemini API to provide personalized workout advice, nutritional guidance, and motivational support.",
                "Developed responsive UI using React and Tailwind CSS ensuring seamless experience across all devices and screen sizes.",
                "Deployed and maintained production-ready application with optimized performance and scalability considerations."
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
                "Pursuing Bachelor of Technology in Computer Science and Engineering with a current CGPA of 8.13 (as of 2023-Present).",
                "Developing expertise in full-stack web development, artificial intelligence, data structures, algorithms, and problem-solving through coursework and projects.",
                "Actively participating in technical training programs, earning certifications in Cloud Computing (NPTEL), Responsive Web Design (freeCodeCamp), and specialized tech stack training.",
                "Building a strong foundation in programming languages including JavaScript, Python, PHP, C++, and Java through academic and hands-on project work.",
                "Gaining practical experience in REST APIs, responsive web design, database management (MySQL, MongoDB), and modern frontend frameworks.",
                "Committed to continuous learning and staying updated with latest technologies and industry best practices in web development and AI."
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
                "Chief Operating Officer (COO) at Arambh Organization, Division of Student Organizations, LPU (Mar'25 - Present)",
                "Led a dynamic group of 27 members to organize and manage non-technical events including movie screenings, quizzes, and cultural programs across campus.",
                "Club President at Zillion: Team L&T under Center of Professional Enhancement, LPU (Feb'24 - May'25)",
                "Organized and conducted coding competitions, technical webinars, and seminars, leading a team of 30 people to foster and enhance developer skills.",
                "Mentored junior students in web development, DSA, and AI concepts while providing guidance on career development and technical skill advancement.",
                "Coordinated with senior faculty, professionals, and alumni to arrange guest lectures, networking events, and collaborative projects that enriched the learning experience of all club members."
            ],
            tools: [
                { name: "Leadership", img: "/HTML.svg" },
                { name: "Teaching", img: "/JS.svg" },
                { name: "Mentoring", img: "/REACT.svg" },
                { name: "Teamwork", img: "/NODE.svg" },
                { name: "Events", img: "/NEXT.svg" },
                { name: "Community", img: "/EXPRESS.svg" },
            ]
        }
    };

    const jobInfo = jobData[selected];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={clsx(
                "space-y-5 rounded-lg max-w-8xl p-6",
                selected === "w3grads" && "bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30",
                selected === "fitlife" && "bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30",
                selected === "lpu" && "bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30",
                selected === "club" && "bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30"
            )}
        >
            <h2 className="text-white text-2xl font-bold">Job Responsibilities:</h2>
            <ul className="list-disc text-white pl-5">
                {jobInfo.resp.map((resp, index) => (
                    <li key={index} className="mt-2">{resp}</li>
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
            
            <div className="p-4">
                <h2 className="text-white text-2xl font-bold">Skills & Tools</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className="flex gap-2 py-2 px-4 items-center justify-center border border-white border-opacity-30 rounded-md whitespace-nowrap bg-white/5 backdrop-blur-sm">
                            <Image src={tool.img} alt={tool.name} width={30} height={30} />
                            <p className="text-white text-sm">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
