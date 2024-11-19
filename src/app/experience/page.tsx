'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import "../globals.css";

const Page = () => {
    const [selected, updateSelected] = useState('spotify');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative py-20 px-4 md:px-16">
            <div
                className={clsx(
                    "absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]",
                    { "color-blur-spotify": selected === 'spotify' },
                    { "color-blur": selected === 'careerCertified' },
                    { "color-blur-uh": selected === 'uh' }
                )}
            ></div>
            <div className="space-y-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white">Experience</h1>
                {["careerCertified", "spotify", "uh"].map((job) => (
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
                            job === "careerCertified" && "text-[#523466]",
                            job === "spotify" && "text-[#1ED760]",
                            job === "uh" && "text-[#C8102E]"
                        )}>
                            {job === "careerCertified" ? "Arduino Uno Expert" : job === "spotify" ? "Zillion" : "Lovely Professional University"}
                        </h2>
                        <h3 className="text-lg md:text-xl text-white font-medium">
                            {job === "careerCertified" && "Hardware Project Supporter"}
                            {job === "spotify" && "Club President"}
                            {job === "uh" && "Student"}
                        </h3>
                        <h4 className="text-base md:text-lg text-white">
                            {job === "careerCertified" && "Aug 2023 - December 2023"}
                            {job === "spotify" && "May 2023 - August 2023"}
                            {job === "uh" && "July 2023 - Aug 2027"}
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
        careerCertified: {
            resp: [
                "Created and refined product mockups in Figma, including a student calendar, using insights from user interviews to align design features with user expectations",
                "Conducted UX research and proposed design enhancements for the CE Shop brand website (AHIT), crafting tailored user experiences aligned with key personas to boost user engagement.",
                "Assisted in migrating content from Drupal to Contentful CMS, creating pages and CTAs with a focus on maintaining 99% data retention and content consistency."
            ],
            tools: [
                { name: "Contentful", img: "/CONTENTFUL.svg" },
                { name: "Figma", img: "/FIGMA.svg" },
                { name: "Miro", img: "/MIRO.svg" },
            ]
        },
        spotify: {
            resp: [
                "Built a NextJS web application for the OneTrust testing environment, facilitating real-time testing of various cookie banners.",
                "Established a robust OneTrust testing environment to streamline testing of 15 unique cookie banners, ensuring accuracy, functionality, and consistent visual design.",
                "Created a customized legal workflow solution for the Megaphone podcast team, using DocuSign, resulting in a 15% reduction in time spent in the contract lifecycle management process"
            ],
            tools: [
                { name: "React", img: "/REACT.svg" },
                { name: "Typescript", img: "/TYPESCRIPT.svg" },
                { name: "NextJS", img: "/NEXT.svg" },
                { name: "Express", img: "/EXPRESS.svg" },
            ]
        },
        uh: {
            resp: [
                "Developed and optimized University webpages using HTML, CSS, and JavaScript within a content management system, enhancing accessibility and reinforcing the University’s online presence and reputation.",
                "Migrated 50 web pages from a legacy CMS to a modern platform, ensuring precise content transfer and seamless functionality for an uninterrupted user experience.",
                "Proactively resolved 10+ website bugs each month, ensuring a seamless and reliable user experience."
            ],
            tools: [
                { name: "HTML", img: "/HTML.svg" },
                { name: "CSS", img: "/CSS.svg" },
                { name: "Javascript", img: "/JS.svg" },
                { name: "Bootstrap", img: "/BOOTSTRAP.svg" },
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
                <div className="grid grid-cols-2 sm:flex sm:justify-center gap-6 mt-4">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className="flex gap-2 py-2 px-8 items-center justify-center border border-white border-opacity-30 rounded-md">
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
