'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import "../globals.css";

const Page = () => {
    const [selected, updateSelected] = useState('w3grads');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative py-20 px-4 md:px-16">
            <div
                className={clsx(
                    "absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]",
                    { "color-blur-spotify": selected === 'w3grads' },
                    { "color-blur": selected === 'fitlife' },
                    { "color-blur-uh": selected === 'lpu' }
                )}
            ></div>
            <div className="space-y-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white">Experience</h1>
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
                        className="cursor-pointer"
                    >
                        <h2 className={clsx(
                            "text-2xl md:text-2xl font-bold",
                            job === "w3grads" && "text-[#FF6B6B]",
                            job === "fitlife" && "text-[#1ED760]",
                            job === "lpu" && "text-[#C8102E]",
                            job === "club" && "text-[#3175b1]"
                        )}>
                            {job === "w3grads" ? "W3Grads" : job === "fitlife" ? "FitLife Project" : job === "lpu" ? "Lovely Professional University" : "Student Club & Organizations"}
                        </h2>
                        <h3 className="text-lg md:text-xl text-white font-medium">
                            {job === "w3grads" && "MERN & Gen AI Training"}
                            {job === "fitlife" && "Full Stack Developer"}
                            {job === "lpu" && "B.Tech CSE Student"}
                            {job === "club" && "Chief Operating Officer & Club President"}
                        </h3>
                        <h4 className="text-base md:text-lg text-white">
                            {job === "w3grads" && "Jun 2025 - Jul 2025"}
                            {job === "fitlife" && "Jun 2025 - Jul 2025"}
                            {job === "lpu" && "Jul 2023 - Aug 2027"}
                            {job === "club" && "Feb 2024 - Present"}
                        </h4>
                    </motion.div>
                ))}
            </div>
            <div className="py-12 pr-4 md:pr-16">
                <JobInformation key={selected} selected={selected} />
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
            className="bg-[#0E101B] bg-opacity-77 space-y-5 rounded-lg max-w-8xl p-6"
        >
            <h2 className="text-white text-2xl font-bold">Job Responsibilities:</h2>
            <ul className="list-disc text-white pl-5">
                {jobInfo.resp.map((resp, index) => (
                    <li key={index} className="mt-2">{resp}</li>
                ))}
            </ul>
            <div className="p-4">
                <h2 className="text-white text-2xl font-bold">Skills & Tools</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className="flex gap-2 py-2 px-4 items-center justify-center border border-white border-opacity-30 rounded-md whitespace-nowrap">
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
